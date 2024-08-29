import Logo from '../assets/svg/logoColors.svg'
import { Avatar, Button, Dropdown, type MenuProps } from "antd"
import { DownOutlined, UserOutlined } from "@ant-design/icons"

export default function Navbar() {

  const items: MenuProps['items'] = [
    {
      key: '1',
      style: { backgroundColor: 'transparent' },
      label: (
        <Button
          className="text-red-500 hover:!text-red-700 hover:!font-semibold"
          type="link"
        >
          Log Out
        </Button>
      ),
    },
  ];
  return (
    <div className="flex justify-between items-center px-6 py-[14px] bg-white w-full border-b">
      <img src={Logo} alt="logo" />
      <section className="flex gap-x-3 items-center">
        <p className="text-diamondBlack1">
          Hola, Jeison
        </p>
        <Dropdown menu={{ items }}>
          <section className="flex justify-center items-center gap-x-2">
            <Avatar
              icon={<UserOutlined style={{ fontSize: 17, color: '#3655A0' }} />}
              className="bg-[#3655A01F] border-[1px] border-[#3655A0]"
            />
            <DownOutlined style={{ color: '#3655A0', fontSize: 14 }} />
          </ section>
        </Dropdown>
      </section>
    </div>
  )
}