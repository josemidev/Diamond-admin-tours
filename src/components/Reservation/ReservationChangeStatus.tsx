import React from 'react'
import { Button, Input, Modal } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import { ArrowRightOutlined } from '@ant-design/icons';

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
          <section className="flex gap-x-4 flex-wrap">
            <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
              <p className="text-diamondBlack1 text-[12px] capitalize">
                {data?.status}
              </p>
            </section>
            <ArrowRightOutlined className='text-[#646464] text-[16px]' />
            <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
              <p className="text-diamondBlack1 text-[12px] capitalize">
                {data?.status}
              </p>
            </section>
          </section>
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
            Cambiar estado
          </Button>
        </section>
      </Modal>
    </>
  )
}