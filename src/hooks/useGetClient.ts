import { useQuery } from "@tanstack/react-query";
import api from "../api/tours";
import { Reservation } from "../types/reservationsTypes";

const HOST: string = "https://tours-be.fly.dev/api/v1";

async function getClients() {
  const { data } = await api.get<Reservation[]>(`${HOST}/dashboard/client`);
  return data;
}

export default function useGetClients() {
  return useQuery({ queryKey: ["clients"], queryFn: getClients });
}
