import { Form } from "antd";
import InputForm from "@/components/InputForm";
import useAxiosPost from "@/hooks/useAxiosPost";
import { useAuthorizationState } from "@/store/authorization";
import { type SignInRequest, type SignInResponse } from "@/types/authSignInTypes";
import { UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "@/store/user";

export default function FormSignIn() {
  const navigate = useNavigate();
  const addAccesToken = useAuthorizationState(
    (state) => state.addAccesToken
  );
  const addCurrentUser = useCurrentUser(state => state.addCurrentUser)

  const action = useAxiosPost('/auth/login', {
    manual: true,
    onError: (e): void => {
      const mgs = e
      console.log(mgs)
    },
    onSuccess: ({ data }: { data: SignInResponse }): void => {
      addAccesToken(data?.data?.access_token)
      addCurrentUser(data?.data?.user)
      navigate("/")
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
  })

  function onFinish(values: SignInRequest): void {
    const { username, password } = values;
    action.run({
      username,
      password
    })
  }

  // user: admin
  // contraseña: pyh*4Vw2

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
              label="Usuario"
              formName="username"
              prefix={<UserAddOutlined style={{ color: '#9D9D9D' }} />}
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