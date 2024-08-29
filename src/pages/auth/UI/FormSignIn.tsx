import { Form } from "antd";

import InputForm from "@/components/InputForm";
import useAxiosPost from "@/hooks/useAxiosPost";
import { MailFilled } from "@ant-design/icons";

export default function FormSignIn() {

  const action = useAxiosPost('/auth/login', {
    manual: true,
    onError: (e) => {
      const mgs = e
      console.log(mgs)
      // AlertError(mgs)
    },
    onSuccess: (data: unknown) => {
      const mgs = data
      console.log(mgs)
      // refresh()
      // AlertSuccess('la billetera se ha registrado exitosamente')
    }
  })

  function onFinish(values: { username: string, password: string }): void {
    const { username, password } = values;
    action.run({
      username,
      password
    })
  }

  // user admin
  //  contraseña pyh*4Vw2

  return (
    <>
      <div className="rounded-3xl p-5 transition duration-300 bg-white my-auto lg:bg-transparent lg:h-screen flex flex-col justify-center mx-auto w-full lg:max-w-2xl">
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
              formName="username"
              prefix={<MailFilled style={{ color: '#9D9D9D' }} />}
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
              Ingresar
            </button>
          </section>
        </Form>
      </div>
    </>
  )
}