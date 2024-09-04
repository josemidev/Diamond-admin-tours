import React, { useMemo } from "react";
import { Button, Spin, Table } from "antd";
import useGetTours from "@/hooks/useGetTours";
import { ITours } from "@/types/reservationsTypes"
import SetPriceTour from "@/components/ToursPrice";
import { EditOutlined } from "@ant-design/icons";

export default function Tours() {
  const { data, error, isLoading, refetch } = useGetTours()
  const [allData, setAllData] = React.useState<ITours[]>([])

  React.useEffect(() => {
    if (data) {
      setAllData(data.data)
    }
  }, [data])

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Valor',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      responsive: ['md'],
    }
  ];

  const tours = useMemo(() => allData?.map((el) => {
    return {
      key: el._id,
      name: el.name,
      price: (<span>$ {el.price}</span>),
      actions: (
        <SetPriceTour price={el?.price} name={el?.name} refetch={refetch}>
          <Button
            size="small"
            icon={<EditOutlined className="text-[#969696] !text-[13px]" />}
          />
        </SetPriceTour>
      )
    }
  }), [allData])

  if (isLoading) {
    <Spin />
  }
  if (error) {
    return <p>Error...</p>
  }

  return (
    <>
      <section className="sticky top-0 w-full z-10 bg-white border-b pl-5 pt-2 pb-6">
        <h1 className="text-[28px] font-bold text-[#000000] mt-8 capitalize leading-none">
          Tours
        </h1>
      </section>
      <section className=" pb-5 !overflow-y-auto !h-[calc(100vh-250px)]">
        <Table
          virtual={false}
          rowHoverable
          size="small"
          bordered={false}
          columns={columns}
          dataSource={tours || []}
          pagination={false}
          loading={isLoading}
          scroll={{ x: 1000, y: 500 }}
        />
      </section>
    </>
  )
}