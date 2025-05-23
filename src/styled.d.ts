import { ITheme } from "./app";

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
