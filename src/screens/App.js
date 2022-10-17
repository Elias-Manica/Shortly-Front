import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TokenAuth from "../contexts/tokenContext";

import { GlobalStyle } from "../assets/css/GlobalStyle";

import HomeScreen from "./HomeScreen/HomeScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import SignInScreen from "./SignInScreen/SignInScreen";
import CreateShortlyScreen from "./CreateShortlyScreen/CreateShortlyScreen";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <TokenAuth.Provider value={{ token, setToken }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cadastro" element={<SignUpScreen />} />
            <Route path="/login" element={<SignInScreen />} />
            <Route path="/home" element={<CreateShortlyScreen />} />
          </Routes>
        </BrowserRouter>
      </TokenAuth.Provider>
    </>
  );
}
