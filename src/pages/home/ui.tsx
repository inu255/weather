import { Weather } from "src/widgets/weather";
import styled from "styled-components";

export default function Home() {
  return (
    <PageWrapper>
      <Weather />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  /* padding: 0 48px; */
`;
