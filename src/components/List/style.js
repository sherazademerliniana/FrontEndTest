import styled from "styled-components";

export const ContainerUl = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.2rem;
  background-color: white;
  border-radius: 2px;
  padding: 8px;
  justify-content: space-around;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
