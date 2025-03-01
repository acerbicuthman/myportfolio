import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedin.jpeg";
import GmailIcon from '../../assets/gmail_logo.png'
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sm6ln8n", "template_ogdu2uj", form.current, {
        publicKey: "CXY2XioJ7PgDCehSp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          i have had the oppurtunity to work with a diverse group of companies.
          Some of the notable companies i have worrked with includes
        </p>
        <div className="clientsImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contactPages">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contatcDesc">
          Please fill out the form below to discuss any work oppurtunities.
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            id=""
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
          <a 
  href="https://www.linkedin.com/in/abdulhammed-oluwashina-836687331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img
    src={LinkedIn} 
    style={{ borderRadius: "20rem" }}
    alt="LinkedIn Profile" 
    className="link"
  />
</a>

           <a href="https://x.com/acerbicao?s=11&t=2oNE4vUp-w33acoztnFrgQ" target="_blank" rel="noopener noreferrer">
  <img src={TwitterIcon} alt="" className="link" />
</a>

<a href="mailto:abdulhammedoluwashina@gmail.com" target="_blank" rel="noopener noreferrer">
<img src={GmailIcon} alt="" className="link" />
</a>
          
            <a href="https://www.instagram.com/oozy_j/?igsh=bGE2NzY0anI1Z3pn&utm_source=qr#" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="" className="link" />
            </a>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
