import { useNavigate } from "react-router-dom";

import {
  Container,
  TopBarContainer,
  TextTittle,
  ContainerLogo,
  Tittle,
  ImageLogo,
} from "./styles";

import logo from "../../assets/images/twemoji_shorts.png";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <TopBarContainer>
        <TextTittle>Entrar</TextTittle>
        <TextTittle
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Cadastrar-se
        </TextTittle>
      </TopBarContainer>
      <ContainerLogo
        onClick={() => {
          navigate("/");
        }}
      >
        <Tittle>Shortly</Tittle>
        <ImageLogo src={logo} />
      </ContainerLogo>
    </Container>
  );
}
