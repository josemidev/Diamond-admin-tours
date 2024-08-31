export interface ToursResponse {
  orderNumber: number
  name: string
  phone: string
  email: string
  numberOfPersons: number
  tourName: string
  dateStartingTour: string
  archived: boolean
  status: string
  changeHistory: { date: string; description: string }[]
  createdAt: string
  updatedAt: string
}
