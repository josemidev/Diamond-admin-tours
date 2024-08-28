import { Reservation } from "../types/reservationsTypes";

export const groupByStatus = (data: Reservation[]) => {
  return data.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {} as Record<string, Reservation[]>);
};