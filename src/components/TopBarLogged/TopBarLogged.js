import React, { useEffect, useState } from "react";

import { getProfile } from "../../services/requests";

import { useNavigate } from "react-router-dom";

import {
  Container,
  TopBarContainer,
  TextTittle,
  ContainerLogo,
  Tittle,
  ImageLogo,
  TextUser,
  ContainerButtons,
} from "./styles";

import logo from "../../assets/images/twemoji_shorts.png";

export default function TopBarLogged() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const auth = JSON.parse(localStorage.getItem("shortly"));

  async function getName(token) {
    const response = await getProfile(token);
    console.log(response.data);
    setName(response.data.name);
  }

  useEffect(() => {
    getName(auth.token);
  }, [auth.token]);

  return (
    <Container>
      <TopBarContainer>
        <TextUser>Seja bem-vindo(a), {name}!</TextUser>
        <ContainerButtons>
          <TextTittle
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </TextTittle>
          <TextTittle
            onClick={() => {
              navigate("/ranking");
            }}
          >
            Ranking
          </TextTittle>
          <TextTittle>Sair</TextTittle>
        </ContainerButtons>
      </TopBarContainer>
      <ContainerLogo>
        <Tittle
          onClick={() => {
            navigate("/home");
          }}
        >
          Shortly
        </Tittle>
        <ImageLogo
          src={logo}
          onClick={() => {
            navigate("/home");
          }}
        />
      </ContainerLogo>
    </Container>
  );
}
