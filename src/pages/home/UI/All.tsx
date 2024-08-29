import ReservationCard from "@/components/Cards/ReservationCard";
import { Reservation } from "@/types/reservationsTypes"
import { groupByStatus } from "@/util/utils"
import { Select } from "antd";

export default function AllReservation() {

  const data: Reservation[] = [
    { _id: '1', name: 'Item 1', status: 'unrevised' },
    { _id: '2', name: 'Item 2', status: 'review' },
    { _id: '3', name: 'Item 3', status: 'approved' },
    { _id: '4', name: 'Item 4', status: 'rejected' },
    { _id: '5', name: 'Item 5', status: 'unrevised' },
  ];

  const groupedData = groupByStatus(data);
  const statusMap = {
    unrevised: {
      bgColor: 'bg-[#F8F8F8]',
      statusFormatted: 'Sin Revisar',
      textColor: 'text-unrevised',
    },
    review: {
      bgColor: 'bg-[#E1AB3F14]',
      statusFormatted: 'En revisión',
      textColor: 'text-review',
    },
    approved: {
      bgColor: 'bg-[#87E5D21C]',
      statusFormatted: 'Aprobado',
      textColor: 'text-approved',
    },
    rejected: {
      bgColor: 'bg-[#EC623712]',
      statusFormatted: 'Rechazado',
      textColor: 'text-rejected',
    },
  };

  return (
    <>
      <section className="ml-5">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8  capitalize leading-none">
          Todas las solicitudes de reservas
        </h1>
        <p className="capitalize text-diamondBlack1 ml-1 mt-3 mb-2">
          Filtra por:
        </p>
        <section className="flex gap-x-6">
          <Select placeholder='Nombre del tour' />
          <Select placeholder='Fecha de solicitud' />
        </section>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-5 gap-5 mt-10">
        {Object.keys(groupedData).map((status) => {
          const { bgColor, statusFormatted, textColor } = statusMap[status] || {};
          return (
            <section key={status} className={`rounded-[20px] p-3 pb-6 ${bgColor} w-fit`}>
              <h1 className={`font-semibold text-[15px] capitalize ${textColor} mb-6`}>{statusFormatted}</h1>
              {groupedData[status].map((item) => {
                return (
                  <ReservationCard data={item} />
                );
              })}
            </section>
          );
        })}
      </div>
    </>
  )
}