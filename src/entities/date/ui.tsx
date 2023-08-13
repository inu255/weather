import styled from "styled-components";
import { currentDate } from "./model";

export function Date() {
  return <DateWrapper>{currentDate}</DateWrapper>;
}

const DateWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.text};
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6px 14px;
  font-size: 14px;
  margin: 0 auto;
`;
