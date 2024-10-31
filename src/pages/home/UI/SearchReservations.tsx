import ReservationCard from "@/components/Cards/ReservationCard";
import ErrorScreen from "@/components/ErrorScreen";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Tours } from "@/constants/data";
import useGetReservations from "@/hooks/useGetReservations";
import { Reservation } from "@/types/reservationsTypes";
import { filterSelect } from "@/util/utils";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React from "react";

export default function SearchReservations() {
  const { data, error, isLoading, refetch } = useGetReservations()
  const [text, setText] = React.useState('')
  const [selectedTour, setSelectedTour] = React.useState('');
  const [filterByName, setFilterByName] = React.useState<Reservation[]>([])

  React.useEffect(() => {
    if (data && !isLoading) {
      setFilterByName(data)
    }
  }, [data, isLoading])

  const SearchReservations = (text: string): void => {
    if (text.length > 0) {
      const newData = data?.filter((item: any) => {
        const itemData = `${item?.orderNumber?.toLowerCase()}`
        const itemText = text.toLowerCase()
        return itemData.indexOf(itemText) > -1
      })
      setFilterByName(newData)
    } else {
      setFilterByName(data)
    }
  }
  const filteredByTour = filterByName?.filter((item) => !selectedTour || item?.tourName === selectedTour);

  if (error) {
    return <ErrorScreen refetch={refetch} />
  }

  return (
    <>
      <section className="sticky top-0 w-full z-10 bg-white border-b pl-5 pt-2 pb-6">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Buscar Reservas
        </h1>
        <section className="flex gap-x-6 w-fit mt-5">
          <Input
            value={text}
            className="!h-[32px] w-fit"
            suffix={<SearchOutlined className="text-[14px] !w-fit" />}
            placeholder='Buscar Reserva'
            onChange={(e) => {
              SearchReservations(e.target.value)
              setText(e.target.value)
            }}
          />
          <Select
            showSearch
            filterOption={filterSelect}
            onChange={(value: string) => setSelectedTour(value)}
            options={Tours}
            className="!h-[32px] w-[300px]"
            placeholder='Nombre del tour'
            allowClear
          />
        </section>
      </section>
      {isLoading ? (
        <LoadingIndicator />
      ) :
        <section className="!h-[calc(100vh-210px)] bg-[#F8F8F8]">
          <section className="mx-5 max-w-[1400px] overflow-y-auto overflow-x-auto h-[calc(100vh-250px)] py-5 w-fit  ">
            <article className="h-fit flex flex-row flex-wrap gap-5">
              {filteredByTour?.map((item) => {
                return (
                  <ReservationCard key={item._id} data={item} isSearching refetch={refetch} sx={`!min-h-[320px] !w-fit min-w-[320px] transition-all ease-in-out ${filteredByTour?.length <= 4 ? '!h-fit' : '!h-full'}`} />
                );
              })}
            </article>
          </section>
        </section>
      }
    </>
  )
}