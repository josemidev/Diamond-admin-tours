import React from 'react'
import Logo from '../assets/svg/logoColors.svg'
import { Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-[14px] bg-white w-full border-b">
      <img src={Logo} alt="logo" />
      <section className="flex gap-x-3 items-center">
        <p className="text-diamondBlack1">
          Hola, Jeison
        </p>
        <Avatar
          icon={<UserOutlined style={{ fontSize: 17, color: '#3655A0' }} />}
          className="bg-[#3655A01F] border-[1px] border-[#3655A0]"
        />
      </section>
    </div>
  )
}