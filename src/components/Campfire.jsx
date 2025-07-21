import React, { useRef, useState } from "react";

export default function Campfire() {
  const [big, setBig] = useState(false);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleFire = () => {
    setBig((b) => !b);
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div style={{ margin: "2rem 0", cursor: "pointer" }} onClick={toggleFire} title="Click to stoke the fire!">
      <img
        src="/assets/campfire-bg.jpg"
        alt="Campfire"
        style={{
          width: big ? 270 : 220,
          height: big ? 270 : 220,
          borderRadius: "50%",
          boxShadow: big ? "0 0 60px 20px #ff914dcc" : "0 0 40px 10px #ff914d88",
          objectFit: "cover",
          transition: "all 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      />
      <audio ref={audioRef} src="/assets/campfire-sound.mp3" loop />
      <div style={{textAlign:'center', color:'#ff914d', fontWeight:600, marginTop:8, fontSize:big?22:16}}>
        {playing ? "🔥 Crackle! 🔥" : "Click the fire!"}
      </div>
    </div>
  );
} 