import React from "react";

export function Hoyh() {
  return (
        <div className="project" id="hoyh">
      <div className="project_header">
        <h2>The Hairs of Your Head Are Numbered</h2>
        <h4>Sensors for monitoring audience's pulse and GSR. Theatre performance.</h4>
        <p>doublelucky productions</p>
        <p>Chris Kondek & Christiane Kühl</p>
        <p>Berlin HAU2 Hebbel am Ufer, 2018</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <h3>STORY</h3>
          <p>
            The human body is increasingly presented to us as a body of data. Movements, emotions and conditions are measured and quantified. While more and more people are into “life tracking”, “biohacking” and the chip under the skin, the body is becoming more and more like a foreign body. The complex technologies behind all that are reprogrammed here for the theatre.
          </p>
        </div>

        <div className="project_challenge">
          <h3>CHALLANGE</h3>
          <p>
            To build wearable wristband pulse monitor for performers and audience members, which sends wirelessly data to server for visualisation.
          </p>
        </div>

        <div className="project_solution">
          <h3>SOLUTION</h3>
          <p>
           I build the pulse monitor based on optical pulse sensor and wifi mikrochip ESP8266. The optical sensor is placed on a finger. The light reflected will change based on the volume of blood inside the capillary blood vessels. Variation in light transmission and reflection can be obtained as a pulse from the ouptput of pulse sensor. The ESP sends sampled sensor value to server which calculates HR and visualise it.
          </p>
        </div>
      </div>
    </div>
  );
}
