import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { useParams, useNavigate } from "react-router-dom";

const VideoCallContext = createContext();
export const useVideoCall = () => useContext(VideoCallContext);

export const VideoCallProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState({});
  const [muted, setMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const { roomId } = useParams();
  const navigate = useNavigate();
  const peerRef = useRef(null);
  const peerConnections = useRef({});

  useEffect(() => {
    const peer = new Peer(undefined, { host: "0.peerjs.com", port: 443, secure: true });
    peerRef.current = peer;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
      setStream(mediaStream);

      peer.on("open", (id) => {
        peerConnections.current[id] = peer;
      });

      peer.on("call", (call) => {
        call.answer(mediaStream);
        call.on("stream", (remoteStream) => {
          setPeers((prev) => ({ ...prev, [call.peer]: remoteStream }));
        });
      });
    });

    return () => {
      peer.destroy();
    };
  }, []);

  const joinCall = (peerId) => {
    const call = peerRef.current.call(peerId, stream);
    call.on("stream", (remoteStream) => {
      setPeers((prev) => ({ ...prev, [peerId]: remoteStream }));
    });
  };

  const toggleMute = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setMuted(!audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setVideoOn(videoTrack.enabled);
      }
    }
  };

  const leaveCall = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    if (peerRef.current) {
      peerRef.current.destroy();
    }
    navigate("/");
  };

  return (
    <VideoCallContext.Provider value={{ stream, peers, muted, videoOn, joinCall, toggleMute, toggleVideo, leaveCall }}>
      {children}
    </VideoCallContext.Provider>
  );
};
