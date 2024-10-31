import ReservationCard from "@/components/Cards/ReservationCard";
import ErrorScreen from "@/components/ErrorScreen";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Tours } from "@/constants/data";
import useGetReservations from "@/hooks/useGetReservations";
import { groupByStatus } from "@/util/utils";
import { Select } from "antd";
import { useState } from "react";

export default function AllReservation() {
  const { data, error, isLoading, refetch } = useGetReservations()
  const [selectedTour, setSelectedTour] = useState('');
  const handleSelectChange = (value: string) => {
    setSelectedTour(value);
  };

  const groupedData = groupByStatus(data || []);
  const statusMap: { [key: string]: { bgColor: string; statusFormatted: string; textColor: string } } = {
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

  if (error) {
    return <ErrorScreen refetch={refetch} />
  }

  return (
    <>
      <section className="ml-5 sticky top-0 w-fit z-10">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Todas las solicitudes de reservas
        </h1>
        <p className="capitalize text-diamondBlack1 ml-1 mt-3 mb-2">
          Filtra por:
        </p>
        <section className="flex gap-x-6">
          <Select
            onChange={handleSelectChange}
            options={Tours}
            className="!h-[32px] !w-[280px]"
            placeholder='Nombre del tour'
            allowClear
          />
        </section>
      </section>
      {isLoading ? (
        <LoadingIndicator />
      ) :
        <div className="grid grid-flow-col mx-5 gap-5 mt-10 max-w-[1400px] overflow-y-auto h-[calc(100vh-250px)] overflow-x-scroll">
          {['unrevised', 'review', 'approved', 'rejected',].map((statusOrder) => {
            const { bgColor, statusFormatted, textColor } = statusMap[statusOrder] || {};
            const filteredData = groupedData[statusOrder]?.filter((item) => !selectedTour || item.tourName === selectedTour);
            return (
              <section key={statusOrder} className={`rounded-[20px] p-3 pb-6 min-w-[280px] max-w-[320px] ${bgColor}`}>
                <h1 className={`font-semibold text-[15px] capitalize ${textColor} mb-6`}>
                  {statusFormatted} ({filteredData?.length ?? 0})
                </h1>
                {filteredData?.map((item) => (
                  <ReservationCard key={item._id} data={item} sx="mb-5" refetch={refetch} />
                ))}
              </section>
            );
          })}
        </div>
      }
    </>
  )
}