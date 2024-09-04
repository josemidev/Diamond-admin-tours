import { useQuery } from "@tanstack/react-query"
import api from "../api/tours"

const HOST: string = "https://tours-be.fly.dev/api/v1"

async function getReservations() {
  const { data } = await api.get(`${HOST}/dashboard`)
  return data?.data
}

export default function useGetReservations() {
  return useQuery({ queryKey: ['reservations'] , queryFn: getReservations})
}