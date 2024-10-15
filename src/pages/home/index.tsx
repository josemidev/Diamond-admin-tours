import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

function index() {
  return (
    <>
      <div className="hidden sm:flex flex-col h-screen">
        <Navbar />
        <Sidebar />
      </div>
      <section className="flex justify-center items-center h-screen sm:hidden">
        <p className="text-diamondBlack1 font-medium max-w-xs text-center leading-5">
          Dashboard disponible solo en pantallas grandes
        </p>
      </section>
    </>
  )
}

export default index