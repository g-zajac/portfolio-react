import React from "react";

export function Contact() {
  return (
    <div id="contact">
      <div id="contact_wrapper">
        <div className="column one">
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
            engineer to provide digital innovation and create theatre magic.
            When he isn’t glued to a computer screen or soldering iron, he
            spends time as a dad and a boater.
          </p>
        </div>

        <div className="column two">
          <div id="about_text_contact">
            Interested in working together?
            <br /> Questions about projects?
            <br />
            Please feel free to email or call me.
            <br />
            <p>
              <i className="fas fa-phone" /> +49 152 55652280
            </p>
            <p>
              <i className="fas fa-at" /> grzegorz.zajac@me.com
            </p>
            <div id="social_links">
              <i className="fab fa-github fa-2x" />
              <i className="fab fa-linkedin fa-2x" />
              <i className="fab fa-whatsapp-square fa-2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact_images">
        <img
          src="../images/about/abtt1.png"
          alt="siegfried pump controller inside"
          className="cert_img"
        />
        <img
          src="../images/about/abtt2.png"
          alt="siegfried pump controller outside"
          className="cert_img"
        />
        <img
          src="../images/about/dante.png"
          alt="siegfried pump controller outside"
          className="cert_img"
        />
        <img
          src="../images/about/mtcna.png"
          alt="siegfried pump controller outside"
          className="cert_img"
        />
        <img
          src="../images/about/mtcre.png"
          alt="siegfried pump controller outside"
          className="cert_img"
        />
      </div>
    </div>
  );
}
