import FormSignIn from "../../UI/FormSignIn";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="w-9/12 hidden lg:!block">
        <div className='!h-full !bg-[url(/images/SignIn.webp)] bg-center bg-no-repeat'>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[url(/images/SignIn.webp)] bg-cover bg-no-repeat lg:bg-white lg:!bg-none px-5 lg:px-0 grid">
        <FormSignIn />
      </div>
    </div>
  )
}