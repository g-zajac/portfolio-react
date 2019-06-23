import React from "react";
import PortfolioThumbnail from "./thumbnails";
export class Portfolio extends React.Component {
  render() {
    let projectData = this.props.portfolioData;

    return (
      <div id="portfolio">
        <div className="portfolio_grid_wrapper">
          <div className="box a">
            <PortfolioThumbnail data={projectData[0]} />
          </div>
          <div className="box b">
            <PortfolioThumbnail data={projectData[1]} />
          </div>
          <div className="box c">
            <PortfolioThumbnail data={projectData[2]} />
          </div>
          <div className="box d">
            <PortfolioThumbnail data={projectData[3]} />
          </div>
          <div className="box e">
            <PortfolioThumbnail data={projectData[4]} />
          </div>
          <div className="box f">
            <PortfolioThumbnail data={projectData[5]} />
          </div>
        </div>
      </div>
    );
  }
}
