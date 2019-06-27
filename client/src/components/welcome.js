import React from "react";
import Zoom from "react-reveal/Zoom";

export function Welcome() {
  return (
    <div id="welcome">
      <Zoom>
        <div id="intro_text">
          /*
          <br />
          Hi, I am Grzegorz,
          <br /> Berlin based passionate engineer, multidiscipline theatre
          technician, maker and problem solver.
          <br />I provide innovative embedded electronic solutions for theatre
          magic
          <br />
          */
        </div>
      </Zoom>
      <div id="scroll_down">
        <a href="#portfolio">
          <i class="far fa-arrow-alt-circle-down fa-3x" />
        </a>
      </div>
      <div id="overlay_welcome" />
      <img id="background_image" src="images/esp.jpg" alt="" />
    </div>
  );
}

/*
<br />
Hi, I am Grzegorz,
<br /> Berlin based passionate engineer, multidiscipline theatre
technician,
<font color="red"> maker and problem solver</font>.<br />I provide
innovative embedded <font color="purple">electronic solutions </font>
for theatre magic
<br />
*/
