import { useForm } from "react-hook-form";
import Menu from "../components/Menu";
import { Label, Input, Form } from "./stylesLogin";
import {AuthContext} from "../context/AuthContext.jsx"
import {useContext} from "react"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const contexto = useContext(AuthContext);
  //contexto.login()

  const {login, logout} = useContext(AuthContext);

  return (
    <>
      <Menu />
      <h1>Login</h1>

      <Form onSubmit={handleSubmit(login)}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Campo obrigatório</span>}

          <Label htmlFor="senha">Senha</Label>
          <Input
            type="password"
            id="senha"
            {...register("senha", { required: true })}
          />
          {errors.senha && <span>Campo obrigatório</span>}
        </div>
        <button type="submit">Entrar</button>
        <button type="button" onClick={() => reset()}>
          Limpar
        </button>
      </Form>
    </>
  );
}

export default Login;
