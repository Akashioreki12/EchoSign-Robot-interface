import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import side from "../assets/rd2.png";
import img1 from "../assets/444.png";
import img2 from "../assets/555.png";
import img3 from "../assets/666.png";
import img4 from "../assets/777.png";

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

        {/*<Link to="/mainPage">
          
            <div className="flex justify-center items-center text-lg  w-[45%] bg-red-200 rounded-xl">
              Main Page
            </div>
          
    </Link>*/}
        <div className="flex-col justify-center items-center mt-11">
          <div className="flex flex-row gap-0 items-center mx-[8%]">
            <img src={img1} className="w-[20%] h-auto mx-auto" />
            <img src={img2} className="w-[20%] h-auto mx-auto" />
            <img src={img3} className="w-[20%] h-auto mx-auto" />
            <img src={img4} className="w-[20%] h-auto mx-auto" />
          </div>
          <p className="text-xl text-center mt-4 stroke-indigo-950 ">
            You can connect with all device with a camera , micro and speaker
          </p>
          <Link to="/mainPage" className="flex justify-center items-center mt-7">
            <div className="flex justify-center items-center text-lg  w-[13%] h-11 bg-red-200 rounded-xl">
              Main Page
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
