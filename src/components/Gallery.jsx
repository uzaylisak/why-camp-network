import React, { useState } from "react";

export default function Gallery() {
  const [modalImg, setModalImg] = useState(null);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          background: "#2e241a",
          padding: 32,
          borderRadius: 24,
          marginTop: 24,
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src="/assets/gallery-placeholder.png"
            alt="TrailHead creation"
            style={{
              width: 160,
              height: 160,
              borderRadius: 16,
              objectFit: "cover",
              border: "3px solid #ff914d",
              background: "#fff2",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onClick={() => setModalImg(`/assets/gallery-placeholder.png`)}
          />
        ))}
      </div>
      {modalImg && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "fadeIn 0.3s"
          }}
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Big TrailHead"
            style={{
              width: 340,
              height: 340,
              borderRadius: 24,
              border: "6px solid #ff914d",
              background: "#fff2",
              boxShadow: "0 8px 40px #000a",
              animation: "popIn 0.4s cubic-bezier(.68,-0.55,.27,1.55)"
            }}
          />
          <span style={{
            position: "absolute",
            top: 40,
            right: 60,
            fontSize: 40,
            color: "#fff8e7",
            cursor: "pointer",
            fontWeight: 900,
            textShadow: "0 2px 8px #000"
          }}>×</span>
        </div>
      )}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 0% { transform: scale(0.7) rotate(-8deg); } 80% { transform: scale(1.08) rotate(2deg); } 100% { transform: scale(1) rotate(0deg); } }
      `}</style>
    </>
  );
} 