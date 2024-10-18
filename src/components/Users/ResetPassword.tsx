/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { IUserProps } from "@/types/reservationsTypes";
import { Button, Form, Modal, notification } from "antd";
import TagCard from "../Cards/TagCard";
import { formatGivenDate } from "@/util/utils";
import useAxiosPut from "@/hooks/useAxiosPut";
import InputForm from "../FormElements/InputForm";

export default function ResetPassword({ children, data, refetch, id }: IUserProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPut(`/auth/reset-password/${id}`, {
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
      form.resetFields()
      setIsModalOpen(false);
      refetch && refetch()
    }
  })

  function onFinish(values: { actualPassword: string, newPassword: string }): void {
    action.run({
      actualPassword: values.actualPassword,
      newPassword: values.newPassword
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
          {data?.name} {formatGivenDate(data?.createdAt)}
        </TagCard>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col gap-y-[18px] mt-[18px]"
        >
          <InputForm
            type='password'
            formName='actualPassword'
            placeholder='Ingresa tu Contraseña Actual'
          />
          <InputForm
            type='password'
            formName='newPassword'
            placeholder='Ingresa una Nueva Contraseña'
          />
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
              Actualizar Contraseña
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}