import React from 'react'
import { Button, Input, Modal, Select } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import { ArrowRightOutlined } from '@ant-design/icons';
import { InitialStatus, NewStatus } from '../Cards/StatusCard';

export default function ReservationChangeStatus({ children, data }: IReservationDrawerProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full" onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <section className="flex flex-col gap-y-4 justify-between">
          <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
            {data?.name}
          </p>
          <p className='text-[14px] text-[#646464]'>
            ¿Quieres actualizar el estado de la solicitud de reserva con ID
            <span className='text-diamondPrimary'> {data?._id}</span>?
          </p>
          {(data?.status === 'unrevised' || data?.status === 'approved') &&
            <section className="flex gap-x-4 flex-wrap">
              <InitialStatus status={data?.status} />
              <ArrowRightOutlined className='text-[#646464] text-[16px]' />
              <NewStatus status={data?.status} />
            </section>
          }
          {data?.status === 'review' &&
            <Select
              options={[
                { value: 'approved', label: 'Aprobado' },
                { value: 'rejected', label: 'Rechazado' },
              ]}
              placeholder='Nuevo estado'
            />
          }
          <Input.TextArea
            showCount
            rows={4}
            maxLength={200}
            className='!h-[80px]'
            placeholder='Observaciones (Opcional)'
          />
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
            type='primary'
            className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
            size="large"
          >
            Cambiar estado
          </Button>
        </section>
      </Modal>
    </>
  )
}