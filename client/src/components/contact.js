import React from "react";

export function Contact() {
  return (
    <div id="contact">
      <div className="column">
        <img
          src="../images/about/portrait.jpg"
          alt=" Grzegorz Zajac"
          id="about_portrait"
        />
        <p id="about_text_about_me">
          Grzegorz is independent electronic engineer based in Berlin. He is
          passionate and experienced in technology and theatre. Grzegorz
          received MSc in 2003 in Electronics/Electro-acoustics from Wroclaw
          University of Technology, Poland. After the sixteen-year theatre
          career, as a sound engineer in Opera (Wroclaw, PL) and technician in
          Trinity Laban (London, UK), Grzegorz began to work as an independent
          engineer to provide digital innovation and create theatre magic. When
          he isn’t glued to a computer screen or soldering iron, he spends time
          as a dad and a boater.
        </p>
      </div>
      <div className="column" />
      <div className="column">
        <p id="about_text_contact">
          Interested in working together?
          <br /> Questions about projects?
          <br />
          Please feel free to email or call me.
          <br />
          +49 152 55652280
          <br />
        </p>
      </div>
    </div>
  );
}
//TODO add icons to contact
