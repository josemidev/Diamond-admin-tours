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

export function formatGivenDate(inputDate: any) {
  if (!inputDate) return inputDate
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options)
  return formattedDate
}