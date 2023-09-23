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
  const [signLanguageImage, setSignLanguageImage] = useState(null);

  const startRecording = () => {
    // Implement code to start recording audio
    setIsRecording(true);
  };

  const stopRecording = () => {
    // Implement code to stop recording audio
    setIsRecording(false);
  };

  const handleTranscription = (text) => {
    // Handle the transcribed text here
    setTranscribedText(text);
  };

  const handleSignLanguageImage = (image) => {
    // Handle the sign language interpretation image here
    setSignLanguageImage(image);
  };

  return (
    <div className="speech-to-text-container">
      <div className="record-button">
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>
            <FontAwesomeIcon icon={faMicrophone} /> Start Recording
          </button>
        )}
      </div>
      <div className="transcribed-text">
        <p>{transcribedText}</p>
      </div>
      <div className="sign-language-image">
        {signLanguageImage && <img src={signLanguageImage} alt="Sign Language Interpretation" />}
      </div>
    </div>
  );
}


