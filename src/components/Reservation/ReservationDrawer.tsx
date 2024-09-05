import { IReservationDrawerProps } from "@/types/reservationsTypes";
import { formatGivenDate } from "@/util/utils";
import { CloseOutlined, FolderAddOutlined, RetweetOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React from 'react';
import { InitialStatus } from '../Cards/StatusCard';
import ReservationCancel from './ReservationCancel';
import ReservationChangeStatus from "./ReservationChangeStatus";
import ReservationDetails from "./ReservationDetails";

export default function ReservationDrawer({ children, data, refetch, isArchived }: IReservationDrawerProps) {
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
              <InitialStatus status={data?.status || "unrevised"} />
              <Button
                onClick={onClose}
                className="rounded-md border-border hover:!border-[#969696]"
                size="small"
                icon={<CloseOutlined style={{ fontSize: 13, color: '#969696' }} />}
              />
            </section>
            <p className="text-diamondBlack1 capitalize mt-3 text-[24px] font-bold">
              {data?.tourName}
            </p>
            <div className="h-[1px] bg-[#D9D9D9] w-full my-5">
            </div>
            <section className="flex flex-col gap-y-2">
              <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
                <p className="text-diamondBlack1 text-[12px]">
                  {data?.orderNumber}
                </p>
              </section>
              <ReservationDetails item="Cliente" content={data?.name} />
              <ReservationDetails item="Email" content={data?.email} />
              <ReservationDetails item="Telefono" content={data?.phone} />
              <ReservationDetails item="Fecha Inicio Del Tour" content={formatGivenDate(data?.dateStartingTour)} />
              <ReservationDetails item="Numero de personas" content={data?.numberOfPersons} />
            </section>
            <div className="h-[1px] bg-[#D9D9D9] w-full my-5">
            </div>
            <p className="capitalize text-[14px] font-semibold">
              Toda la actividad
            </p>
            {data?.changeHistory?.map((item, index) => {
              return (
                <section key={index} className="flex flex-col gap-y-2 mt-3">
                  <section className="flex gap-x-2 items-center text-[#646464]">
                    <p className="!text-[13px] capitalize">
                      {item?.description}
                    </p>
                    ·
                    <p className="!text-[13px]">
                      {item?.date}
                    </p>
                  </section>
                </section>
              )
            })}
          </section>
          <section className="flex gap-x-4">
            <ReservationCancel data={data} refetch={refetch}>
              <Button
                className=" w-full hover:!text-diamondBlack1"
                size="large"
                type='default'
                icon={<FolderAddOutlined style={{ fontSize: 16 }} />}
              >
                {data?.isArchived ? 'Desarchivar' : 'Archivar'}
              </Button>
            </ReservationCancel>
            {!isArchived && data?.status !== 'rejected' &&
              <ReservationChangeStatus data={data} refetch={refetch}>
                <Button
                  type='primary'
                  className="rounded-md w-full text-white hover:!bg-[#4a6bb0]"
                  size="large"
                  icon={<RetweetOutlined style={{ fontSize: 16 }} />}
                >
                  Cambiar estado
                </Button>
              </ReservationChangeStatus>
            }
          </section>
        </section>
      </Drawer>
    </>
  )
}