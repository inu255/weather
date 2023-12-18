import styled from "styled-components";

type Props = { primaryText: string; secondaryText: string };

export const ListItem = ({ primaryText, secondaryText }: Props) => {
  return (
    <Wrapper>
      <PrimaryText>{primaryText}</PrimaryText>
      <SecondaryText>{secondaryText}</SecondaryText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 11px 0; */
  width: 100%;

  & > * {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    cursor: pointer;
  }
`;

const PrimaryText = styled.div`
  font-size: 16px;
`;

const SecondaryText = styled.div`
  font-weight: 300;
  font-size: 12px;
  @media screen and (min-width: 420px) {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 142px;
    white-space: nowrap;
  }
`;
