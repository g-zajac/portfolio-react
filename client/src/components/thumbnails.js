import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class PortfolioThumbnail extends React.Component {
  render() {
    let projectData = this.props.data;
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="portfolio_thumbnail">
          <Link to={projectData.link}>
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
          </Link>
        </div>
      </ScrollAnimation>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(PortfolioThumbnail);
