import React from "react";
import StackGrid, { transitions } from "react-stack-grid";

import PortfolioThumbnail from "./thumbnails";
const { scaleDown } = transitions;

export class Test extends React.Component {
  render() {
    return (
      <div id="portfolio_container">
        <div className="portfolio_grid_wrapper">
          <StackGrid
            monitorImagesLoaded={true}
            horizontal={true}
            gutterWidth={10}
            gutterHeight={10}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            columnWidth={200}
          >
            <div key="key1">
              <img
                src={this.props.portfolioData[0].minature_image_url}
                alt={this.props.portfolioData[0].minature_image_tag}
              />
            </div>
            <div key="key2">
              <img
                src={this.props.portfolioData[1].minature_image_url}
                alt={this.props.portfolioData[1].minature_image_tag}
              />
            </div>
            <div key="key3">
              <img
                src={this.props.portfolioData[2].minature_image_url}
                alt={this.props.portfolioData[2].minature_image_tag}
              />
            </div>
            <div key="key4">
              <img
                src={this.props.portfolioData[3].minature_image_url}
                alt={this.props.portfolioData[3].minature_image_tag}
              />
            </div>
            <div key="key5">
              <img
                src={this.props.portfolioData[4].minature_image_url}
                alt={this.props.portfolioData[4].minature_image_tag}
              />
            </div>
            <div key="key6">
              <img
                src={this.props.portfolioData[5].minature_image_url}
                alt={this.props.portfolioData[5].minature_image_tag}
              />
            </div>
            <div key="key7">
              <img
                src={this.props.portfolioData[6].minature_image_url}
                alt={this.props.portfolioData[6].minature_image_tag}
              />
            </div>
            <div key="key8">
              <img
                src={this.props.portfolioData[7].minature_image_url}
                alt={this.props.portfolioData[7].minature_image_tag}
              />
            </div>
          </StackGrid>
        </div>
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
