import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData";
import { welcomePlxData, contactPlxData } from "./data/parallaxData.js";
import Plx from "react-plx";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { Siegfried } from "./projects/siegfried";
import { Twelve } from "./projects/twelve";
import { Trapped } from "./projects/trapped";
import { Smt } from "./projects/smt";
import { Strangers } from "./projects/strangers";
import { Hoyh } from "./projects/hoyh";
import { Minirig } from "./projects/minirig";
import Iot from "./projects/iot";
import { Test } from "./components/test";

export default class App extends React.Component {
  render() {
    console.log("portfoli data: ", this.portfolioData);
    return (
      <div className="container">
        <Plx className="MyAwesomeParallax" parallaxData={welcomePlxData}>
          <Welcome />
        </Plx>
        <BrowserRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route
              exact
              path="/"
              render={() => (
                <Portfolio portfolioData={portfolioData.projects} />
              )}
            />
            <Route exact path="/siegfried" render={() => <Siegfried />} />
            <Route exact path="/twelve" render={() => <Twelve />} />
            <Route exact path="/trapped" render={() => <Trapped />} />
            <Route exact path="/smt" render={() => <Smt />} />
            <Route exact path="/strangers" render={() => <Strangers />} />
            <Route exact path="/hoyh" render={() => <Hoyh />} />
            <Route exact path="/minirig" render={() => <Minirig />} />
            <Route exact path="/iot" render={() => <Iot />} />
            <Route
              exact
              path="/test"
              render={() => <Test portfolioData={portfolioData.projects} />}
            />
          </AnimatedSwitch>
        </BrowserRouter>
        <Plx className="MyAwesomeParallax" parallaxData={contactPlxData}>
          <Contact />
        </Plx>
      </div>
    );
  }
}
//TODO fix foote paralax
