import { useQuery } from "@tanstack/react-query"
import api from "../api/tours"
import { Reservation } from "../types/reservationsTypes"

const HOST: string = "https://tours-be.fly.dev/api/v1"

async function getArchived() {
  const { data } = await api.get<Reservation[]>(`${HOST}/dashboard/archived`)
  return data
}

export default function useGetArchived() {
  return useQuery({ queryKey: ['archived'] , queryFn: getArchived})
}