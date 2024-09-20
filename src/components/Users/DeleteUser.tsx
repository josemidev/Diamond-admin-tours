/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { IUserProps } from "@/types/reservationsTypes";
import { Button, Modal, notification, } from "antd";
import useAxiosDelete from "@/hooks/useAxiosDelete";

export default function DeleteUser({ children, refetch, id, data }: IUserProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosDelete(`/auth/delete-user/${id}`, {
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
      id: id
    })
  }

  return (
    <>
      <section onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <article className="flex flex-col gap-y-[18px]">
          <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
            Eliminar Usuario
          </p>
          <div className="p-[10px] border border-[#E5E5E5] min-h-[38px] rounded-lg bg-[#FBFBFB]">
            <b>Cesar Fontalvo</b>
          </div>
          <p className='text-[14px] text-[#646464]'>
            ¿Seguro que deseas eliminar esta cuenta? Esta acción es irreversible.
          </p>
        </article>
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
            Eliminar Cuenta
          </Button>
        </section>
      </Modal>
    </>
  )
}