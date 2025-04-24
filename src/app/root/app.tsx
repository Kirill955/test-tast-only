import React from "react";
import { GlobalStyle } from "./style";

import { Theme } from "../theme";

function App() {
  return (
    <Theme>
      <React.Fragment>
        <GlobalStyle />

        <h1>App</h1>
      </React.Fragment>
    </Theme>
  );
}

export default App;
