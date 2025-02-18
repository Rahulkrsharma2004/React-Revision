import React, { useEffect, useRef } from "react";

const VideoTile = ({ stream, name, isSelf }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;  // ✅ Set stream properly
    }
  }, [stream]);

  return (
    <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-300 bg-black">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted={isSelf} 
          className="w-full h-auto rounded-lg" 
        />
        <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-50 text-white text-sm px-2 py-1 rounded">
          {isSelf ? "You" : name}
        </div>
      </div>
    </div>
  );
};

export default VideoTile;
