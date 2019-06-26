import React from "react";
import StackGrid, { transitions } from "react-stack-grid";

import PortfolioThumbnail from "./thumbnails";
const { scaleDown } = transitions;

export class Test extends React.Component {
  render() {
    return (
      <div className="portfolio_grid_wrapper">
        <StackGrid
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          columnWidth={200}
        >
          <div key="key1">
            <PortfolioThumbnail data={this.props.portfolioData[0]} />
          </div>
          <div key="key2">
            <PortfolioThumbnail data={this.props.portfolioData[1]} />
          </div>
          <div key="key3">
            <PortfolioThumbnail data={this.props.portfolioData[2]} />
          </div>
          <div key="key4">
            <PortfolioThumbnail data={this.props.portfolioData[3]} />
          </div>
          <div key="key5">
            <PortfolioThumbnail data={this.props.portfolioData[4]} />
          </div>
          <div key="key6">
            <PortfolioThumbnail data={this.props.portfolioData[5]} />
          </div>
          <div key="key7">
            <PortfolioThumbnail data={this.props.portfolioData[6]} />
          </div>
          <div key="key8">
            <PortfolioThumbnail data={this.props.portfolioData[7]} />
          </div>
        </StackGrid>
      </div>
    );
  }
}

// <div id="portfolio">
//   <div className="portfolio_grid_wrapper">
//     {this.props.portfolioData &&
//       this.props.portfolioData.map(project => (
//         <div className="box" key={project.id}>
//           <PortfolioThumbnail data={project} />
//         </div>
//       ))}
//   </div>
// </div>
