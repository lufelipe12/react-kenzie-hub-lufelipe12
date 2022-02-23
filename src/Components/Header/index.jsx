import { StyledHeader, StyledButton } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <img src={logo} alt="kenzie-logo" />
          <StyledButton>Sair</StyledButton>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
