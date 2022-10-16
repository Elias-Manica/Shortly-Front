import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../assets/css/GlobalStyle";

import HomeScreen from "./HomeScreen/HomeScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cadastro" element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
