import React from "react";

export default class PortfolioThumbnail extends React.Component {
  render() {
    let projectData = this.props.data;

    return (
      <div className="portfolio_thumbnail">
        <div className="overlay_box">
          <div className="portfolio_thumbnail_text">
            <h3>{projectData.title}</h3>
            <p>{projectData.short_description}</p>
          </div>
        </div>
        <img
          src={projectData.minature_image_url}
          alt={projectData.minature_image_tag}
          className="portfolio_thumbnail_image"
        />
      </div>
    );
  }
}
