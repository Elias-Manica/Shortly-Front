import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import TokenAuth from "../../contexts/tokenContext";

import { singIn } from "../../services/requests";

import { Button, Container, ContainerInput, Input } from "./styles";

import { Oval } from "react-loader-spinner";

import TopBar from "../../components/TopBar/TopBar";

import Swal from "sweetalert2";

export default function SignInScreen() {
  const navigate = useNavigate();

  const { setToken } = useContext(TokenAuth);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await singIn({ email, password });
      localStorage.setItem(
        "shortly",
        JSON.stringify({ token: `${response.data.token}` })
      );
      setToken(response.data.token);
      navigate("/home");
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

  return (
    <Container>
      <TopBar />
      <ContainerInput onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email}
          disabled={loading ? true : false}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Senha"
          value={password}
          disabled={loading ? true : false}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button disabled={loading ? true : false}>
          {loading ? (
            <Oval
              height={20}
              width={20}
              color="white"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          ) : (
            "Entrar"
          )}
        </Button>
      </ContainerInput>
    </Container>
  );
}
