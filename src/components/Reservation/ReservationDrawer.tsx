import React from 'react'
import { Button, Drawer } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import ReservationDetails from "./ReservationDetails";
import { CloseOutlined, FolderAddOutlined, RetweetOutlined } from "@ant-design/icons";
import ReservationChangeStatus from "./ReservationChangeStatus";
import ReservationCancel from './ReservationCancel';
import { InitialStatus } from '../Cards/StatusCard';

export default function ReservationDrawer({ children, data }: IReservationDrawerProps) {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section onClick={showDrawer}>
        {children}
      </section>
      <Drawer
        closable={false}
        width={700}
        onClose={onClose}
        open={open}
        className='!overflow-y-auto lg:!h-[calc(100vh-0px)] xl:!h-[calc(100vh-0px)]'
      >
        <section className="flex flex-col justify-between h-full">
          <section>
            <section className="flex justify-between items-center">
              <InitialStatus status={data?.status} />
              <Button
                onClick={onClose}
                className="rounded-md border-border hover:!border-[#969696]"
                size="small"
                icon={<CloseOutlined style={{ fontSize: 13, color: '#969696' }} />}
              />
            </section>
            <p className="text-diamondBlack1 capitalize mt-3 text-[24px] font-bold">
              {data?.name}
            </p>
            <div className="h-[1px] bg-[#D9D9D9] w-full my-5">
            </div>
            <section className="flex flex-col gap-y-2">
              <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
                <p className="text-diamondBlack1 text-[12px]">
                  {data?._id}
                </p>
              </section>
              <ReservationDetails item="Cliente" content="Juan Perez" />
              <ReservationDetails item="Email" content='manuelrdg@gmail.com' />
              <ReservationDetails item="Telefono" content="3102311234" />
              <ReservationDetails item="Fecha Inicio Del Tour" content="Aug 12, 2024" />
              <ReservationDetails item="Numero de personas" content="1" />
            </section>
            <div className="h-[1px] bg-[#D9D9D9] w-full my-5">
            </div>
            <p className="capitalize divide-diamondBlack1 text-[14px] font-semibold">
              Toda la actividad
            </p>
            {/*  Activity array */}
          </section>
          {data?.status !== 'rejected' &&
            <section className="flex gap-x-4">
              <ReservationCancel data={data}>
                <Button
                  className=" w-full hover:!text-diamondBlack1"
                  size="large"
                  type='default'
                  icon={<FolderAddOutlined style={{ fontSize: 16 }} />}
                >
                  Cancelar Reservación
                </Button>
              </ReservationCancel>
              <ReservationChangeStatus data={data}>
                <Button
                  type='primary'
                  className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
                  size="large"
                  icon={<RetweetOutlined style={{ fontSize: 16 }} />}
                >
                  Cambiar estado
                </Button>
              </ReservationChangeStatus>
            </section>
          }
        </section>
      </Drawer>
    </>
  )
}