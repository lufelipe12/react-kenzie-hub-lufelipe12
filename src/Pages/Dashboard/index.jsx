import { Container, DivTecnologies, StyledButton } from "./styles";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Components/Modal";
import api from "../../Services/api";
import { useEffect } from "react";

const Dashboard = ({ auth, setAuth }) => {
  const [addTech, setAddTech] = useState(false);

  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));

  const [techList, setTechList] = useState([]);

  useEffect(() => {
    api
      .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
      .then((response) => setTechList(response.data.techs))
      .catch((err) => console.log(err));
  }, [techList]);

  const createTech = () => {
    setAddTech(true);
  };

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header setAuth={setAuth} />
      <section>
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
      </section>
      <hr />
      <nav>
        {addTech && <Modal user={user} setAddTech={setAddTech} />}
        <h3>Tecnologias</h3>
        <StyledButton onClick={createTech}> + </StyledButton>
      </nav>
      <DivTecnologies>
        {techList.map(({ title, status }) => (
          <Card title={title} status={status} />
        ))}
      </DivTecnologies>
    </Container>
  );
};

export default Dashboard;
