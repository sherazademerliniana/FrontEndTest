import styled from "styled-components";
import { Button } from "./index.jsx";

export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  border: 0.3rem solid ${(props) => props.backgroundcolor};
  border-radius: 0.2rem;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  &:hover {
    background-color: ${(props) => props.hover};
    border: 0.3rem solid ${(props) => props.hover};
    color: ${(props) => props.hovercolor};
  }
`;
