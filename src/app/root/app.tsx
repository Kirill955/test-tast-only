import React from "react";
import { GlobalStyle } from "./style";

import { Theme } from "../theme";

import { HistoryDates } from "../../widgets";

function App() {
  return (
    <Theme>
      <React.Fragment>
        <GlobalStyle />

        <HistoryDates />
      </React.Fragment>
    </Theme>
  );
}

export default App;
