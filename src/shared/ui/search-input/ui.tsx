import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function SearchInput({ ...props }: Props) {
  return (
    <Wrapper>
      <div className="container">
        <BiSearch />
        <input {...props} name='search'/>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 65px;
  position: relative;
  width: 100%;

  .container {
    svg {
      position: absolute;
      font-size: 20px;
      padding: 13px 16px;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }
  }

  input {
    color: ${({ theme }) => theme.colors.text};
    padding: 12px 0 12px 48px;
    font-size: 14px;
    border: 3px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    /* max-width: 135px; */
    /* transition: border, color 0.2s ease-in-out; */
    background: transparent;
    box-sizing: border-box;

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    :focus {
      outline: 10;
    }
  }
`;
