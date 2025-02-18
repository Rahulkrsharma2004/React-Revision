import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Video Chat (No Backend)</h1>
      <button onClick={() => navigate(`/room/${nanoid()}`)} className="px-4 py-2 bg-blue-500 rounded mb-2">
        Create Room
      </button>
      <input type="text" placeholder="Enter Room ID" className="p-2 rounded text-black mb-2" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <button onClick={() => navigate(`/room/${roomId}`)} className="px-4 py-2 bg-green-500 rounded">
        Join Room
      </button>
    </div>
  );
};

export default Home;
