import React from "react";
import Gallery from "react-grid-gallery";
import { Link } from "react-router-dom";
export class Trapped extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
      selectAllChecked: false
    };
  }

  onSelectImage(index, image) {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    this.setState({
      images: images
    });
  }

  render() {
    console.log("props data in trapped: ", this.props);
    return (
      <React.Fragment>
        <div className="project" id="trapped">
          <Link to="/#portfolio">
            <i className="far fa-times-circle fa-2x" />
          </Link>
          <div className="project_header_wrapper">
            <div className="trapped_project_header">
              <h2>Trapped</h2>
              <h4>
                Head-torches controlled by lighting desk for dance/theatre work.
              </h4>
              <p>Artistic Director: Rachel Jonhson</p>
              <p>Experiential</p>
              <p>Lighting: Michael Manion</p>
              <p>London, 2016</p>
            </div>

            <div className="trapped_images">
              <img
                src="../images/trapped/trapped-1.jpg"
                alt="news poster"
                className="trapped_img"
              />
            </div>
          </div>

          <div className="project_content">
            <div className="project_story">
              <h3>STORY</h3>
              <p>
                Atmospheric production based and inspired by the collapse of the
                San Jose Mine, Chile in 2010. The performance is shown in
                confined underground spaces like mine, tunnels or a colliery.
              </p>
            </div>

            <div className="project_challenge">
              <h3>CHALLANGE</h3>
              <p>
                Limited audience members wears helmets with head torches. To
                enhance lighting production and audiences darkness experience
                the head torches needed to be remotely controlled by a lighting
                desk.
              </p>
            </div>

            <div className="project_solution">
              <h3>SOLUTION</h3>
              <div className="project_solution_split">
                <p id="project_solution_trapped_text">
                  I modified off-the-shelf head-torches. I added a wifi module
                  ESP8266 ESP-12 to each of 40 head-torches. The module connects
                  to WiFi and listens for Art-Net. Received value switch torch’s
                  LED on or off, so that a lighting desk or software can
                  controll all of them. The wifi chip was assembled on torch LED
                  bottom layer PCB. Power supply, 3V3 DC-DC converter is mounted
                  on side so it can fit inside the torch. Each of the torches
                  also sends a OSC diagnostic message like: wifi channel, signal
                  strength, led status, battery level, etc for monitoring
                  purpose i.e: with TouchOSC app.
                </p>

                <div className="images_gallery_trapped">
                  <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    showLightboxThumbnails={true}
                    rowHeight={84}
                  />
                </div>
              </div>
            </div>

            <p>
              To cover long tunnels and underground extend spaces I used
              multiple PoE WiFi access points, mainly UniFi AP AC Long Range.
              They share the same SSID on non overlapping radio channels 1,6,11.
              The ESP8266 chip does not support switching between multiple
              SSIDs, like mobile phones or laptops. Monitoring and switching
              procedure was implemented in the code.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Trapped.defaultProps = {
  images: [
    {
      src: "../images/trapped/trapped01.jpg",
      thumbnail: "../images/trapped/trapped01t.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      // tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption:
        "The original head-torch taken apart. The LED board is used as a base for additional components."
    },
    {
      src: "../images/trapped/trapped02.jpg",
      thumbnail: "../images/trapped/trapped02t.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      // tags: [
      //   { value: "Architecture", title: "Architecture | Outdoors" },
      //   { value: "Industrial", title: "Industrial" }
      // ],
      caption:
        "ESP8266-12F module minimal configuration: smd resistor to pull down gpio15 down and pull CHPD pin up."
    },
    {
      src: "../images/trapped/trapped03.jpg",
      thumbnail: "../images/trapped/trapped03.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      // tags: [
      //   { value: "People", title: "People" },
      //   { value: "Architecture", title: "Architecture | Outdoors" },
      //   { value: "Industrial", title: "Industrial" }
      // ],
      caption:
        "Preparing LED PCB board for the ESP chip, I filed all LED pins flat and isolated them with kapton tape"
    },
    {
      src: "../images/trapped/trapped04.jpg",
      thumbnail: "../images/trapped/trapped04.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      caption:
        "Pololu DC-DC 3V3 converter (on side), ESP on top. FET transistor connected directly to ESP PWM output and LED board."
    },
    {
      src: "../images/trapped/trapped05.jpg",
      thumbnail: "../images/trapped/trapped05.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      caption:
        "PS and Wifi modules mounted together and wired, ready for assembling."
    },
    {
      src: "../images/trapped/trapped06.jpg",
      thumbnail: "../images/trapped/trapped06.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      // tags: [
      //   { value: "People", title: "People" },
      //   { value: "Industrial", title: "Industrial" }
      // ],
      caption: "Modified assembled torch, wifi ArtNet enabled."
    },
    {
      src: "../images/trapped/trapped07.jpg",
      thumbnail: "../images/trapped/trapped07.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      caption: "All 40 modified torches."
    },
    {
      src: "../images/trapped/trapped08.jpg",
      thumbnail: "../images/trapped/trapped08.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 84,
      // tags: [{ value: "Nature", title: "Nature | Flowers" }],
      caption: "Testing station, iPad with TouchOSC app and monitoring patch."
    }
  ]
};

// <img
//   id="trapped_background_image"
//   src="images/background/trapped.jpg"
//   alt="background image"
// />
