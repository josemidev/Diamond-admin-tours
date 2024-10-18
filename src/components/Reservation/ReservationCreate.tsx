/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import useAxiosPost from "@/hooks/useAxiosPost";
import { IBookingsValues, IUserProps } from "@/types/reservationsTypes";
import { Button, Form, Modal, notification, Grid } from "antd";
import InputForm from "../FormElements/InputForm";
import SelectForm from "../FormElements/SelectForm";
import { Tours } from "@/constants/data";
import DatePickerForm from "../FormElements/DatePickerForm";

const { useBreakpoint } = Grid

export default function ReservationCreate({ children, refetch }: IUserProps) {
  const screens = useBreakpoint()
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const action = useAxiosPost('/my-bookings', {
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

  function onFinish(values: IBookingsValues): void {
    action.run({
      name: values.name,
      email: values.email,
      phone: values.phone,
      numberOfPersons: Number(values.numberOfPersons),
      tourName: values.tourName,
      dateStartingTour: values.dateStartingTour,
      pickup: values.pickup,
      price: Number(values.price)

    })
  }

  useEffect(() => {
    if (screens.xs) {
      setIsModalOpen(false)
    }
  }, [screens, setIsModalOpen])

  return (
    <>
      <section onClick={showModal}>
        {children}
      </section>
      <Modal open={isModalOpen} onCancel={handleCancel} footer closable={false}>
        <section className="flex flex-col  mt-3 mb-5">
          <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
            Registrar Reserva
          </p>
          <p className="text-[#646464] text-[14px] font-normal">
            Completa el formulario con los datos de la reserva y el cliente.
          </p>
        </section>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
            <InputForm type="text" formName='name' placeholder='Nombre del cliente' />
            <InputForm type="text" formName='email' placeholder='Correo del cliente' />
            <InputForm type="number" formName='phone' placeholder='Número de contacto del cliente' />
            <InputForm type="number" formName='numberOfPersons' placeholder='Número de personas' />
            <SelectForm formName="tourName" placeholder="Nombre del tour" options={Tours} allowClear />
            <DatePickerForm formName='dateStartingTour' placeholder='Fecha de inicio del Tour' />
            <InputForm type="text" formName='pickup' placeholder='Lugar de recogida' />
            <InputForm type="number" formName='price' placeholder='Precio acordado' min={20} />
          </section>
          <section className="flex gap-x-4 mt-5">
            <Button
              onClick={handleCancel}
              className="w-full hover:!text-diamondBlack1"
              type='default'
            >
              Cancelar
            </Button>
            <Button
              loading={action.loading}
              htmlType="submit"
              type='primary'
              className="rounded-md w-full hover:!bg-[#4a6bb0]"
            >
              Registrar Reserva
            </Button>
          </section>
        </Form>
      </Modal>
    </>
  )
}