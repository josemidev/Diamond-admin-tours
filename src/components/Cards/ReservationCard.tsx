import { IReservationCardProps } from "@/types/reservationsTypes";
import { formatGivenDate } from "@/util/utils";
import { ArrowDownOutlined, CopyOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React from "react";
import ReservationDetails from "../Reservation/ReservationDetails";
import ReservationDrawer from "../Reservation/ReservationDrawer";
import { InitialStatus } from "./StatusCard";

export default function ReservationCard({ data, isSearching, sx, refetch, isArchived }: IReservationCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?.orderNumber ?? '');
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  React.useEffect(() => {
    if (copied) {
      notification.success({
        message: 'Copiado',
        description: 'El ID de la reserva ha sido copiado al portapapeles',
        placement: 'topRight'
      });
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section className={`bg-white rounded-t-lg px-3 py-4 flex flex-col gap-y-5 h-fit w-full ${sx}`}>
      <section className="flex justify-between gap-x-3">
        <p className="text-diamondBlack3 font-bold text-[17px] leading-5">
          {data?.tourName}
        </p>
        <section className="flex h-full items-start">
          <ReservationDrawer data={data} refetch={refetch} isArchived={isArchived}>
            <Button
              className="rounded-md border-border hover:!border-[#969696]"
              size="small"
              icon={<ArrowDownOutlined style={{ fontSize: 12, color: '#969696' }} />}
            />
          </ReservationDrawer>
        </section>
      </section>
      <section className="flex gap-x-3 flex-wrap gap-y-1">
        <section className="bg-white border border-border py-1 px-1 w-fit rounded-md flex">
          <p className="text-diamondBlack1 text-[12px]">
            {data?.orderNumber}
          </p>
          <CopyOutlined onClick={handleCopy} className="cursor-pointer ml-2 text-[#969696]" />
        </section>
        {isSearching &&
          <InitialStatus statusOrder={data?.statusOrder || "unrevised"} />
        }
      </section>
      <section className="flex flex-col flex-wrap">
        <ReservationDetails item="Cliente" content={data?.name} />
        <ReservationDetails item="Email" content={data?.email} />
        <ReservationDetails item="Telefono" content={data?.phone} />
        <ReservationDetails item="Fecha Inicio Del Tour" content={formatGivenDate(data?.dateStartingTour)} />
        <ReservationDetails item="Numero de personas" content={data?.numberOfPersons} />
      </section>
    </section>
  )
}