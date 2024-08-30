export interface Reservation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  tourName: string;
  dateStartingTour: string;
  status: "unrevised" | "review" | "approved" | "rejected";
  orderNumber: string;
  changeHistory: unknown[];
}

export interface IReservationCardProps {
  data?: Reservation;
  //Details
  item?: string;
  content?: string;
}

export interface IReservationDrawerProps {
  children?: React.ReactNode;
  data?: Reservation;
}

export interface IStatusCardProps {
  status: "unrevised" | "review" | "approved" | "rejected";
}
