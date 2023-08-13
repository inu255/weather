import styled from "styled-components";

type Props = { children: JSX.Element | string };

export function Heading({ children }: Props) {
  return <StyledHeading>{children}</StyledHeading>;
}

const StyledHeading = styled.h3`
  margin-top: 0;
  font-weight: 600;
  font-size: 20px;
`;
