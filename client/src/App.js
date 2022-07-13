import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

export default function App() {
  return (
   
      <Container maxidth="lg">
      
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/auth" exact element={<Auth />} />
          </Routes>
        </BrowserRouter>
       </Container>
   
  );
}
