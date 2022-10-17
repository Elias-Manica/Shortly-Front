import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import TopBarLogged from "../../components/TopBarLogged/TopBarLogged";

import {
  getProfile,
  createShortly,
  deleteShortly,
  openShortly,
} from "../../services/requests";

import {
  ButtonUrl,
  Container,
  ContainerBody,
  ContainerEmpty,
  ContainerInfos,
  ContainerInput,
  ContainerLoading,
  ContainerShortUrl,
  ContainerTrash,
  InputUrl,
  LinkExternal,
  TextEmpty,
  TextInfos,
} from "./styles";

import Swal from "sweetalert2";

import { Oval } from "react-loader-spinner";

export default function CreateShortlyScreen() {
  const [listShortly, setListShortly] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [url, setUrl] = useState("");

  const auth = JSON.parse(localStorage.getItem("shortly"));

  async function getShortlyUrls(token) {
    setLoading(true);
    try {
      const response = await getProfile(token);

      setListShortly(response.data.shortenedUrls);
      setLoading(false);
    } catch (error) {
      if (error.response.data.length > 0) {
        Swal.fire(`${error.response.data}`, "erro!", "error");
        setLoading(false);

        return;
      }
      Swal.fire(`${error.response.data.msg}`, "erro!", "error");
      setLoading(false);
    }
  }

  async function createUrlShortly(token) {
    if (url.length === 0) {
      Swal.fire(
        `Para fazer um shortly você precisa de um link!`,
        "erro!",
        "error"
      );
      return;
    }
    setLoadingButton(true);
    try {
      await createShortly({ url }, token);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Shortly criado com sucesso",
      });
      setUrl("");
      getShortlyUrls(auth.token);
      setLoadingButton(false);
    } catch (error) {
      if (error.response.data.length > 0) {
        Swal.fire(`${error.response.data}`, "erro!", "error");
        setLoadingButton(false);
        return;
      }
      Swal.fire(`${error.response.data.msg}`, "erro!", "error");
      setLoadingButton(false);
    }
  }

  function deleteShortlyFunction(id, token) {
    Swal.fire({
      title: "Tem certeza que deseja excluir esse shortly?",
      text: "Você não poderá reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, quero excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = deleteShortly(id, token);
        response
          .then((value) => {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: "Shortly deletado com sucesso!",
            });
            getShortlyUrls(auth.token);
          })
          .catch((value) => {
            if (value.response.data.length > 0) {
              Swal.fire(`${value.response.data}`, "erro!", "error");

              return;
            }
            Swal.fire(`${value.response.data.msg}`, "erro!", "error");
          });
      }
    });
  }

  async function openShortlyFunction(shortly) {
    try {
      await openShortly(shortly);

      getShortlyUrls(auth.token);
    } catch (error) {
      if (error.response.data.length > 0) {
        Swal.fire(`${error.response.data}`, "erro!", "error");
        getShortlyUrls(auth.token);
        return;
      }
      Swal.fire(`${error.response.data.msg}`, "erro!", "error");
      getShortlyUrls(auth.token);
    }
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
          <InputUrl
            placeholder="Links que cabem no bolso"
            value={url}
            disabled={loading ? true : false}
            onChange={(e) => setUrl(e.target.value)}
          />
          <ButtonUrl onClick={() => createUrlShortly(auth.token)}>
            {loadingButton ? (
              <Oval
                height={20}
                width={20}
                color="#4fa94d"
                wrapperStyle={{}}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              "Encurtar link"
            )}
          </ButtonUrl>
        </ContainerInput>

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
        ) : listShortly.length > 0 ? (
          listShortly.map((value) => (
            <ContainerShortUrl key={value.id}>
              <ContainerInfos>
                <TextInfos>{value.url}</TextInfos>
                <LinkExternal
                  underline={"underline"}
                  pointer={"pointer"}
                  target={"_blank"}
                  href={value.url}
                  onClick={() => {
                    openShortlyFunction(value.shortUrl);
                    getShortlyUrls(auth.token);
                  }}
                >
                  {value.shortUrl}
                </LinkExternal>
                <TextInfos>
                  Quantidade de visitantes: {value.visitCount}
                </TextInfos>
              </ContainerInfos>
              <ContainerTrash
                onClick={() => deleteShortlyFunction(value.id, auth.token)}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </ContainerTrash>
            </ContainerShortUrl>
          ))
        ) : (
          <ContainerEmpty>
            <TextEmpty>Você não tem nenhum shortly ainda!</TextEmpty>
          </ContainerEmpty>
        )}
      </ContainerBody>
    </Container>
  );
}
