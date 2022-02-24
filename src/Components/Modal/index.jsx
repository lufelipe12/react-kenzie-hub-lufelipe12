import { ModalDiv, StyledButton } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../Services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Modal = ({ setAddTech }) => {
  const close = () => {
    return setAddTech(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ModalDiv>
        <h3>Adicione sua tecnologia</h3>
        <StyledButton onClick={close}> x </StyledButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="title"
            placeholder="Digite aqui sua tecnologia"
            label="Nome"
          />
          <Input
            register={register}
            name="status"
            placeholder="Iniciante, intermediário ou avançado"
            label="Status"
          />
          <Button type="submit">Cadastrar tecnologia</Button>
        </form>
      </ModalDiv>
    </>
  );
};

export default Modal;
