import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData.js";
import { welcomePlxData, contactPlxData } from "./data/parallaxData.js";
import Plx from "react-plx";
import { BrowserRouter, Route } from "react-router-dom";

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
          <Route
            exact
            path="/"
            render={() => <Portfolio portfolioData={portfolioData.projects} />}
          />
          {portfolioData.projects.map(route => (
            <Route
              key={route.id}
              path={route.link}
              component={route.component}
            />
          ))}
          ;
        </BrowserRouter>
        <Twelve />
        <Plx className="MyAwesomeParallax" parallaxData={contactPlxData}>
          <Contact />
        </Plx>
      </div>
    );
  }
}

// <Route
//   exact
//   path={portfolioData.link}
//   render={() => {
//     portfolioData.componenet;
//   }}
// />
