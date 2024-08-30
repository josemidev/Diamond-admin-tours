import { useState } from 'react'
import { Tabs, TabsProps, Tooltip } from "antd"
import AllReservation from '@/pages/home/UI/All'
import Sider from 'antd/es/layout/Sider'

export default function Sidebar() {
  const [TAB, setTAB] = useState('all')
  const itemsTab: TabsProps['items'] = [
    {
      key: 'all',
      label: <p className={`${TAB === 'all' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Todas Las Reservas</p>,
      children: <AllReservation />
    },
    {
      key: 'archived',
      label: <p className={`${TAB === 'archived' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Archivados</p>,
      children: <p>Archivados</p>
    },
    {
      key: 'search',
      label: <p className={`${TAB === 'search' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Buscar Reservas</p>,
      children: <p>Buscar Reservas</p>
    },
    {
      key: 'clients',
      label: <p className={`${TAB === 'clients' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Clientes</p>,
      children: <p>Clientes</p>
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

  return (
    <Tabs
      tabBarGutter={10}
      tabPosition="left"
      defaultActiveKey={TAB}
      activeKey={TAB}
      items={itemsTab}
      onChange={(key) => {
        setTAB(key)
      }}
      tabBarStyle={{ marginTop: 24, position: 'sticky', top: 0, left: 0, width: 180, overflowY: 'auto' }}
      style={{ height: '100vh', overflowY: 'auto' }}
    />
  )
}