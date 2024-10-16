import React, { useMemo } from "react";
import TagCard from "@/components/Cards/TagCard";
import ErrorScreen from "@/components/ErrorScreen";
import ReservationCreate from "@/components/Reservation/ReservationCreate";
import useGetMyBookings from "@/hooks/useGetMyBookings";
import { type IBookingsValues } from "@/types/reservationsTypes";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnsType } from "antd";

export default function MyBookings() {
  const { data, error, isLoading, refetch } = useGetMyBookings()
  const [allData, setAllData] = React.useState([])

  React.useEffect(() => {
    if (data) {
      setAllData(data)
    }
  }, [data])

  const columns: TableColumnsType = [
    {
      title: 'Cliente',
      dataIndex: 'name',
      key: 'name',
      width: 300
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 300,
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone',
      width: 200
    },
    {
      title: 'ID de la Reserva',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      rowScope: 'row',
      align: 'end',
      width: 180
    },
    {
      title: 'Tour',
      dataIndex: 'tour',
      key: 'tour',
      width: 200
    },
    {
      title: 'Lugar de Recogida',
      dataIndex: 'pickup',
      key: 'pickup',
      align: 'end',
      width: 200
    },
    {
      title: 'Número de Personas',
      dataIndex: 'numberOfPersons',
      key: 'numberOfPersons',
      align: 'end',
      width: 100
    },
    {
      title: 'Precio Final Acordado',
      dataIndex: 'price',
      key: 'price',
      align: 'end',
      width: 200
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      align: 'end',
      width: 100,
      rowScope: 'row',
    }
  ];

  const bookings = useMemo(() => allData?.map((el: IBookingsValues) => {
    return {
      key: el?.orderNumber,
      name: el?.name,
      email: el?.email,
      phone: el?.phone,
      orderNumber: el?.orderNumber,
      pickup: el?.pickup,
      numberOfPersons: el?.numberOfPersons,
      price: el?.price,
      tour: (
        <TagCard>
          <span className="text-diamondBlack1 text-[12px] font-semibold">
            {el?.tourName}
          </span>
        </TagCard>
      ),
    }
  }), [allData, refetch])


  if (error) {
    return <ErrorScreen refetch={refetch} />
  }

  return (
    <>
      <section className="sticky top-0 w-full z-10 bg-white border-b px-5 pt-2 pb-6">
        <section className="flex justify-between items-center w-full mt-8">
          <h1 className="text-[28px] font-bold text-[#000000] capitalize leading-none">
            Mis Reservas
          </h1>
          <ReservationCreate refetch={refetch}>
            <Button
              className="!h-[38px] rounded-xl"
              icon={<PlusOutlined />}
              iconPosition='start'
              type="primary"
              size='middle'
            >
              Registrar Reserva
            </Button>
          </ReservationCreate>
        </section>
      </section>
      <section className=" pb-5 !overflow-y-auto !h-[calc(100vh-250px)]">
        <Table
          virtual={false}
          rowHoverable
          size="small"
          bordered={false}
          columns={columns}
          dataSource={bookings || []}
          pagination={false}
          loading={isLoading}
          scroll={{ x: 1000, y: 800 }}
        />
      </section>
    </>
  )
}