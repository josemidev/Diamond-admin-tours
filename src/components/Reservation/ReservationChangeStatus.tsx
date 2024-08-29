import React from 'react'
import { Modal } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";

export default function ReservationChangeStatus({ children }: IReservationDrawerProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full" onClick={showModal}>
        {children}
      </section>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

