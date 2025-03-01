import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnimg from "../../assets/hireme.png";
import Avatar from '../../assets/futuristic-robot-listening-music-headphones.jpg'
import Contacts from "../Contacts/Contacts";

const Intro = () => {
  return (
   
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">
            I'm <span className="introName">Uthman</span> <br />
            A Website Designer
          </span>
          <p className="introPara">
            I'm a skilled web designer ith experience in creating <br />
             visually
            appealing and user friendly websites.
          </p>
         
          <a href="#contactPage"> <button className="btn">
              <img src={btnimg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button></a>
          
        </div>
        <img src={Avatar} alt="" className="bg"/>
      </section>
  );
};

export default Intro;
