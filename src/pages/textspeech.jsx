import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import slm from "../assets/signs/slm.png";
import jomla2 from "../assets/signs/jomla2.png";
import jomla3 from "../assets/signs/jomla3.png";

export default function Stt() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseIndex, setResponseIndex] = useState(-1); // Initialize with -1

  const responses = [
    "Salam",
    "Labas hamdollah, o nta",
    "Hta ana chokran echosign",
  ];
  const signes = [slm ,jomla2 , jomla3];

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResponseIndex((prevIndex) => (prevIndex + 1) % responses.length);
      setTranscribedText(responses[responseIndex]); // Set the text after updating the index
    }, 3000); // Wait for 3 seconds
  };

  // Use useEffect to update responseIndex and transcribedText
  useEffect(() => {
    if (responseIndex !== -1) {
      setTranscribedText(responses[responseIndex]);
    }
  }, [responseIndex]);

  return (
    <div className="text-center space-y-8 ">
      <div className="mt-12">
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-6 py-4 rounded-full"
          >
            <span className="text-4xl p-2">
              <FontAwesomeIcon icon={faMicrophone} />
            </span>
            Arrêter l'enregistrement
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-500 text-white px-6 py-4 rounded-full"
          >
            <span className="text-4xl p-2">
              <FontAwesomeIcon icon={faMicrophone} />
            </span>
            Démarrer l'enregistrement
          </button>
        )}
      </div>
      {loading ? (
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid mx-auto"></div>
      ) : responseIndex !== -1 && transcribedText !== "" ? (
        <div className="mt-12 justify-center items-center gap-6 rounded-full">
          <div className="mt-12 bg-[#5B99FF] justify-center items-center flex rounded-xl font-semibold  text-2xl text-white">
            Traduction :
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="mt-4 w-[50%]">
              <img src={signes[responseIndex]} alt="Signe" />
            </div>
            <p className="mt-12 font-bold text-5xl">{transcribedText}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
