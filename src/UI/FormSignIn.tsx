import { Form } from "antd";
import InputForm from "../components/InputForm";

export default function FormSignIn() {
  const onFinish = (values: any) => {
    console.log(values);
  }

  return (
    <div className="my-auto px-5 md:px-0">
      <div className="bg-white p-8 rounded-3xl">
        <h1 className="text-diamondPrimary text-[36px] font-extrabold">
          Iniciar sesión
        </h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <section className="mt-6 flex flex-col gap-[22px]">
            <InputForm
              label="Email"
              formName="email"
            />
            <InputForm
              type='password'
              label="Contraseña"
              formName="password"
            />
          </section>
          <section className="flex flex-row-reverse items-center mt-6">
            <button
              className="bg-[#3655A0] px-11 h-10 rounded-lg text-white w-fit hover:!bg-[#4a6bb0]"
              type='submit'>
              Reserve
            </button>
          </section>
        </Form>
      </div>
    </div>
  )
}