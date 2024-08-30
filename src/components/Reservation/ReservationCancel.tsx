import React from 'react'
import { Button, Modal } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";

export default function ReservationCancel({ children, data }: IReservationDrawerProps) {
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
        <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
          {data?.name}
        </p>
        <p className='text-[14px] text-[#646464] mt-2'>
          ¿Quieres archivar solicitud de reserva con ID
          <span className='text-diamondPrimary'> {data?._id}</span>?
        </p>
        <section className="flex gap-x-4 mt-10">
          <Button
            onClick={handleCancel}
            className=" w-full"
            size="large"
            type='default'
          >
            Cancelar
          </Button>
          <Button
            className="rounded-md w-full bg-[#3655A0] text-white hover:!bg-[#4a6bb0]"
            size="large"
          >
            Archivar
          </Button>
        </section>
      </Modal>
    </>
  )
}