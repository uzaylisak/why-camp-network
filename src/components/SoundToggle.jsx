import React, { useRef, useState } from "react";

export default function SoundToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 100 }}>
      <button
        onClick={toggle}
        style={{
          background: "#ff914d",
          color: "#fff8e7",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          fontSize: 24,
          cursor: "pointer",
          boxShadow: "0 2px 8px #0003",
        }}
        aria-label="Toggle campfire sound"
      >
        {playing ? "🔊" : "🔈"}
      </button>
      <audio ref={audioRef} loop src="/assets/campfire-sound.mp3" />
    </div>
  );
} 