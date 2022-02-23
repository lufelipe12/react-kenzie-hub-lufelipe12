import Input from "../../Components/Input";
import Button from "../../Components/Button";
import logo from "../../assets/logo.png";
import { Container, StyledForm } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        toast.success("Bem vindo!");
        history.push("/dashboard");
        localStorage.setItem("@kenzieHub:token", response.data.token);
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
  };

  return (
    <Container>
      <img src={logo} alt="logo-kenzie" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <Input
          register={register}
          name="email"
          placeholder="Digite aqui seu email"
          label="Email"
        />
        <span>{errors.email?.message}</span>
        <Input
          register={register}
          name="password"
          placeholder="Digite aqui sua senha"
          label="Senha"
          type="password"
        />
        <span>{errors.password?.message}</span>
        <Button type="submit">Entrar</Button>
        <p>Ainda não possui uma conta?</p>
        <Button register onClick={() => history.push("/register")}>
          Cadastre-se
        </Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
