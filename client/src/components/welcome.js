import React from "react";
import Zoom from "react-reveal/Zoom";

export function Welcome() {
  return (
    <div id="welcome">
      <Zoom cascade>
        <p id="intro_text">
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
        </p>
      </Zoom>
      <div id="overlay_welcome" />
      <img id="background_image" src="images/esp.jpg" alt="" />
    </div>
  );
}
