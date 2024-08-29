import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

function index() {
  return (
    <>
      <section className="hidden lg:block">
        <Navbar />
        <Sidebar />
      </section>
      <section className="flex justify-center items-center h-screen lg:hidden">
        <p className="text-diamondBlack1 font-medium max-w-xs text-center leading-5">
          Dashboard disponible solo en pantallas grandes
        </p>
      </section>
    </>
  )
}

export default index