import { useQuery } from "@tanstack/react-query";
import api from "../api/tours";

const HOST: string = "https://tours-be.fly.dev/api/v1";

async function getMyBookings() {
  const { data } = await api.get(`${HOST}/my-bookings`);
  return data?.data;
}

export default function useGetMyBookings() {
  return useQuery({ queryKey: ["my-bookings"], queryFn: getMyBookings });
}
