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
    let projectData = this.props.portfolioData;

    return (
      <div id="portfolio">
        <BrowserRouter>
          <div className="portfolio_grid_wrapper">
            <div className="box a">
              <Link to={projectData[0].component}>
                <PortfolioThumbnail data={projectData[0]} />
              </Link>
            </div>
            <div className="box b">
              <Link to={projectData[1].component}>
                <PortfolioThumbnail data={projectData[1]} />
              </Link>
            </div>
            <div className="box c">
              <Link to={projectData[2].component}>
                <PortfolioThumbnail data={projectData[2]} />
              </Link>
            </div>
            <div className="box d">
              <Link to={projectData[3].component}>
                <PortfolioThumbnail data={projectData[3]} />
              </Link>
            </div>
            <div className="box e">
              <Link to={projectData[4].component}>
                <PortfolioThumbnail data={projectData[4]} />
              </Link>
            </div>
            <div className="box f">
              <Link to={projectData[5].component}>
                <PortfolioThumbnail data={projectData[5]} />
              </Link>
            </div>
          </div>

          <Route exact path="/:id" component={Child} />

          <Route exact path="/siegfried" render={() => <Siegfried />} />
          <Route exact path="/twelve" render={() => <Twelve />} />
          <Route exact path="/trapped" render={() => <Trapped />} />
          <Route exact path="/smt" render={() => <Smt />} />
          <Route exact path="/strangers" render={() => <Strangers />} />
          <Route exact path="/hoyh" render={() => <Hoyh />} />
        </BrowserRouter>
      </div>
    );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Child({ match }) {
  return (
    <div>
      <h3>ID: {capitalizeFirstLetter(match.params.id)}</h3>
    </div>
  );
}
