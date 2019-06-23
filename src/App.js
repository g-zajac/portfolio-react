import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData.js";
import { ParallaxProvider } from "react-scroll-parallax";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ParallaxProvider>
          <Welcome />
        </ParallaxProvider>
        <Portfolio portfolioData={portfolioData.projects} />
        <Contact />
      </div>
    );
  }
}
