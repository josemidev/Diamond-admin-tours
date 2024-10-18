import AllReservation from '@/pages/home/UI/All'
import AllReservationArchived from '@/pages/home/UI/AllArchived'
import Clients from "@/pages/home/UI/Clients"
import SearchReservations from '@/pages/home/UI/SearchReservations'
import Tours from "@/pages/home/UI/Tours"
import Users from '@/pages/home/UI/Users'
import { Tabs, TabsProps, Tooltip } from "antd"
import { useState } from 'react'
import MyBookings from "@/pages/home/UI/MyBookings"
import { useCurrentUser } from "@/store/user"
import LoadingIndicator from "./LoadingIndicator"

export default function Sidebar() {
  const currentUser = useCurrentUser.getState().user
  const role = currentUser?.higherRole

  const [tab, setTab] = useState('all')

  if (!currentUser.higherRole) {
    <LoadingIndicator />
  }

  const itemsTab: TabsProps['items'] = [
    {
      key: 'all',
      label: <p className={`${tab === 'all' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Todas Las Reservas</p>,
      children: <AllReservation />
    },
    {
      key: 'archived',
      label: <p className={`${tab === 'archived' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Archivados</p>,
      children: <AllReservationArchived />
    },
    {
      key: 'search',
      label: <p className={`${tab === 'search' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Buscar Reservas</p>,
      children: <SearchReservations />
    },
    {
      key: 'clients',
      label: <p className={`${tab === 'clients' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Clientes</p>,
      children: <Clients />
    },
    ...((role === 'owner' || role === 'admin') ? [
      {
        key: 'tours',
        label: <p className={`${tab === 'tours' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Tours</p>,
        children: <Tours />
      }
    ] : []),
    ...((role === 'owner' || role === 'admin') ? [
      {
        key: 'users',
        label: <p className={`${tab === 'users' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Usuarios</p>,
        children: <Users />
      }
    ] : []),
    {
      key: 'my_bookings',
      label: <p className={`${tab === 'my_bookings' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Mis Reservas</p>,
      children: <MyBookings />
    },
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

  //admin password: pyh*4Vw2
  return (
    <Tabs
      tabBarGutter={10}
      tabPosition="left"
      defaultActiveKey={tab}
      activeKey={tab}
      items={itemsTab}
      onChange={(key) => {
        setTab(key)
      }}
      tabBarStyle={{ marginTop: 24, position: 'sticky', top: 0, left: 0, width: 180, overflowY: 'auto' }}
      style={{ overflowY: 'auto', height: '100vh' }}
    />
  )
}