import { Container, DivTecnologies, StyledButton } from "./styles";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

const Dashboard = () => {
  return (
    <Container>
      <Header></Header>
      <section>
        <h1>Olá, Luiz</h1>
        <p>Módulo 3, avançado react.</p>
      </section>
      <hr />
      <nav>
        <h3>Tecnologias</h3>
        <StyledButton> + </StyledButton>
      </nav>
      <DivTecnologies>
        <Card />
      </DivTecnologies>
    </Container>
  );
};

export default Dashboard;
