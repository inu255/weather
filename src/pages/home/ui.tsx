import { Date } from "src/entities/date";
import { Weather } from "src/entities/weather";
import styled from "styled-components";

export default function Home() {
  return (
    <PageWrapper>
      <Date />
      <Weather />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  /* padding: 0 48px; */
`;
