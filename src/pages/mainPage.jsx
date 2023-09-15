import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.svg";
import center from "../assets/icon(1).png";
import left from "../assets/icon(2).png";
import right from "../assets/icon(3).png";
import logo from "../assets/logo.png";

const MainPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="flex justify-center items-center bg-svg bg-cover bg-center w-screen h-screen absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-row gap-5">
          <Link to="/connect">
            <div className="flex-col">
              <div className="justify-center items-center flex">
                <img src={left} alt="Mascot" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
                Get Connected ...
              </div>
              <div>sfhcsfchvd</div>
            </div>
          </Link>
          <Link to="/translating">
            <div className="flex-col justify-center items-center flex">
              <div className="justify-center items-center flex">
                <img src={center} alt="Mascot" />
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
                Talk !
              </div>
              <div>sfhcsfchvd</div>
            </div>
          </Link>
          <a
            href="https://www.echo-sign.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-col">
              <div className="justify-center items-center flex">
                <img src={right} alt="Mascot" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
                About EchoSign ...
              </div>
              <div>sfhcsfchvd</div>
            </div>
          </a>
        </div>
        <img
          src={logo}
          alt="Logo"
          className="fixed w-[15%] h-auto mx-auto top-8"
        />
      </div>
    </div>
  );
};

export default MainPage;
