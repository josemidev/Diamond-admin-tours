import ReservationCard from "@/components/Cards/ReservationCard";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Tours } from "@/constants/data";
import useGetReservations from "@/hooks/useGetReservations";
import { Reservation } from "@/types/reservationsTypes";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React from "react";

export default function SearchReservations() {
  const { data, error, isLoading, refetch } = useGetReservations()
  const [allData, setAllData] = React.useState<Reservation[]>([])

  React.useEffect(() => {
    if (data) {
      setAllData(data)
    }
  }, [data])

  if (error) {
    return <p>Error...</p>
  }

  return (
    <>
      <section className="sticky top-0 w-full z-10 bg-white border-b pl-5 pt-2 pb-6">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Buscar Reservas
        </h1>
        <section className="flex gap-x-6 w-fit mt-5">
          <Input className="!h-[32px]" suffix={<SearchOutlined className="text-[14px] !w-fit" />} placeholder='Buscar Reserva' />
          <Select options={Tours} className="!h-[32px] !w-[280px]" placeholder='Nombre del tour' />
          {/* <Select className="!h-[32px]" placeholder='Fecha de solicitud' /> */}
        </section>
      </section>
      {isLoading ? (
        <LoadingIndicator />
      ) :
        <section className="!h-[calc(100vh-250px)] bg-[#F8F8F8]">
          <section className="grid grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 mr-5 gap-5 overflow-y-auto h-[calc(100vh-250px)] p-5 w-full">
            {allData?.map((item) => {
              return (
                <ReservationCard key={item._id} data={item} isSearching refetch={refetch} sx="h-full" />
              );
            })}
          </section>
        </section>
      }
    </>
  )
}