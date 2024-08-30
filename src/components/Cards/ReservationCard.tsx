import React from "react";
import { Button, message } from "antd"
import { ArrowDownOutlined, CopyOutlined } from "@ant-design/icons"
import ReservationDetails from "../Reservation/ReservationDetails"
import { IReservationCardProps } from "@/types/reservationsTypes";
import ReservationDrawer from "../Reservation/ReservationDrawer";
import { InitialStatus } from "./StatusCard";

export default function ReservationCard({ data, isSearching, sx }: IReservationCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?._id);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  React.useEffect(() => {
    if (copied) {
      message.success('Copiado al portapapeles');
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section className={`bg-white rounded-t-lg px-3 py-4 flex flex-col gap-y-5 h-fit ${sx}`}>
      <section className="flex justify-between gap-x-3">
        <p className="text-diamondBlack3 font-bold text-[17px] leading-5">
          Punta Cana Tour Zip Line Park
        </p>
        <section className="flex h-full items-start">
          <ReservationDrawer data={data}>
            <Button
              className="rounded-md border-border hover:!border-[#969696]"
              size="small"
              icon={<ArrowDownOutlined style={{ fontSize: 12, color: '#969696' }} />}
            />
          </ReservationDrawer>
        </section>
      </section>
      <section className="flex  gap-x-3">
        <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
          <p className="text-diamondBlack1 text-[12px]">
            {data?._id}
          </p>
          <CopyOutlined onClick={handleCopy} className="cursor-pointer ml-2 text-[#969696]" />
        </section>
        {isSearching &&
          <InitialStatus status={data?.status} />
        }
      </section>
      <section className="flex flex-col gap-y-1">
        <ReservationDetails item="Cliente" content="Juan Perez" />
        <ReservationDetails item="Email" content='manuelrdg@gmail.com' />
        <ReservationDetails item="Telefono" content="3102311234" />
        <ReservationDetails item="Fecha Inicio Del Tour" content="Aug 12, 2024" />
        <ReservationDetails item="Numero de personas" content="1" />
      </section>
    </section>
  )
}