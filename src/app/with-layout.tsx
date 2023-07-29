import React from "react";
import styled from "styled-components";
import { Sidebar } from "~widgets/sidebar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />
      <div>{children}</div>
    </Wrapper>
  );
}
