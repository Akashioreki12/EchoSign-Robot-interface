import React, { useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket'; // Import the w3cwebsocket class

const VideoFeed = () => {
  const videoRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    // Connect to the WebSocket server
    socket.current = new W3CWebSocket('ws://localhost:8765'); // Replace with your server's address

    // Handle incoming video frames
    socket.current.onmessage = (message) => {
      const blob = new Blob([message.data], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      videoRef.current.src = imageUrl;
    };

    // Clean up on unmount
    return () => {
      socket.current.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Video Feed</h1>
      <img ref={videoRef} alt="Real-Time Feed" />
    </div>
  );
};

export default VideoFeed;
