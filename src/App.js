import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData.js";
import { welcomePlxData, contactPlxData } from "./data/parallaxData.js";
import Plx from "react-plx";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Siegfried } from "./projects/siegfried";
import { Twelve } from "./projects/twelve";
import { Trapped } from "./projects/trapped";
import { Smt } from "./projects/smt";
import { Strangers } from "./projects/strangers";
import { Hoyh } from "./projects/hoyh";

export default class App extends React.Component {
  render() {
    console.log("portfoli data: ", this.portfolioData);
    return (
      <div className="container">
        <Plx className="MyAwesomeParallax" parallaxData={welcomePlxData}>
          <Welcome />
        </Plx>
        <BrowserRouter>
          <Portfolio portfolioData={portfolioData.projects} />
        </BrowserRouter>
        <Plx className="MyAwesomeParallax" parallaxData={contactPlxData}>
          <Contact />
        </Plx>
      </div>
    );
  }
}
