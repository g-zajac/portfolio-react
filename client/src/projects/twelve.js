import React from "react";
import { Link } from "react-router-dom";

export function Twelve() {
  return (
    <div className="project" id="twelve">
      <Link to="/#portfolio">
        <i className="far fa-times-circle fa-2x" />
      </Link>
      <div className="project_header">
        <h2>Twelve</h2>
        <h4>
          Contemporary dance performance with with remotely controlled LEDs in
          costumes.
        </h4>
        <p>Direction: Ederson Rodrigues Xavier</p>
        <p>
          Choreography: Ederson Rodrigues Xavier and the Transitions Dance
          Company
        </p>
        <p>Costume: Suzie Holmes</p>
        <p>Lighting: Andrew Hammond</p>
        <p>Trinity Laban﻿, London, 2015</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <h3>STORY</h3>
          <p>
            Urgent physicality. A mysterious atmosphere. The piece develops
            bonds formed through dynamic and sensitive partnering, solitary
            moments, group passages and intricate physical puzzles. One simple
            movement phrase blossoms into a multifaceted, rhythmic journey.
          </p>
        </div>

        <div className="project_challenge">
          <h3>CHALLANGE</h3>
          <p>
            Dancers wear costumes with sewed LEDs in. They need to be remotly
            controled by a lighting desk. The module must be very small to fit
            in dancers costume, also needs to be sweat and crash resistant.
            Power must last 30mins minimum.
          </p>
        </div>

        <div className="project_solution">
          <h3>SOLUTION</h3>
          <p>
            I designed, programmed and build tiny modules based on EPS8266
            ESP-12 chip. The module connects to designated WiFi network and
            listens for his Art-Net address. Received value is converted to PWM.
            The ESP-12 PWM output drives the LEDs strip via MOSFET transistor.
            The ESP8266-12F module was glued upside-down, metal shield side to
            9V battery clip. A 3V3 DC-DC converter and other components were
            mounted on top of the ESP. All sealed with hot glue and closed up
            with heat shrinking tube.
          </p>
          <p>
            The biggest challenge was to provide suficient power for wifi module
            and particularly for 1m LEDs strip which was sawed into dancers
            costumes. I chose 9V standard battery, they are safer then LiPo and
            more practical for touring - flying with. 9V was enough to run 12V
            LEDs strip with sufficient brightness.
          </p>
        </div>
      </div>
    </div>
  );
}
