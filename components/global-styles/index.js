import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => {
    return css`
      * {
        box-sizing: border-box;
      }
      :root {
        --color-blue-100: ${theme.COLOR.BLUE["100"]};
      }
    `;
  }}
`;
