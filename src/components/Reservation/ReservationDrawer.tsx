import React from 'react'
import { Button, Drawer } from "antd";
import { IReservationDrawerProps } from "@/types/reservationsTypes";
import ReservationDetails from "./ReservationDetails";
import { CloseOutlined, FolderAddOutlined, RetweetOutlined } from "@ant-design/icons";
import ReservationChangeStatus from "./ReservationChangeStatus";

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
      >
        <section className="flex flex-col justify-between h-full">
          <section>
            <section className="flex justify-between items-center">
              <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
                <p className="text-diamondBlack1 text-[12px] capitalize">
                  {data?.status}
                </p>
              </section>
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
            <div className="h-[2px] bg-[#D9D9D9] w-full my-5">
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
            <div className="h-[2px] bg-[#D9D9D9] w-full my-5">
            </div>
            <p className="capitalize divide-diamondBlack1 text-[14px] font-semibold">
              Toda la actividad
            </p>
            {/*  Activity array */}
          </section>
          <section className="flex gap-x-4">
            <Button
              className=" w-full"
              size="large"
              type='default'
              icon={<FolderAddOutlined style={{ fontSize: 16 }} />}
            >
              Cancelar Reservación
            </Button>
            <ReservationChangeStatus>
              <Button
                className="rounded-md w-full bg-[#3655A0] text-white hover:!bg-[#4a6bb0]"
                size="large"
                icon={<RetweetOutlined style={{ fontSize: 16 }} />}
              >
                Cambiar estado
              </Button>
            </ReservationChangeStatus>
          </section>
        </section>
      </Drawer>
    </>
  )
}