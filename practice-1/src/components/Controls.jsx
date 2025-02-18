import React from "react";
import { useVideoCall } from "./VideoCallContext";

const Controls = () => {
  const { toggleMute, toggleVideo, leaveCall, muted, videoOn } = useVideoCall();

  return (
    <div className="p-4 flex gap-4">
      <button 
        onClick={toggleMute} 
        className={`px-4 py-2 rounded ${muted ? "bg-red-500" : "bg-green-500"} text-white`}
      >
        {muted ? "Unmute" : "Mute"}
      </button>

      <button 
        onClick={toggleVideo} 
        className={`px-4 py-2 rounded ${videoOn ? "bg-blue-600" : "bg-gray-500"} text-white`}
      >
        {videoOn ? "Turn Off Video" : "Turn On Video"}
      </button>

      <button 
        onClick={leaveCall} 
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Leave Call
      </button>
    </div>
  );
};

export default Controls;
