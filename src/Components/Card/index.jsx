import { Container } from "./styles";

const Card = ({ status, title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{status}</p>
    </Container>
  );
};

export default Card;
