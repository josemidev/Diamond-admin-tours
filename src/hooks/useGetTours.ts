import { useQuery } from "@tanstack/react-query"
import api from "../api/tours"
import { Reservation } from "../types/reservationsTypes"

const HOST: string = "https://tours-be.fly.dev/api/v1"

async function getTours() {
  const { data } = await api.get<Reservation[]>(`${HOST}/dashboard/tours`)
  return data
}

export default function useGetTours() {
  return useQuery({ queryKey: ['tours'] , queryFn: getTours})
}