import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizign: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button { 
        cursor: pointer;
    }

    body{
        background-color:#d3d3d3;
    }

`;

export const ContainerPages = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3rem;
  padding: 1.5rem 0;
  border-radius: 0.3rem;
  @media (min-width: 400px) {
    max-width: 370px;
  }
`;
