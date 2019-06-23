import React from "react";

export class PortfolioMinature extends React.Component {
  render() {
    let projectData = this.props.data;
    console.log("porftolio minature Data: ", projectData);
    return (
      <div className="portfolio_minature">
        <div className="overlay_box">
          <div className="portfolio_minature_text">
            <h3>{projectData.title}</h3>
            <p>{projectData.short_description}</p>
          </div>
        </div>
        <img
          src={projectData.minature_image_url}
          alt={projectData.minature_image_tag}
          className="portfolio_minature_image"
        />
      </div>
    );
  }
}
