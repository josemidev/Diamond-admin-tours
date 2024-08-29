export interface Reservation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  tourName: string;
  dateStartingTour: string;
  status: string;
  orderNumber: string;
  changeHistory: unknown[];
}

export interface IReservationCardProps {
  //Details
  item?: string;
  content?: string;
}
