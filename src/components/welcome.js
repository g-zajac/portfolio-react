import React from "react";
import Plx from "react-plx";

const parallaxData = [
  {
    start: 0,
    end: 800,
    easing: "ease",
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 0.6,
        property: "opacity"
      }
    ]
  }
];

export function Welcome() {
  return (
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
      <div id="welcome">
        <p id="intro_text">
          Hi, I am Grzegorz Zajac, Berlin based passionate engineer,
          multidiscipline theatre technician, maker and problem solver. I
          provide innovative embedded electronic solutions for theatre magic.
        </p>
        <div id="overlay_welcome" />
        <img
          id="background_image"
          src="images/esp8266-cover-1920x1080.jpg"
          alt=""
        />
      </div>
    </Plx>
  );
}

// <div id="overlay_welcome" />

// <img
//   id="background_image"
//   src="images/esp8266-cover-1920x1080.jpg"
//   alt=""
// />
// </div>
