import './App.css'
import useGetReservations from './hooks/useGetReservations'
import { Reservation } from './types/reservationsTypes'

function App() {

  const { data, error, isLoading } = useGetReservations()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>


  return (
    <>
      <p className="read-the-docs">
        {data?.data.map((reservation : Reservation) => (
          <div key={reservation._id}>
            <p>{reservation.name}</p>
            <p>{reservation.email}</p>
            <p>{reservation.phone}</p>
            <p>{reservation.numberOfPersons}</p>
            <p>{reservation.tourName}</p>
            <p>{reservation.dateStartingTour}</p>
            <p>{reservation.status}</p>
            <p>{reservation.orderNumber}</p>
          </div>
        ))}
      </p>
    </>
  )
}

export default App
