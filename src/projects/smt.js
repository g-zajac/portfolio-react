import React from "react";

export function Smt() {
  return (
    <div className="project smt">
      <div className="project_header">
        <h3>Shiver Me Timbers</h3>
        <h4>Multimedia Server for a stormy sea installation.</h4>
        <p>Artistic Director, Choreographer: Rachel Jonhson Experiential</p>
        <p>Scenography & Lighitng Design: Shizuka Hariu</p>
        <p>The Word, South Shields, 2017</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <h3>STORY</h3>
          <p>
            An interactive exhibition installation where sound and lights
            sequence is triggered by audience entering the installation space –
            The Pod
          </p>
        </div>
        <div className="project_challenge">
          <h3>CHALLANGE</h3>
          <p>
            To design and build reliable and stable device which will run
            lights, sound, motion sensor.
          </p>
        </div>
        <div className="project_solution">
          <h3>SOLUTION</h3>
          <p>
            I designed, programmed and built a mini multimedia server based on
            Raspberry Pi 3 board with UPS board and Enttec USB2DMX modules. The
            server were controlling lights, sound and sensor.
          </p>
        </div>
      </div>
      <img
        className="project_background_image"
        src="../images/smt_cover.jpg"
        alt=""
      />
    </div>
  );
}
