import { type ITagCardProps } from "@/types/reservationsTypes";

export default function TagCard({ children, sx }: ITagCardProps) {
  return (
    <section className={`w-fit border border-[#E5E5E5] px-2 rounded-md bg-[#FAFAFA] ${sx}`}>
      {children}
    </section>
  )
}