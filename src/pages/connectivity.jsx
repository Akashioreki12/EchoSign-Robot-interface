import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import side from "../assets/rd2.png";
import sinzee from "../assets/Mascot6.png";

export default class Connectivity extends Component {
  render() {
    return (
      <div
        className="flex justify-center items-center bg-svg bg-cover bg-center w-screen h-screen absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[10%] h-auto mx-auto fixed top-[7%] right-[6%]"
        />
        <img src={side} className="w-[26%] h-auto mx-auto fixed top-0 left-0" />
      </div>
    );
  }
}
