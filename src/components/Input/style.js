import styled from "styled-components";
import { StyledInput } from ".";

export const Input = styled(StyledInput)`
  width: 90%;
  padding: 0.4rem;
  background-color: white;
  color: #000;
  font-style: "Inter", sans-serif;
  border: 0.1rem solid white;
  border-radius: 0.2rem;
  outline: ${(props) => props.outline};
  &:focus {
    outline: 0.1rem solid black;
  }

  &::placeholder {
    color: var(--grey-3);
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
  div {
    width: 93%;
    display: flex;
    align-items: flex-start;
  }
`;
