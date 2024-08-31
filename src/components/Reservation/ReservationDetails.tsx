import { IReservationCardProps } from "@/types/reservationsTypes";
import { Typography } from 'antd'

export default function ReservationDetails({ item, content }: IReservationCardProps) {
  return (
    <>
      <Typography.Paragraph
        className="text-diamondBlack1 font-semibold !leading-4 !text-[14px]"
      >
        {item} <span className="font-normal"> {content}</span>
      </Typography.Paragraph>
    </>
  )
}