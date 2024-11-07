import React from "react";
import { InitialStatus } from "@/components/Cards/StatusCard";
import ErrorScreen from "@/components/ErrorScreen";
import useGetClients from "@/hooks/useGetClient";
import { Reservation } from "@/types/reservationsTypes";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";

export default function Clients() {
  const { data, error, isLoading, refetch } = useGetClients()
  const [text, setText] = React.useState('')
  const [filteredData, setFilteredData] = React.useState<Reservation[]>([])

  React.useEffect(() => {
    if (data && !isLoading) {
      setFilteredData(data)
    }
  }, [data, isLoading])

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'ID de Reserva',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const searchClients = (text: string): void => {
    if (text.length > 0) {
      const newData = data?.filter((item: any) => {
        const itemData = `${item?.orderNumber?.toUpperCase()}`
        const itemText = text.toUpperCase()
        return itemData.indexOf(itemText) > -1
      })
      setFilteredData(newData)
    } else {
      setFilteredData(data)
    }
  }

  const clients = React.useMemo(() => filteredData?.map((el) => {
    return {
      key: el.orderNumber,
      id: el.orderNumber,
      name: el.name,
      email: el.email,
      phone: el.phone,
      status: (<InitialStatus statusOrder={el.statusOrder} />),
    }
  }), [filteredData])


  if (error) {
    return <ErrorScreen refetch={refetch} />
  }

  return (
    <>
      <section className="ml-5 sticky top-0 w-fit z-10">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Clientes
        </h1>
        <section className="mt-4">
          <Input
            value={text}
            className="!h-[32px] !w-fit"
            suffix={<SearchOutlined className="text-[14px] !w-fit" />}
            placeholder='Buscar Reserva'
            onChange={(e) => {
              searchClients(e.target.value)
              setText(e.target.value)
            }}
          />
        </section>
      </section>
      <section className="mt-5 pb-5 !overflow-y-auto !h-[calc(100vh-250px)]">
        <Table
          footer={() => {
            return (
              <div className="flex !bg-transparent">
                <p className="text-[#000000] text-[13px] font-bold bg-transparent">Numero de clientes: {clients?.length}</p>
              </div>
            )
          }}
          virtual={false}
          rowHoverable
          size="small"
          bordered={false}
          columns={columns}
          dataSource={clients || []}
          pagination={{ defaultPageSize: 10, showSizeChanger: false }}
          loading={isLoading}
          scroll={{ x: 1000, y: 500 }}
          locale={{
            emptyText: (
              <div className="flex justify-center items-center h-[200px]">
                <p className="text-[#000000] text-[14px] font-bold">No hay solicitudes de reservas</p>
              </div>
            ),
          }}
        />
      </section>

    </>
  )
}