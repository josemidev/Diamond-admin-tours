export interface Reservation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  tourName: string;
  dateStartingTour: string;
  statusOrder: "unrevised" | "review" | "approved" | "rejected";
  orderNumber: string;
  changeHistory: { date: string; description: string }[];
  isArchived: boolean;
  price?: number;
  actualPrice?: number;
}

export interface IReservationCardProps {
  data?: Reservation;
  isSearching?: boolean;
  isArchived?: boolean;
  sx?: string;
  refetch?: () => void;
  //Details
  item?: string;
  content?: string | number | undefined;
}

export interface IReservationDrawerProps {
  children?: React.ReactNode;
  data?: Reservation;
  refetch?: () => void;
  isArchived?: boolean;
  closeDrawer?: () => void;
}

export interface IStatusCardProps {
  statusOrder: "unrevised" | "review" | "approved" | "rejected";
}
export interface TypeReservationProps {
  type: 1 | 2 | 3;
}
export interface ITours {
  children?: React.ReactNode;
  name: string;
  price: number;
  _id?: string;
  refetch?: () => void;
}

export interface ErrorScreenProps {
  refetch?: () => void;
  isQueryError?: boolean;
}

export interface IUserProps extends IUser {
  children?: React.ReactNode;
  refetch?: () => void;
  id?: string;
  data?: IUser;
}

export interface IUser {
  createdAt?: string;
  higherRole?: string;
  name?: string;
  _id?: string;
}

export interface ITagCardProps {
  children?: React.ReactNode;
  sx?: string;
}

export interface IBookingsValues {
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  tourName: string;
  dateStartingTour: string;
  pickup: string;
  price: number;
  orderNumber: string;
}
