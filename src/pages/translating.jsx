import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import logo from "../assets/logo.png";
import side from "../assets/bl1.png";
import sinzee from "../assets/Mascot6.png";
import VideoFeed from "../components/VideoFeed";
import Stt from "./textspeech";

export default class Translating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginalContent: true, // Initially show the original content
    };
  }

  toggleContent = () => {
    this.setState((prevState) => ({
      showOriginalContent: !prevState.showOriginalContent,
    }));
  };
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
          <div className=" flex justify-center items-center h-[10%] w-[30%] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
          {this.state.showOriginalContent ? (
              <div>sign Recognition</div>
            ) : (
              <div>Audio to sign</div>
            )}
          </div>
          
          <div className="h-[70%] w-[55%] flex flex-row justify-center items-center gap-4 ">
          {this.state.showOriginalContent ? (
              <VideoFeed />
            ) : (
              <Stt />
            )}
          </div>
          <div className="h-[10%] w-[20%] flex flex-row justify-center items-center gap-6 rounded-full">
          <Link to="/mainPage" className=" h-[80%] w-[40%] bg-[#5B99FF] justify-center items-center flex rounded-xl ">
            <div className=" h-[80%] w-[40%] bg-[#5B99FF] justify-center items-center flex rounded-xl ">
              back
            </div></Link>
            <button onClick={this.toggleContent} className=" h-[80%] w-[40%] bg-[#5B99FF] justify-center items-center flex rounded-xl ">
            {this.state.showOriginalContent ? (
              <div>Audio to sign</div>
              
            ) : (
              <div>sign Recognition</div>
            )}</button>
          </div>
        </div>
      </div>
    );
  }
}
