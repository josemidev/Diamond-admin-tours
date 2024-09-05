import React from 'react'
import { Button, Form, Input, Modal, notification } from "antd";
import { ITours } from "@/types/reservationsTypes";
import useAxiosPut from "@/hooks/useAxiosPut";

export default function SetPriceTour({ children, name, price, refetch }: ITours) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPut(`/dashboard/tours`, {
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

  function onFinish(values: { price: number }): void {
    action.run({
      tourName: name,
      price: Number(values.price)
    })
  }

  return (
    <>
      <section className="w-full" onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <p className="text-diamondBlack3 capitalize mt-3 text-[24px] font-bold">
          {name}
        </p>
        <section className="flex flex-col gap-y-4 mb-4">
          <p className='text-[14px] text-[#646464] mt-2'>
            ¿Quieres actualizar el precio actual de este Tour?
          </p>
          <section className="w-fit border border-[#E5E5E5] px-2 rounded-md bg-[#FAFAFA]">
            <p className='text-[13px] text-[#212121E0] font-semibold'>
              Precio Actual: ${price} USD
            </p>
          </section>
        </section>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            noStyle
            required
            name='price'
            rules={[{ required: true, message: 'Ingresa un precio' }]}
          >
            <Input
              type="number"
              suffix='USD'
              placeholder='Nuevo Precio'
            />
          </Form.Item>
          <section className="flex gap-x-4 mt-5">
            <Button
              onClick={handleCancel}
              className="w-full hover:!text-diamondBlack1"
              size="large"
              type='default'
            >
              Cancelar
            </Button>
            <Button
              htmlType="submit"
              loading={action.loading}
              type='primary'
              className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
              size="large"
            >
              Cambiar Precio
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}