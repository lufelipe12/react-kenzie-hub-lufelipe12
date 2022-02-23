import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Container, StyledForm } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Digite um nome"),
    email: yup.string().email("email inválido").required("Digite um email"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "Mínimo de 6 dígitos"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Confirmação inválida")
      .required("Confirme a senha"),
    module: yup.string().required("Digite um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <Input
          register={register}
          name="name"
          placeholder="Digite aqui seu nome"
          label="Nome"
        />
        <span>{errors.name?.message}</span>
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
        <Input
          register={register}
          name="confirm_password"
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          type="password"
        />
        <span>{errors.confirm_password?.message}</span>
        <Input
          register={register}
          name="module"
          placeholder="Digite aqui seu módulo"
          label="Módulo"
        />
        <span>{errors.module?.message}</span>
        <Button type="submit">Cadastrar</Button>
      </StyledForm>
    </Container>
  );
};

export default Register;
