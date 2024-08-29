import { IReservationCardProps } from "@/types/reservationsTypes";

export default function ReservationDetails({ item, content }: IReservationCardProps) {
  return (
    <section className="flex flex-wrap gap-x-[6px]">
      <p className="text-diamondBlack1 font-semibold text-[14px] leading-5">
        {item}
      </p>
      <p className="text-diamondBlack1 font-normal text-[14px] leading-5">
        {content}
      </p>
    </section>
  )
}