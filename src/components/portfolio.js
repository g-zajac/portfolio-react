import React from "react";
import PortfolioThumbnail from "./thumbnails";

export class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <div className="portfolio_grid_wrapper">
          {this.props.portfolioData &&
            this.props.portfolioData.map(project => (
              <div className="box" key={project.id}>
                <PortfolioThumbnail data={project} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
