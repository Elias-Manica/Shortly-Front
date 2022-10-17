import React, { useContext, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import TopBarLogged from "../../components/TopBarLogged/TopBarLogged";

import { getProfile } from "../../services/requests";

import {
  ButtonUrl,
  Container,
  ContainerBody,
  ContainerInfos,
  ContainerInput,
  ContainerShortUrl,
  ContainerTrash,
  InputUrl,
  TextInfos,
} from "./styles";

import Swal from "sweetalert2";

export default function CreateShortlyScreen() {
  const [listShortly, setListShortly] = useState([]);
  const auth = JSON.parse(localStorage.getItem("shortly"));

  async function getShortlyUrls(token) {
    const response = await getProfile(token);
    console.log(response.data);
    setListShortly(response.data.shortenedUrls);
  }

  useEffect(() => {
    getShortlyUrls(auth.token);
  }, [auth.token]);

  if (!auth) {
    Swal.fire(
      "Você precisa estar logado para criar uma shortly",
      "erro!",
      "error"
    );

    return <Navigate to="/" replace={true} />;
  }
  return (
    <Container>
      <TopBarLogged />
      <ContainerBody>
        <ContainerInput>
          <InputUrl placeholder="Links que cabem no bolso" />
          <ButtonUrl>Encurtar link</ButtonUrl>
        </ContainerInput>
        <ContainerShortUrl>
          {listShortly.map((value) => (
            <>
              <ContainerInfos key={value.id}>
                <TextInfos>{value.url}</TextInfos>
                <TextInfos underline={"underline"} pointer={"pointer"}>
                  {value.shortUrl}
                </TextInfos>
                <TextInfos>
                  Quantidade de visitantes: {value.visitCount}
                </TextInfos>
              </ContainerInfos>
              <ContainerTrash>
                <ion-icon name="trash-outline"></ion-icon>
              </ContainerTrash>
            </>
          ))}
        </ContainerShortUrl>
      </ContainerBody>
    </Container>
  );
}
