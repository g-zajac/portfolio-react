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

// <Link to={`/${project.component}`} />;
// <Route exact path="/:id" component={Comp} />;
//
// function Comp({ match }) {
//   console.log("Match: ", match);
//   return (
//     <div>
//       <h3>ID: {match.params.id}</h3>
//     </div>
//   );
// }
