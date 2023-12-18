import { CSSProperties } from "react";
import styled from "styled-components";

type Props = { children: JSX.Element | string; style?: CSSProperties };

export function Heading({ children, style }: Props) {
  return <StyledHeading style={style}>{children}</StyledHeading>;
}

const StyledHeading = styled.h3`
  margin-top: 0;
  font-weight: 600;
  font-size: 20px;
`;
