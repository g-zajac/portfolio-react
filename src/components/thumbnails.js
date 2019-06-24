import React from "react";
import { connect } from "react-redux";
import { showProject } from "../actions";

class PortfolioThumbnail extends React.Component {
  render() {
    let projectData = this.props.data;
    // console.log("projectData in Thumbnail: ", projectData);
    // console.log("props: ", this.props);
    return (
      <div className="portfolio_thumbnail">
        <div
          className="overlay_box"
          onClick={() => this.props.dispatch(showProject(projectData.id))}
        >
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

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(PortfolioThumbnail);
