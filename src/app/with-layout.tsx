import { useStore } from "effector-react";
import React from "react";
import { Header } from "src/widgets/header";
import { $store, Sidebar, triggerSidebar } from "src/widgets/sidebar";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const showSidebar = useStore($store);

  return (
    <Wrapper className={showSidebar === true ? "sidebar-shown" : "sidebar-hidden"}>
      <Sidebar />
      <Header triggerSidebar={triggerSidebar} />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  &.sidebar-shown {
    display: grid;
    grid-template-columns: auto 230px minmax(320px, 1200px) auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      ". sidebar header ."
      ". sidebar main .";


    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        "sidebar"
        "sidebar";
    }
  }

  &.sidebar-hidden {
    display: grid;
    grid-template-columns: auto minmax(320px, 1200px) auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      ". header ."
      ". main .";

    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        "header"
        "main";
    }
  }
`;

const Main = styled.main`
  grid-area: main;
  z-index: 998;
  /* @media screen and (max-width: 420px) {
    width: 100%;
  } */
`;
