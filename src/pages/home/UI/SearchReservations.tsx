import ReservationCard from "@/components/Cards/ReservationCard";
import { Reservation, Tours } from "@/types/reservationsTypes"
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";

export default function SearchReservations() {

  const data: Reservation[] = [
    { _id: '1', name: 'Item 1', status: 'unrevised' },
    { _id: '2', name: 'Item 2', status: 'review' },
    { _id: '3', name: 'Item 3', status: 'approved' },
    { _id: '4', name: 'Item 4', status: 'rejected' },
    { _id: '5', name: 'Item 5', status: 'unrevised' },
  ];

  return (
    <>
      <section className="sticky top-0 w-full z-10 bg-white border-b pl-5 pt-2 pb-6">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Buscar Reservas
        </h1>
        <section className="flex gap-x-6 w-fit mt-5">
          <Input className="!h-[32px]" suffix={<SearchOutlined className="text-[14px] !w-fit" />} placeholder='Buscar Reserva' />
          <Select options={Tours} className="!h-[32px] !w-[280px]" placeholder='Nombre del tour' />
          <Select className="!h-[32px]" placeholder='Fecha de solicitud' />
        </section>
      </section>
      <section className="grid grid-cols-2 xl:grid-cols-5 mr-5 gap-5 overflow-y-auto  bg-[#F8F8F8] p-5 w-full">
        {data?.map((item) => {
          return (
            <ReservationCard key={item._id} data={item} isSearching />
          );
        })}
      </section>
    </>
  )
}