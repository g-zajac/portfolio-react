import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="container">
      <Welcome />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
