import styled, { css } from "styled-components";
import { BaseTypography } from "../components/BaseTypography";

export const Title = styled(BaseTypography)`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  ${(props) => {
    switch (props.titleSize) {
      case "title1":
        return css`
          font-size: 1.125rem;
        `;
      case "title2":
        return css`
          font-size: 1rem;
        `;
      case "title3":
        return css`
          font-size: 0.875rem;
        `;
      case "headline":
        return css`
          font-size: 0.75rem;
        `;
      default:
        return false;
    }
  }}
`;
