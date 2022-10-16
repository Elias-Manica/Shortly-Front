import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../assets/css/GlobalStyle";

import HomeScreen from "./HomeScreen/HomeScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
