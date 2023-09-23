import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import side from "../assets/rd2.png";

export default class Connexion extends Component {
  render() {
    return (
      <div
        className="flex justify-center items-center bg-svg bg-cover bg-center w-screen h-screen absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Link to="/mainPage">
          <img
            src={logo}
            alt="Logo"
            className="w-[10%] h-auto mx-auto fixed top-[7%] right-[6%]"
          />
        </Link>
        <img src={side} className="w-[26%] h-auto mx-auto fixed top-0 left-0" />

        <Link to="/mainPage">
          <div className="flex flex-col justify-center items-center h-full w-full gap-11">
            <div className="flex justify-center items-center text-3xl  w-[100%]">
              {" "}
              We are working on this section !!{" "}
            </div>
            <div className="flex justify-center items-center text-lg  w-[45%] bg-red-200 rounded-xl">
              Main Page
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
