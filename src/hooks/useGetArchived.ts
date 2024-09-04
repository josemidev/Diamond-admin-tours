import { useQuery } from "@tanstack/react-query"
import api from "../api/tours"

const HOST: string = "https://tours-be.fly.dev/api/v1"

async function getArchived() {
  const { data } = await api.get(`${HOST}/dashboard/archived`)
  return data?.data
}

export default function useGetArchived() {
  return useQuery({ queryKey: ['archived'] , queryFn: getArchived})
}