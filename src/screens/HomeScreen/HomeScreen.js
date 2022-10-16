import React, { useState, useEffect } from "react";

import { getRaking } from "../../services/requests.js";

import {
  Container,
  ContainerLoading,
  ContainerLogo,
  ContainerRanking,
  ImageLogo,
  ImageRanking,
  TextRaking,
  TextTittle,
  Tittle,
  TittleRanking,
  TopBar,
  ViewRanking,
} from "./styles";

import logo from "../../assets/images/twemoji_shorts.png";
import imgRanking from "../../assets/images/Vector.png";

import { Oval } from "react-loader-spinner";

export default function HomeScreen() {
  const [listRanking, setListRanking] = useState([]);
  const [loading, setLoading] = useState(false);

  async function functionGetRaking() {
    setLoading(true);
    try {
      let response = await getRaking();
      console.log(response.data);
      setListRanking(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    functionGetRaking();
  }, []);

  return (
    <Container>
      <TopBar>
        <TextTittle>Entrar</TextTittle>
        <TextTittle>Cadastrar-se</TextTittle>
      </TopBar>
      <ContainerLogo>
        <Tittle>Shortly</Tittle>
        <ImageLogo src={logo} />
      </ContainerLogo>
      <ContainerRanking>
        <ImageRanking src={imgRanking} />
        <TittleRanking>Ranking</TittleRanking>
      </ContainerRanking>
      <ViewRanking>
        {loading ? (
          <ContainerLoading>
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </ContainerLoading>
        ) : (
          listRanking.map((value, index) => (
            <TextRaking key={value.id}>
              {index + 1}. {value.name} - {value.linksCount} links -{" "}
              {value.visitCount} visualizações
            </TextRaking>
          ))
        )}
      </ViewRanking>
    </Container>
  );
}
