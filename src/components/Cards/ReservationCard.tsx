import { Button } from "antd"
import { ArrowDownOutlined } from "@ant-design/icons"
import ReservationDetails from "../ReservationDetails"


export default function ReservationCard() {
  return (
    <section className="bg-white rounded-t-lg px-3 py-4 mb-3 flex flex-col gap-y-6">
      <section className="flex justify-between gap-x-3">
        <p className="text-diamondBlack3 font-bold text-[17px] leading-5">
          Punta Cana Tour Zip Line Park
        </p>
        <section className="flex h-full items-start">
          <Button
            className="rounded-md border-border hover:!border-[#969696]"
            size="small"
            icon={<ArrowDownOutlined style={{ fontSize: 12, color: '#969696' }} />}
          />
        </section>
      </section>
      <section className="flex flex-col gap-y-1">
        <ReservationDetails item="Cliente" content="Juan Perez" />
        <ReservationDetails item="Email" content='manuelrdg@gmail.com' />
        <ReservationDetails item="Telefono" content="3102311234" />
        <ReservationDetails item="Fecha Inicio Del Tour" content="Aug 12, 2024" />
        <ReservationDetails item="Numero de personas" content="1" />
      </section>
    </section>
  )
}