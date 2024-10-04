/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import useAxiosPost from "@/hooks/useAxiosPost";
import { IUserProps } from "@/types/reservationsTypes";
import { Button, Form, Input, Modal, notification, Select } from "antd";

export default function CreateUser({ children, refetch }: IUserProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPost(`/auth/create-user`, {
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

  function onFinish(values: { name: string, password: string, username: string, role: string }): void {
    action.run({
      name: values.name,
      password: values.password,
      username: values.username,
      role: ['AGENT']
    })
  }

  return (
    <>
      <section onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <p className="text-diamondBlack3 capitalize mt-3 mb-[18px] text-[24px] font-bold">
          Crear Usuario
        </p>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col gap-y-[18px]"
        >
          <Form.Item
            noStyle
            rules={[{ required: true, message: 'Please fill with your name' }]}
            name='name'
          >
            <Input placeholder='Nombre de Usuario' />
          </Form.Item>
          <Form.Item
            noStyle
            rules={[{ required: true, message: 'Please fill with your name' }]}
            name='username'
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            noStyle
            rules={[{ required: true, message: 'Crete a strong password' }]}
            name='password'
          >
            <Input.Password placeholder='Contraseña' />
          </Form.Item>
          <Form.Item
            name='role'
            noStyle
            rules={[{ required: false }]}
          >
            <Select
              disabled
              defaultValue='AGENT'
              className="w-full"
              options={[
                { value: 'AGENT', label: 'Agente' },
              ]}
              placeholder='Usuario'
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
              loading={action.loading}
              htmlType="submit"
              type='primary'
              className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
              size="large"
            >
              Crear Usuario
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}