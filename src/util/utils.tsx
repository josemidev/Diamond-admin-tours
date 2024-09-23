import { Reservation } from "../types/reservationsTypes";

export const groupByStatus = (data: Reservation[]) => {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.statusOrder]) {
      acc[item.statusOrder] = [];
    }
    acc[item.statusOrder].push(item);
    return acc;
  }, {} as Record<string, Reservation[]>);

  const order = ['unrevised', 'review', 'approved', 'rejected'];
  const orderedGrouped: Record<string, Reservation[]> = {};
  order.forEach(statusOrder => {
    if (grouped[statusOrder]) {
      orderedGrouped[statusOrder] = grouped[statusOrder];
    }
  });
  return orderedGrouped;
};

export function formatGivenDate(inputDate: any) {
  if (!inputDate) return inputDate
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options)
  return formattedDate
}