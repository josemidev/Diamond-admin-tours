/* eslint-disable @typescript-eslint/no-unused-expressions */
import useAxiosPut from "@/hooks/useAxiosPut";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, notification, Select } from "antd";
import React from 'react';
import { InitialStatus, NewStatus } from '../Cards/StatusCard';

export default function ReservationChangeStatus({ children, data, refetch }: IReservationDrawerProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPut(`/dashboard/change-status/${data?._id}`, {
    manual: true,
    onError: (e): void => {
      const mgs = e
      notification.error({
        message: 'Error',
        description: mgs.message,
        placement: 'topRight'
      });
    },
    onSuccess: ({ data }: { data: unknown }): void => {
      notification.success({
        message: 'Success',
        description: 'Estado actualizado exitosamente',
        placement: 'topRight'
      });
      setIsModalOpen(false);
      refetch && refetch()
    }
  })

  function onFinish(values: { newStatus: string, observations: string }): void {
    const { newStatus, observations } = values;

    const nextStatus: Record<string, string> = {
      unrevised: 'review',
      approved: 'rejected',
    };

    action.run({
      status: nextStatus[data?.status ?? ''] || newStatus,
      observations
    })
  }

  return (
    <>
      <section className="w-full" onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <section className="flex flex-col gap-y-4 justify-between">
            <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
              {data?.tourName}
            </p>
            <p className='text-[14px] text-[#646464]'>
              ¿Quieres actualizar el estado de la solicitud de reserva con ID
              <span className='text-diamondPrimary'> {data?.orderNumber}</span>?
            </p>
            {(data?.status === 'unrevised' || data?.status === 'approved') &&
              <section className="flex gap-x-4 flex-wrap">
                <InitialStatus status={data?.status} />
                <ArrowRightOutlined className='text-[#646464] text-[16px]' />
                <NewStatus status={data?.status} />
              </section>
            }
            {data?.status === 'review' &&
              <Form.Item
                noStyle
                rules={[{ required: true, message: 'Status is required' }]}
                name='newStatus'
              >
                <Select
                  options={[
                    { value: 'approved', label: 'Aprobado' },
                    { value: 'rejected', label: 'Rechazado' },
                  ]}
                  placeholder='Nuevo estado'
                />
              </Form.Item>
            }
            <Form.Item
              noStyle
              required={false}
              name='observations'
            >
              <Input.TextArea
                style={{ resize: 'none' }}
                showCount
                rows={4}
                maxLength={200}
                className='!h-[80px]'
                placeholder='Observaciones (Opcional)'
              />
            </Form.Item>
          </section>
          <section className="flex gap-x-4 mt-10">
            <Button
              onClick={handleCancel}
              className="w-full hover:!text-diamondBlack1"
              size="large"
              type='default'
            >
              Cancelar
            </Button>
            <Button
              loading={action.loading}
              htmlType="submit"
              type='primary'
              className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
              size="large"
            >
              Cambiar estado
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}