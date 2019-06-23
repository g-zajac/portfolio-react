import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData.js";
import { welcomePlxData, contactPlxData } from "./data/parallaxData.js";
import Plx from "react-plx";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Plx className="MyAwesomeParallax" parallaxData={welcomePlxData}>
          <Welcome />
        </Plx>
        <Portfolio portfolioData={portfolioData.projects} />
        <Plx className="MyAwesomeParallax" parallaxData={contactPlxData}>
          <Contact />
        </Plx>
      </div>
    );
  }
}
