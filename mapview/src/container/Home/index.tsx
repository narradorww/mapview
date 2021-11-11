import React from "react";
import Map from "../../components/Map";
import { Container, Logo, Header, Footer, ImgFooter } from "./style";
import logo from "../../assets/img/logo.png";

export default function Home() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="logo NetLume" />
      </Header>
      <Container>
        <Map />
      </Container>
      <Footer>
        <ImgFooter src={logo} alt="logo" />
      </Footer>
    </>
  );
}
