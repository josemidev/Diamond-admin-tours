import { useQuery } from "@tanstack/react-query"
import api from "../api/tours"

const HOST: string = "https://tours-be.fly.dev/api/v1"

async function getTours() {
  const { data } = await api.get(`${HOST}/dashboard/tours`)
  return data?.data;
}

export default function useGetTours() {
  return useQuery({ queryKey: ['tours'] , queryFn: getTours})
}