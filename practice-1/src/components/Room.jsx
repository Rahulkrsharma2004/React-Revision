import React, { useEffect } from "react";
import { useVideoCall } from "./VideoCallContext";
import VideoTile from "./VideoTile";
import Controls from "./Controls";

const Room = () => {
  const { stream, peers } = useVideoCall();  // ✅ Use `stream` instead of `userVideoRef`

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center">
      <h1 className="text-xl my-4">Video Call</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* ✅ Pass `stream` directly */}
        {stream && <VideoTile stream={stream} name="You" isSelf />}
        {Object.entries(peers).map(([id, peerStream]) => (
          <VideoTile key={id} stream={peerStream} name={`Peer ${id}`} />
        ))}
      </div>

      <Controls />
    </div>
  );
};

export default Room;
