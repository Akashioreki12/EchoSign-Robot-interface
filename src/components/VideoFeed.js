import React, { useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const VideoFeed = () => {
  const videoRef = useRef(null);
  const socket = useRef(null);
  const isMounted = useRef(true); // Create a ref to track component mount state
  let reconnecting = false;

// Function to initiate reconnection
function reconnect() {
  if (!reconnecting) {
    reconnecting = true;
    setTimeout(() => {
      // Attempt to reconnect
      socket.current = new W3CWebSocket('ws://localhost:8765');
      reconnecting = false;
    }, 1000); // Wait for 1 second before attempting to reconnect
  }
}
  const disconnect = () => {
    if (socket.current) {
      socket.current.close();
    }
  }

  useEffect(() => {
    // Connect to the WebSocket server when the component mounts
    if (isMounted.current) {

      socket.current = new W3CWebSocket('ws://localhost:8765'); // Replace with your server's address
      console.log('connected',socket.current);
      // Handle incoming video frames
      socket.current.onmessage = (message) => {
        const blob = new Blob([message.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);
        videoRef.current.src = imageUrl;
      };
      socket.current.onclose = () => {
        console.log('disconnected');
      };
      socket.current.onerror = (err) => {
        console.error('socket err',err);
      };
    }

    // Set isMounted to false when the component unmounts
    return () => {
      disconnect();
    };
  }, []); // Empty dependency array to ensure this effect runs only on mount

  return (
    <div>
      {videoRef.current ? (<img ref={videoRef} alt="Real-Time Feed" />):(
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid mx-auto"></div>)}
      
    </div>
  );
};

export default VideoFeed;
