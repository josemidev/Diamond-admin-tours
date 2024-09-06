import { Button } from "antd"
import Error from '@/assets/svg/ErrorSvg.svg'
import { type ErrorScreenProps } from "@/types/reservationsTypes"

export default function ErrorScreen({ refetch, isQueryError = true }: ErrorScreenProps) {
  const handleButton = () => {
    if (refetch) {
      refetch()
    } else {
      window.location.href = '/'
    }
  }
  return (
    <section className="flex flex-col justify-center !items-center !h-[calc(100vh-250px)] z-50">
      <img
        src={Error}
        alt="ErrorImage"
        title="ErrorImage"
      />
      <section className="mt-10 flex flex-col justify-center items-center gap-y-4">
        <p className="text-[#4D4D4D] text-[56px] font-extrabold leading-none">
          404
        </p>
        <p className="text-[#00000073] font-normal text-[14px] max-w-lg text-center">
          {isQueryError && " La operación no se pudo completar debido a un error. Por favor, verifica los datos e inténtalo de nuevo."}
          {!isQueryError && "¡Vaya! Parece que esta página ha decidido tomar unas vacaciones. No encontramos lo que estás buscando."}
        </p>
        <Button
          onClick={handleButton}
          type="primary"
          className="rounded-md w-fit text-white hover:!bg-[#4a6bb0]"
        >
          {isQueryError ? "Reintentar" : "Volver a la página principal"}
        </Button>
      </section>
    </section>
  )
}
