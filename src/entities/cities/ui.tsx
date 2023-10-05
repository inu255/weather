import { ChangeEvent, useState } from "react";
import { SearchInput } from "src/shared/ui/search-input";
import styled from "styled-components";

export function Cities() {
  const [search, setSearch] = useState<string>("");

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);
  }
  return (
    <Wrapper>
      <SearchInput value={search} onChange={handleSearch} placeholder="Type city name" />

      <StyledCities>
        {["Novosibirsk", "Samara", "Saint-Petersburg"].map((item, index) => (
          <City key={index}>{item}</City>
        ))}
      </StyledCities>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 22px;
  padding-top: 28px;
  @media screen and (max-width: 420px) {
    padding-top: 0;
  }
`;

const StyledCities = styled.div`
  display: flex;
  flex-direction: column;
`;

const City = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 10px;
  padding: 16px 15.5px;
`;
