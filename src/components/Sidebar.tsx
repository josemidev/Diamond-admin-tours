import { useState } from 'react'
import { Tabs, TabsProps, Tooltip } from "antd"

export default function Sidebar() {
  const [TAB, setTAB] = useState('all')
  const itemsTab: TabsProps['items'] = [
    {
      key: 'all',
      label: <p className={`${TAB === 'all' ? 'font-bold text-diamondPrimary' : 'font-normal text-diamondBlack2'}`}>Todas Las Reservas</p>,
      children: <p>Todas Las Reservas</p>
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
      defaultActiveKey="dashboard"
      activeKey={TAB}
      items={itemsTab}
      onChange={(key) => {
        setTAB(key)
      }}
      tabBarStyle={{ marginTop: 24 }}
      style={{ height: '94vh', overflowY: 'auto' }}
    />
  )
}