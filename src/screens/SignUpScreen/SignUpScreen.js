import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { singUp } from "../../services/requests";

import { Button, Container, ContainerInput, Input } from "./styles";

import { Oval } from "react-loader-spinner";

import TopBar from "../../components/TopBar/TopBar";

import Swal from "sweetalert2";

export default function SignUpScreen() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (password !== confirmPassword) {
      Swal.fire("Senhas diferentes", "erro", "warning");
      setLoading(false);

      return;
    }

    try {
      let response = await singUp({ name, email, password, confirmPassword });

      Swal.fire(`${response.data.msg}`, "sucesso!", "success");
      navigate("/");
    } catch (error) {
      if (error.response.data.length > 0) {
        Swal.fire(`${error.response.data}`, "erro", "error");
        setLoading(false);
        setEmail("");
        setConfirmPassword("");
        setName("");
        setPassword("");
        return;
      }
      Swal.fire(`${error.response.data.msg}`, "erro", "error");
      setLoading(false);
      setEmail("");
      setConfirmPassword("");
      setName("");
      setPassword("");
    }
  }

  return (
    <Container>
      <TopBar />
      <ContainerInput onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          value={name}
          disabled={loading ? true : false}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <Input
          placeholder="Confirmar senha"
          value={confirmPassword}
          disabled={loading ? true : false}
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            "Criar conta"
          )}
        </Button>
      </ContainerInput>
    </Container>
  );
}
