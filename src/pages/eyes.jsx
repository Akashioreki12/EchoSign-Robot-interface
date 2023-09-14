import React from 'react';
import { Link } from 'react-router-dom';
import eyes from "../assets/ezgif.com-gif-maker.gif";


const Eyes = () => {
  return (
    <Link to="/mainPage">
      <div
        className="flex justify-center items-center bg-svg bg-cover bg-center w-screen h-screen absolute inset-0 "
        style={{ backgroundImage: `url(${eyes})` }}
      ></div>
    </Link>
  );
};

export default Eyes;
