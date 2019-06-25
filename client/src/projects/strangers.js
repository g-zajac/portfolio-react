import React from "react";

export function Strangers() {
  return (
    <div className="project" id="strangers">
      <div className="project_header">
        <h2>Strangers & Others</h2>
        <h4>
          Midi Interface for controlling Qlab. Immersive & participatory piece.
        </h4>
        <p>AChoreography and direction: Hanna Gillgren and Heidi Rustgaard</p>
        <p>Dramaturg: Martin Hargreaves</p>
        <p>Music composition: Sylvia Hallett</p>
        <p>Lighting design: Andy Hammond</p>
        <p>London 2017</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <h3>STORY</h3>
          <p>
            An interactive performance piece for a standing audience who is
            invited to put on Silent Disco Headphones to receive live
            instructions from two choreographers. The pair lead them through a
            series of choreographed meetings.
          </p>
        </div>

        <div className="project_challenge">
          <h3>CHALLANGE</h3>
          <p>
            In the performance there are three wireless audio transmitters which
            feed three separate wireless headphones groups. Two choreographers
            talk to audience headphones thru microphones. They change, combine
            groups dynamically during the performance. To isolate their voices
            they have to seat apart but at the same time they have to be able to
            independently control and route their microphones. There is no sound
            desk, two microphones, playback, mixing and routing is done in an
            audio interface with QLAB software.
          </p>
        </div>

        <div className="project_solution">
          <h3>SOLUTION</h3>
          <p>
            One choreographer uses laptop keyboard, the other needs an
            interface. I designed, programmed and built the interface for remote
            microphone routing. Each of three interface buttons route – fade in
            or fade out – microphone to a single channel. They can be combined.
            Pushed button sends midi command to trigger the microphone fade Qlab
            cue followed by another midi cue which turn the button led on or off
            to confirm the triggered cue was fired. Each fade cue has also a
            shortcut hotkey assigned and can be triggered from laptop keyboard
            independently. The Interface is based on Teensy LC which acts as a
            midi host. When plugged into a computer it is recognized as a midi
            device with a custom programmed name. Push buttons are non-latching
            and every press sends midi command. Toggle function is programmed in
            the interface. Additional little status led show that interface is
            connected and working.
          </p>
        </div>
      </div>
    </div>
  );
}
