import React from "react";
import styled from "styled-components";
import { Header } from "src/widgets/header";
// import { Sidebar } from "src/widgets/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      {/* <Sidebar /> */}
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: auto 230px minmax(320px, 1200px) auto; */
  grid-template-columns: auto minmax(320px, 1200px) auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    /* ". sidebar header ."
    ". sidebar main . "; */
    ". header ."
    ". main . ";

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

const Main = styled.main`
  grid-area: main;
  /* @media screen and (max-width: 420px) {
    width: 100%;
  } */
`;
