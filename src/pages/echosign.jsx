import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import sinzee from "../assets/Mascot6.png";

export default class EchoSign extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/eyes">
        <div
          className="flex justify-center items-center bg-svg bg-cover bg-center w-screen h-screen absolute inset-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <img src={logo} alt="Logo" className="w-[50%] h-auto mx-auto" />

          <img
            src={sinzee}
            alt="Mascot"
            className="w-[11%] h-auto mx-auto absolute translate-x-[145%] translate-y-[-90%]"
          />
        </div>
     
        </Link>
       
      </div>
    );
  }
}
