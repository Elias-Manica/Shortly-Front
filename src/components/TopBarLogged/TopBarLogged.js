import React, { useCallback, useEffect, useState } from "react";

import { getProfile, signOut } from "../../services/requests";

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

import Swal from "sweetalert2";

export default function TopBarLogged() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const auth = JSON.parse(localStorage.getItem("shortly"));

  const getName = useCallback(
    async (token) => {
      try {
        const response = await getProfile(token);

        setName(response.data.name);
      } catch (error) {
        if (error.response.status === 401) {
          Swal.fire(
            `Token de acesso inválido`,
            "Faça login novamente!",
            "error"
          );
          navigate("/");
        }
      }
    },
    [navigate]
  );

  async function functionsingOut() {
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      text: "Você pode fazer login novamente depois",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, quero sair!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth.token)
          .then(() => {
            localStorage.removeItem("shortly");
            navigate("/");
          })
          .catch((error) => {
            Swal.fire(`${error.response.data.msg}`, "erro!", "error");
            localStorage.removeItem("shortly");
            navigate("/");
          });
      }
    });
  }

  useEffect(() => {
    getName(auth.token);
  }, [auth.token, getName]);

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
          <TextTittle
            onClick={() => {
              functionsingOut();
            }}
          >
            Sair
          </TextTittle>
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
