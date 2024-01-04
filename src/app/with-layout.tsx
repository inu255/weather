import { useStore } from "effector-react";
import { ReactNode } from "react";
import { Header } from "src/widgets/header";
import { $store, Sidebar, triggerSidebar } from "src/widgets/sidebar";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  const showSidebar = useStore($store);

  return (
    <Wrapper
      displayContent={window.innerWidth <= 420 && showSidebar === true ? "none" : "block"}
      className={showSidebar === true ? "sidebar-shown" : "sidebar-hidden"}
    >
      <Sidebar />
      <Header sidebarShown={showSidebar} triggerSidebar={triggerSidebar} />
      <Main className={showSidebar ? "hide" : "show"}>{children}</Main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div<{ displayContent: "none" | "block" }>`
  /* display: displayContent; */

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

  &.show {
    @media screen and (max-width: 420px) {
      display: inherit;
    }
  }

  &.hide {
    @media screen and (max-width: 420px) {
      display: none;
    }
  }
`;
