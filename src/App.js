import React from "react";
import "./App.less";

import GlobalStyles from "@/assets/styles/globalStyles.js";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutePages } from "./router";
function App() {
  return (
    <div className="App">
      <Router>
        <RoutePages />
        <GlobalStyles />
      </Router>
    </div>
  );
}

export default App;
