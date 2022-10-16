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
        <TextTittle
          onClick={() => {
            navigate("/login");
          }}
        >
          Entrar
        </TextTittle>
        <TextTittle
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Cadastrar-se
        </TextTittle>
      </TopBarContainer>
      <ContainerLogo>
        <Tittle
          onClick={() => {
            navigate("/");
          }}
        >
          Shortly
        </Tittle>
        <ImageLogo
          src={logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </ContainerLogo>
    </Container>
  );
}
