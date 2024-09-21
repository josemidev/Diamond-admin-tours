/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import useAxiosPost from "@/hooks/useAxiosPost";
import { IUserProps } from "@/types/reservationsTypes";
import { Button, Form, Input, Modal, notification } from "antd";
import TagCard from "../Cards/TagCard";

export default function ResetPassword({ children, data, refetch, id }: IUserProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPost(``, {
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
      form.resetFields()
      refetch && refetch()
    }
  })

  function onFinish(values: { password: string, new_password: string }): void {
    action.run({
      id: id,
      password: values.password,
      new_password: values.new_password
    })
  }

  return (
    <>
      <section onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <p className="text-diamondBlack3 capitalize mt-3 mb-[18px] text-[24px] font-bold">
          Restablecer Contraseña de Usuario
        </p>
        <TagCard sx="!p-[10px] !w-full !rounded-lg !min-h-[38px] ">
          {data?.name} {data?.createdAt}
        </TagCard>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col gap-y-[18px] mt-[18px]"
        >
          <Form.Item
            noStyle
            rules={[{ required: true, message: 'Crete a strong password' }]}
            name='password'
          >
            <Input.Password placeholder='Imgresa tu Contraseña' />
          </Form.Item>
          <Form.Item
            noStyle
            rules={[{ required: true, message: 'Crete a strong password' }]}
            name='new_password'
          >
            <Input.Password placeholder='Nueva Contraseña' />
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
              loading={action.loading}
              htmlType="submit"
              type='primary'
              className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
              size="large"
            >
              Eliminar Cuenta
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}