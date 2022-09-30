import React from "react";
import "./App.less";

// import '@/assets/styles/variables.less';
// import {} from '@/router'
import Layout from "@/views/Layout";
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
