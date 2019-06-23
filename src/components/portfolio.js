import React from "react";
import { PortfolioMinature } from "./porftolioMinature";
export class Portfolio extends React.Component {
  render() {
    let projectData = this.props.portfolioData;
    console.log("porftolio Data: ", projectData);
    return (
      <div id="portfolio">
        <div className="portfolio_grid_wrapper">
          <div className="box a">
            <PortfolioMinature data={projectData[0]} />
          </div>
          <div className="box b">B</div>
          <div className="box c">
            <PortfolioMinature data={projectData[1]} />
          </div>
          <div className="box d">D</div>
        </div>
      </div>
    );
  }
}
