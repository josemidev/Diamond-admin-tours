import { useQuery } from "@tanstack/react-query";
import api from "../api/tours";

const HOST: string = "https://tours-be.fly.dev/api/v1";

async function getUsers() {
  const { data } = await api.get(`${HOST}/auth/users`);
  return data?.data;
}

export default function useGetUsers() {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
}
