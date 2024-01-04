import { Weather } from "src/widgets/weather";
import styled from "styled-components";

const Home = () => {
  return (
    <PageWrapper>
      <Weather />
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  /* padding: 0 48px; */
`;
