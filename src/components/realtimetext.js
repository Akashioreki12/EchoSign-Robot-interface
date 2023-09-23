// import React, { Component } from "react";
//   import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming";

// class RealTimeSpeechToText extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       transcript: "",
//     };

//     this.audioContext = null; // Initialize audioContext as null
//     this.mediaStream = null;
//     this.audioInput = null;
//     this.mediaRecorder = null; // Use MediaRecorder to capture audio data

//     this.transcribeClient = new TranscribeStreamingClient({
//       region: "us-east-1",
//     });

//     this.audioChunks = [];
//     this.transcribeStarted = false;

//     this.setupAudioRecording = this.setupAudioRecording.bind(this); // Bind the method to this context
//   }

//   // Create and start the AudioContext after a user gesture (e.g., button click)
//   startAudioContext() {
//     this.audioContext = new AudioContext();
//   }
//   startTranscription = async () => {
//     console.log("startTranscription");
//     try {
//       const audioStream = async function* () {
//         while (true) {
//           if (this.audioChunks.length > 0) {
//             yield { AudioEvent: { AudioChunk: this.audioChunks.shift() } };
//           } else {
//             await new Promise((resolve) => setTimeout(resolve, 100));
//           }
//         }
//       }.bind(this);

//       const command = new StartStreamTranscriptionCommand({
//         LanguageCode: "en-US",
//         MediaEncoding: "pcm",
//         MediaSampleRateHertz: 44100,
//         AudioStream: audioStream(),
//       });

//       const response = await this.transcribeClient.send(command);
//     console.log("response",response);
//       for await (const event of response.TranscriptResultStream) {
//         if (event.TranscriptEvent) {
//           const transcript = event.TranscriptEvent.Transcript.Results[0].Alternatives[0].Transcript;
//           this.setState({ transcript });
//         }
//       }
//     } catch (error) {
//       console.error("Error in transcription:", error);
//     }
//   };

//    setupAudioRecording() {
//     try {
//       if (!this.audioContext) {
//         this.startAudioContext();
//       }

//       navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       this.mediaRecorder = new MediaRecorder(stream);
//       this.mediaRecorder.ondataavailable = (event) => {
//         if (!this.transcribeStarted) {
//           console.log("starting transcription");
//           this.startTranscription();
//           this.transcribeStarted = true;
//         }
//         this.audioChunks.push(event.data);
//       };
//       this.mediaRecorder.onerror = (event) => {
//         console.error("MediaRecorder error:", event.error);
//       };
//     // Start recording
//     this.mediaRecorder.start();
//     console.log("MediaRecorder started", this.mediaRecorder);});
      
      
      
//     } catch (error) {
//       console.error("Error setting up audio recording:", error);
//     }
//   }

//   stopAudioRecording() {
//     console.log("stopAudioRecording", this.mediaRecorder);
//     if (this.mediaRecorder && this.mediaRecorder.state === "recording") {
//       this.mediaRecorder.stop(); // Stop the recording
//       this.transcribeStarted = false; // Reset the transcription flag
//     }
//   }
//   componentWillUnmount() {
//     if (this.mediaRecorder) {
//       this.mediaRecorder.stop(); // Stop recording when the component unmounts
//     }
//     if (this.mediaStream) {
//       this.mediaStream.getTracks().forEach((track) => track.stop());
//     }
//   }



//   render() {
//     return (
//       <div>
//         <div>
//           <h2>Real-time Speech-to-Text</h2>
//           <button onClick={this.setupAudioRecording}>Start Recording</button>
//           <button onClick={this.stopAudioRecording}>Stop Recording</button>

//           <p>Transcript: {this.state.transcript}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default RealTimeSpeechToText;
