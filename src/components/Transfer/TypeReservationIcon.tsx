import { TypeReservationProps } from "@/types/reservationsTypes";
import IconTruck from "../icons/IconTruck";
import IconAirplaneReturn from "../icons/IconAirplaneReturn";
import IconAirplane from "../icons/IconAirPlane";

export function IconTypeReservation({ type }: TypeReservationProps) {
    return (
      <div>
        {type === 1 && (
          <IconTruck className="size-6 fill-[#6A6A6A]" />
        )}

        {type === 2 && (
          <IconAirplaneReturn className="size-6 fill-[#6A6A6A]" />
        )}

        {type === 3 && (
          <IconAirplane className="size-6 fill-[#6A6A6A]" />
        )}
      </div>
    )
}