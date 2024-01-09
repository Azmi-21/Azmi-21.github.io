import React from "react";
import Header from "./header";
import Home from "./home";

function App() {
  return (
    <div>
      <Header />
      <div id="galaxy-1">
        <Home />
      </div>
      <div id="galaxy-2"></div>
    </div>
  );
}

export default App;
