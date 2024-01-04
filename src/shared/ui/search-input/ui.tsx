import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import styled from "styled-components";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  onClear?: () => void;
};

export const SearchInput = ({ onClear, ...props }: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <BiSearch className="search-icon" />
        <input
          {...props}
          name="search"
          className={props.value !== undefined && props.value !== "" ? "typed" : "untyped"}
        />
        {props.value !== undefined && props.value !== "" ? (
          <CgCloseO className="close-icon" onClick={onClear} />
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 65px;
  position: relative;
  width: 100%;

  .container {
    svg.search-icon {
      position: absolute;
      font-size: 20px;
      padding: 13px 16px;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }

    svg.close-icon {
      position: absolute;
      font-size: 20px;
      right: 0;
      padding: 13px 16px;
      transition: all 0.3s ease-in-out;
      z-index: 1;
      cursor: pointer;
    }
  }

  input {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    border: 3px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    /* max-width: 135px; */
    /* transition: border, color 0.2s ease-in-out; */
    background: transparent;
    box-sizing: border-box;

    &.typed {
      padding: 12px 48px;
    }

    &.untyped {
      padding: 12px 0 12px 48px;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    :focus {
      outline: 10;
    }
  }
`;
