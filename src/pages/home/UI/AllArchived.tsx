import ReservationCard from "@/components/Cards/ReservationCard";
import useGetArchived from "@/hooks/useGetArchived";
import { Tours } from "@/types/reservationsTypes"
import { groupByStatus } from "@/util/utils"
import { Select, Spin } from "antd";

export default function AllReservationArchived() {
  const { data, error, isLoading, refetch } = useGetArchived();

  const groupedData = groupByStatus(data?.data || []);
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

  if (isLoading) {
    <Spin />
  }
  if (error) {
    return <p>Error...</p>
  }

  return (
    <>
      <section className="ml-5 sticky top-0 w-full z-10">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Solicitudes de reservas archivadas
        </h1>
        <p className="capitalize text-diamondBlack1 ml-1 mt-3 mb-2">
          Filtra por:
        </p>
        <section className="flex gap-x-6">
          <Select options={Tours} className="!h-[32px] !w-[280px]" placeholder='Nombre del tour' />
          <Select className="!h-[32px]" placeholder='Fecha de solicitud' />
        </section>
      </section>
      <div className="grid grid-cols-2 xl:grid-cols-4 mx-5 gap-5 mt-10 max-w-[1400px] overflow-y-auto h-[calc(100vh-250px)]">
        {Object.keys(groupedData).map((status) => {
          const { bgColor, statusFormatted, textColor } = statusMap[status] || {};
          return (
            <section key={status} className={`rounded-[20px] p-3 pb-6 ${bgColor}`}>
              <h1 className={`font-semibold text-[15px] capitalize ${textColor} mb-6`}>{statusFormatted}</h1>
              {groupedData[status].map((item) => {
                return (
                  <ReservationCard key={item._id} data={item} sx="mb-5" refetch={refetch} isArchived />
                );
              })}
            </section>
          );
        })}
      </div>
    </>
  )
}