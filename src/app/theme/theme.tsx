import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./settings";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Theme({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

export default Theme;
