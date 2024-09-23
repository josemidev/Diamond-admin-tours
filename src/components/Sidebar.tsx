import AllReservation from '@/pages/home/UI/All'
import AllReservationArchived from '@/pages/home/UI/AllArchived'
import Clients from "@/pages/home/UI/Clients"
import SearchReservations from '@/pages/home/UI/SearchReservations'
import Tours from "@/pages/home/UI/Tours"
/* import Users from "@/pages/home/UI/Users" */
import { Tabs, TabsProps, Tooltip } from "antd"
import { useState } from 'react'

export default function Sidebar() {
  const tab = localStorage.getItem('tab')
  const [TAB, setTAB] = useState(tab || 'all')
  const itemsTab: TabsProps['items'] = [
    {
      key: 'all',
      label: <p className={`${TAB === 'all' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Todas Las Reservas</p>,
      children: <AllReservation />
    },
    {
      key: 'archived',
      label: <p className={`${TAB === 'archived' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Archivados</p>,
      children: <AllReservationArchived />
    },
    {
      key: 'search',
      label: <p className={`${TAB === 'search' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Buscar Reservas</p>,
      children: <SearchReservations />
    },
    {
      key: 'clients',
      label: <p className={`${TAB === 'clients' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Clientes</p>,
      children: <Clients />
    },
    {
      key: 'tours',
      label: <p className={`${TAB === 'tours' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Tours</p>,
      children: <Tours />
    },
    /*     {
          key: 'users',
          label: <p className={`${TAB === 'users' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Usuarios</p>,
          children: <Users />
        }, */
    {
      key: 'metrics',
      disabled: true,
      label:
        <Tooltip title='Próximamente'>
          <p className='text-disabled'>
            Métricas
          </p>,
        </Tooltip>,
      children: <p>Métricas</p>
    },
  ]

  return (
    <Tabs
      tabBarGutter={10}
      tabPosition="left"
      defaultActiveKey={TAB}
      activeKey={TAB}
      items={itemsTab}
      onChange={(key) => {
        setTAB(key)
        localStorage.setItem('tab', key)
      }}
      tabBarStyle={{ marginTop: 24, position: 'sticky', top: 0, left: 0, width: 180, overflowY: 'auto' }}
      style={{ overflowY: 'auto', height: '100vh' }}
    />
  )
}