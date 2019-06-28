import React from "react";
import axios from "axios";
import Gallery from "react-grid-gallery";
import { Link } from "react-router-dom";
import VisitsChart from "../components/smtVisitsChart";
export class Smt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("/get-smt-visits")
      .then(response => {
        // let data = (this.data = response.data);
        this.setState(response);
        console.log("received data: ", this.state.data.count);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="project" id="smt">
        <Link to="/#portfolio">
          <i className="far fa-times-circle fa-2x" />
        </Link>
        <div className="project_header">
          <h2>Shiver Me Timbers</h2>
          <h4>Multimedia Server for a stormy sea installation.</h4>
          <p>Artistic Director, Choreographer: Rachel Jonhson</p>
          <p>Experiential</p>
          <p>Scenography & Lighitng Design: Shizuka Hariu</p>
          <p>The Word, South Shields, 2017</p>
        </div>
        <div className="project_content">
          <div className="project_solution_wrapper">
            <div className="smt_column_wrapper">
              <div className="project_story">
                <h3>STORY</h3>
                <p>
                  An interactive exhibition installation where sound and lights
                  sequence is triggered by audience entering the installation
                  space – The Pod
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
                  I designed, programmed and built a mini multimedia server
                  based on Raspberry Pi 3 board with UPS board and Enttec
                  USB2DMX modules. The server were controlling lights, sound and
                  sensor. I used minimal headless version of Debian operating
                  system with QLC+ and Node-Red applications installed. QLC+ run
                  lights sequence and playback sound track. The Node-Red
                  controlls sensor, triggering lights cues, sound cues,
                  schedule, system monitoring, diagnostic MQTT messaging etc.
                  QLC+ was linked with Node-red over OSC. The server run the
                  exhibition for over half a year faultless. The MQTT messagaes
                  were subscribed and stored in a cloud database. Counter and
                  visit chart are generated with grafana from stored data.
                </p>
              </div>
            </div>
            <img
              src="../images/smt/block_sch.png"
              alt="block schematic"
              className="smt_block_sch"
            />
          </div>
          <div className="smt_chart">
            <VisitsChart />
            <div className="smt_total_visits">
              Total number of visits:
              <p style={{ fontWeight: "bold" }}>
                {this.state.data && this.state.data.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <img
//   className="project_background_image"
//   src="../images/smt_cover.jpg"
//   alt=""
// />
