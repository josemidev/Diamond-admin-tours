import FormSignIn from "../../UI/FormSignIn";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="w-10/12 hidden md:!block">
        <div className='!h-full !bg-[url(/images/SignIn.webp)] bg-center bg-no-repeat'>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-[url(/images/SignIn.webp)] bg-cover bg-no-repeat md:bg-white md:!bg-none grid h-screen">
        <FormSignIn />
      </div>
    </div>
  )
}