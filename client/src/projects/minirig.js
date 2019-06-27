import React from "react";
import { Link } from "react-router-dom";
import Jsc3dViewer from "react-jsc3d";

export function Minirig() {
  return (
    <div className="project" id="minirig">
      <Link to="/#portfolio">
        <i className="far fa-times-circle fa-2x" />
      </Link>
      <div className="project_header">
        <h2>Theatre model with minature lighting rig controlled by DMX</h2>
        <h4>Designer: Michael Manion</h4>
        <p>Trinitylaban</p>
        <p>London, 2019</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <div className="project_solution_split">
            <div id="project_solution_minirig_text">
              <h3>STORY</h3>
              <p>
                Trinitylaban is a leading centre for the training of
                professional contemporary dance artists. The programme provides
                rich and challenging mix of taught content. The elective menu
                offers a range of practices and perspectives across technical,
                creative and performance disciplines, and different modes of
                learning. One of them is lighting design module. The minature
                theatre rig in 1:50 scale and works with any DMX lighting board
                or software. Students can explore and expriment their lighting
                ideas.
              </p>

              <div className="project_challenge">
                <h3>CHALLANGE</h3>
                <p>Design and build miniature lights controlled by DMX.</p>
              </div>

              <div className="project_solution">
                <h3>SOLUTION</h3>

                <p>
                  I used for top and side lights RGBW LED strips enclosured in
                  black aluminium profile with diffusing cover. Those LEDs cover
                  geral basic rig and can be controled with just a few DMX
                  chanels. For special fixtures I designed minature 3D printed
                  units.
                </p>
              </div>
            </div>
            <div className="stl_viewer">
              <Jsc3dViewer
                width={300}
                height={300}
                progressBar={true}
                modelColor={"brown"}
                sceneUrl={"../stl/par.stl"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
