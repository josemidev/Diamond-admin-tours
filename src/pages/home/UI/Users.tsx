import TagCard from "@/components/Cards/TagCard";
import ErrorScreen from "@/components/ErrorScreen";
import CreateUser from "@/components/Users/CreateUser";
import DeleteUser from "@/components/Users/DeleteUser";
import ResetPassword from "@/components/Users/ResetPassword";
import useGetUsers from "@/hooks/useGetUsers";
import { type IUserProps } from "@/types/reservationsTypes";
import { DeleteOutlined, PlusOutlined, RetweetOutlined } from "@ant-design/icons";
import { Button, Table, TableProps } from "antd";
import React, { useMemo } from "react";

export default function Users() {
  const { data, error, isLoading, refetch } = useGetUsers()
  const [allData, setAllData] = React.useState([])

  React.useEffect(() => {
    if (data) {
      setAllData(data)
    }
  }, [data])

  const columns: TableProps<IUserProps>['columns'] = [
    {
      title: 'Usuarios',
      dataIndex: 'name',
      key: 'name',
      width: 300
    },
    {
      title: 'Fecha de creación',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 100,
      rowScope: 'row',
      align: 'end'
    },
    {
      title: 'Rol',
      dataIndex: 'role',
      key: 'role',
      width: 100,
      rowScope: 'row',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      width: 50
    },
  ];

  const tours = useMemo(() => allData?.map((el: IUserProps) => {
    return {
      key: el._id,
      name: el.name,
      createdAt: el.createdAt,
      role: (
        <TagCard>
          <span className="text-diamondBlack1 text-[12px] font-semibold">
            Agent
          </span>
        </TagCard>
      ),
      actions: (
        <section className="flex flex-wrap gap-x-2 justify-end mr-4">
          <ResetPassword id={el._id} data={el} refetch={refetch}>
            <Button
              className="rounded-lg"
              size="small"
              icon={<RetweetOutlined className="text-[#969696] !text-[13px]" />}
            />
          </ResetPassword>
          <DeleteUser id={el._id} data={el} refetch={refetch}>
            <Button
              className="rounded-lg"
              size="small"
              icon={<DeleteOutlined className="text-[#969696] !text-[13px]" />}
            />
          </DeleteUser>
        </section>
      )
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
            Usuarios
          </h1>
          <CreateUser refetch={refetch}>
            <Button
              className="!h-[38px] rounded-xl"
              icon={<PlusOutlined />}
              iconPosition='start'
              type="primary"
              size='middle'
            >
              Crear Usuario
            </Button>
          </CreateUser>
        </section>
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
          scroll={{ x: 1000, y: 800 }}
        />
      </section>
    </>
  )
}