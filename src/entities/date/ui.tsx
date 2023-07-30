import styled from "styled-components";

export function Date() {
  return <DateWrapper>Friday, 20 January</DateWrapper>;
}

const DateWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.text};
  width: fit-content;
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 14px;
  margin: 0 auto;
`;
