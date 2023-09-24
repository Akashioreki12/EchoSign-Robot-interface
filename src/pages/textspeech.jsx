import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
// import bgImage from "../assets/bg.svg";
// import logo from "../assets/logo.png";
// import side from "../assets/bl1.png";
// import sinzee from "../assets/Mascot6.png";
// import VideoFeed from "../components/VideoFeed";

export default function Stt ()  {
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);
  const responses = ['Salam', 'Labas hamdollah, o nta', 'Hta ana chokran echosign'];

  const startRecording = () => {
    // Start recording logic
    setIsRecording(true);
  };

  const stopRecording = () => {
    // Stop recording logic
    setIsRecording(false);

    // Simulate a loading delay before showing the response
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTranscribedText(responses[responseIndex]);
      setResponseIndex((prevIndex) => (prevIndex + 1) % responses.length);
    }, 3000); // Wait for 3 seconds
  };


  return (
    <div className="text-center space-y-8 ">
    <div className="mt-12">
      {isRecording ? (
        <button onClick={stopRecording} className="bg-red-500 text-white px-6 py-4 rounded-full">
          <span className="text-4xl p-2">
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
          Stop Recording
        </button>
      ) : (
        <button onClick={startRecording} className="bg-blue-500 text-white px-6 py-4 rounded-full">
          <span className="text-4xl p-2">
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
          Start Recording
        </button>
      )}
    </div>
    {loading ? (
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid mx-auto"></div>
    ) : (
      
      <div className="mt-12 justify-center items-center gap-6 rounded-full">
        <div className="mt-12 bg-[#5B99FF] justify-center items-center flex rounded-xl font-semibold  text-2xl text-white">
              Translation :
            </div>
        <p className="mt-12 font-bold text-6xl">{transcribedText}</p>
      </div>
    )}
  </div>
  );
}


