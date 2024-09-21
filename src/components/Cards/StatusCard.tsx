import { IStatusCardProps } from '@/types/reservationsTypes'

export function InitialStatus({ statusOrder }: IStatusCardProps) {
  const statusDetails = {
    unrevised: ['bg-[#F8F8F8]', 'Sin Revisar', 'text-unrevised', 'border-[#E5E5E5]'],
    review: ['bg-[#E1AB3F14]', 'En revisión', 'text-review'],
    approved: ['bg-[#87E5D21C]', 'Aprobado', 'text-approved', 'border-[#3973674D]'],
    rejected: ['bg-[#EC623712]', 'Rechazado', 'text-rejected'],
  }
  return (
    <section className={`${statusDetails[statusOrder][0]} border ${statusDetails[statusOrder][3]} py-1 px-1 w-fit rounded-md flex`}>
      <p className={`text-diamondBlack1 text-[12px] font-semibold capitalize ${statusDetails[statusOrder][2]}`}>
        {statusDetails[statusOrder][1]}
      </p>
    </section>
  )
}


export function NewStatus({ statusOrder }: IStatusCardProps) {
  const statusDetails = {
    unrevised: ['bg-[#E1AB3F14]', 'En revisión', 'text-review', 'border-[#E1AB3F4D]'],
    review: ['bg-[#E1AB3F1A ]', 'En revisión', 'text-review'],
    approved: ['bg-[#EC623712]', 'Rechazado', 'text-rejected', 'border-[#EC62374D]'],
    rejected: ['bg-[#EC623712]', 'Rechazado', 'text-rejected'],
  }
  return (
    <section className={`${statusDetails[statusOrder][0]} border ${statusDetails[statusOrder][3]}  py-1 px-1 w-fit rounded-md flex`}>
      <p className={`text-diamondBlack1 text-[12px] font-semibold capitalize ${statusDetails[statusOrder][2]}`}>
        {statusDetails[statusOrder][1]}
      </p>
    </section>
  )
}
