import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function SearchInput({ ...props }: Props) {
  return (
    <Wrapper>
      <div className="container">
        <BiSearch />
        <input {...props} />
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
      padding-left: 16px;
      padding-top: 10px;
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
    /* width: 100%; */
    transition: border, color 0.2s ease-in-out;
    background: transparent;

    /* :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      box-shadow: 0 0 0px 1000px #222b36 inset;

      :focus {
        box-shadow: 0 0 0px 1000px #266798 inset;
      }
    } */

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    /* :hover {
      border: 1px solid #ccc;
    } */

    :focus {
      outline: 10;
    }

    /* :focus,
    :hover {
      outline: 0;
      border: 3px solid ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.primary};
    }

    :not(:hover) {
      color: ${({ theme }) => theme.colors.text};
    } */
  }
`;
