import React, { useRef, useEffect } from 'react';

const WebcamFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableWebcam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert('Could not access webcam: ' + err.message);
      }
    }
    enableWebcam();
  }, []);

  return (
    <div>
      <h2>Webcam Feed</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: 480 }} />
    </div>
  );
};

export default WebcamFeed;
