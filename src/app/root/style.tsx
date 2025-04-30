import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $light?: boolean }>`
  body {
    color: ${({ $light, theme }) =>
      $light ? theme.light.colors.text : theme.dark.colors.text};
    background: ${({ $light, theme }) =>
      $light ? theme.light.colors.background : theme.dark.colors.background};
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
