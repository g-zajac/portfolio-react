import React from "react";
import { Welcome } from "./components/welcome";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import portfolioData from "./data/portfolioData.js";

export default class App extends React.Component {
  render() {
    let projectData = portfolioData.projects;
    console.log("App portfolio data: ", projectData);
    return (
      <div className="container">
        <Welcome />
        <Portfolio portfolioData={projectData} />
        <Contact />
      </div>
    );
  }
}
