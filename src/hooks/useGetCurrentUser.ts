import { useQuery } from "@tanstack/react-query";
import api from "../api/tours";

const HOST: string = "https://tours-be.fly.dev/api/v1";

async function getCurrentUser() {
  const { data } = await api.get(`${HOST}/users/current-user`);
  return data?.data;
}

export default function useGetCurrentUser() {
  return useQuery({ queryKey: ["current-user"], queryFn: getCurrentUser });
}
