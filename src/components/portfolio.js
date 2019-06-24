import React from "react";
import PortfolioThumbnail from "./thumbnails";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Siegfried } from "../projects/siegfried";
import { Twelve } from "../projects/twelve";
import { Trapped } from "../projects/trapped";
import { Smt } from "../projects/smt";
import { Strangers } from "../projects/strangers";
import { Hoyh } from "../projects/hoyh";

export class Portfolio extends React.Component {
  render() {
    console.log("portfoli data: ", this.props.portfolioData);
    return (
      <div id="portfolio">
        <BrowserRouter>
          <div className="portfolio_grid_wrapper">
            {this.props.portfolioData &&
              this.props.portfolioData.map(project => (
                <div className="box" key={project.id}>
                  <Link to={`/${project.component}`}>
                    <PortfolioThumbnail data={project} />
                  </Link>
                </div>
              ))}
          </div>
          <Route exact path="/:id" component={Comp} />
        </BrowserRouter>
      </div>
    );
  }
}

function Comp({ match }) {
  console.log("Match: ", match);
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}
