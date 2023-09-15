import React, { Component } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import side from "../assets/bl1.png";
import sinzee from "../assets/Mascot6.png";

export default class Translating2 extends Component {
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

        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
          <div className=" flex justify-center items-center h-[10%] w-[20%] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
            audio to sign
          </div>
          <div className="h-[70%] w-[55%] flex flex-row justify-center items-center gap-4 ">
            <div className="bg-slate-200 h-[100%] w-[60%]">Recording </div>
            <div className=" h-[100%] w-[40%] flex flex-col justify-center items-center  gap-5">
              <div className="bg-slate-200 w-full h-full p-4">signs</div>
              <div className="bg-slate-200 w-full h-full p-4">txt</div>
            </div>
          </div>
          <div className="h-[10%] w-[20%] flex flex-row justify-center items-center gap-6">
            <div className=" h-[80%] w-[40%] bg-[#5B99FF] justify-center items-center flex rounded-xl ">
              back
            </div>
            <div className=" h-[80%] w-[40%] bg-[#5B99FF] justify-center items-center flex px-[0%] rounded-xl ">
              sign to audio ?
            </div>
          </div>
        </div>
      </div>
    );
  }
}
