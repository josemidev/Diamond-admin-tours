import React from 'react'
import { Button, Modal, notification } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import useAxiosPut from "@/hooks/useAxiosPut";

export default function ReservationCancel({ children, data, refetch }: IReservationDrawerProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPut(`/dashboard/archived/${data?._id}`, {
    manual: true,
    onError: (e): void => {
      const mgs = e
      notification.error({
        message: 'Error',
        description: mgs.message,
        placement: 'topRight'
      });
    },
    onSuccess: ({ data }: { data: any }): void => {
      notification.success({
        message: 'Success',
        description: data.message,
        placement: 'topRight'
      });
      setIsModalOpen(false);
      refetch && refetch()
    }
  })

  function onFinish(): void {
    action.run({
      id: data?._id,
      isArchived: !data?.isArchived
    })
  }

  return (
    <>
      <section className="w-full" onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
          {data?.tourName}
        </p>
        <p className='text-[14px] text-[#646464] mt-2'>
          ¿Quieres {data?.isArchived ? 'desarchivar' : 'archivar'}  solicitud de reserva con ID
          <span className='text-diamondPrimary'> {data?._id}</span>?
        </p>
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
            onClick={onFinish}
            type='primary'
            className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
            size="large"
          >
            {data?.isArchived ? 'Desarchivar' : 'Archivar'}
          </Button>
        </section>
      </Modal>
    </>
  )
}