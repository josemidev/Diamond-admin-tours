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
  changeHistory: { date: string; description: string }[];
  isArchived: boolean;
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
}

export interface IStatusCardProps {
  status: "unrevised" | "review" | "approved" | "rejected";
}

export const Tours = [
  {
    label: "Coco Bongo",
    value: "COCO_BONGO",
  },
  {
    label: "Isla Saona",
    value: "ISLA_SAONA",
  },
  {
    label: "Punta Cana Tour Buggy",
    value: "PUNTA_CANA_TOUR_BUGGY",
  },
  {
    label: "Monkeyland Tour",
    value: "MONKEYLAND_TOUR",
  },
  {
    label: "Supreme Safari Tour",
    value: "SUPREME_SAFARI_TOUR",
  },
  {
    label: "Punta Cana Tour Higuey",
    value: "PUNTA_CANA_TOUR_HIGUEY",
  },
  {
    label: "Punta Cana Tour Santo Domingo",
    value: "PUNTA_CANA_TOUR_SANTO_DOMINGO",
  },
  {
    label: "Tour Horse",
    value: "TOUR_HORSE",
  },
  {
    label: "Punta Cana Tour Zip Line Park",
    value: "PUNTA_CANA_TOUR_ZIP_LINE_PARK",
  },
  {
    label: "La Hacienda Park",
    value: "LA_HACIENDA_PARK",
  },
  {
    label: "Punta Cana Tour Party Boat",
    value: "PARTY_BOAT_TOUR",
  },
];
