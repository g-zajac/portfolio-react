import React from "react";
import Zoom from "react-reveal/Zoom";

export function Welcome() {
  return (
    <div id="welcome">
      <Zoom cascade>
        <p id="intro_text">
          Hi, I am Grzegorz Zajac, Berlin based passionate engineer,
          multidiscipline theatre technician, maker and problem solver. I
          provide innovative embedded electronic solutions for theatre magic.
        </p>
      </Zoom>
      <div id="overlay_welcome" />
      <img
        id="background_image"
        src="images/esp8266-cover-1920x1080.jpg"
        alt=""
      />
    </div>
  );
}
