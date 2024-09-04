import { useQuery } from "@tanstack/react-query";
import api from "../api/tours";

const HOST: string = "https://tours-be.fly.dev/api/v1";

async function getClients() {
  const { data } = await api.get(`${HOST}/dashboard/client`);
  console.log("🚀 ~ getClients ~ data:", data)
  return data?.data;
}

export default function useGetClients() {
  return useQuery({ queryKey: ["clients"], queryFn: getClients });
}
