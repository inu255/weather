import React from "react";
import styled from "styled-components";
import { Header } from "~widgets/header";
import { Sidebar } from "~widgets/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 230px minmax(320px, 1200px);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    ". sidebar header ."
    ". sidebar main .";

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
`;
