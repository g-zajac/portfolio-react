import React from "react";
import { Parallax } from "react-parallax";

export function Welcome() {
  return (
    <Parallax bgImage={"images/esp8266-cover-1920x1080.jpg"} strength={500}>
      <div id="welcome">
        <p id="intro_text">
          Hi, I am Grzegorz Zajac, Berlin based passionate engineer,
          multidiscipline theatre technician, maker and problem solver. I
          provide innovative embedded electronic solutions for theatre magic.
        </p>
      </div>
    </Parallax>
  );
}

// <div id="overlay_welcome" />

// <img
//   id="background_image"
//   src="images/esp8266-cover-1920x1080.jpg"
//   alt=""
// />
// </div>
