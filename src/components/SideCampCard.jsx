import React from "react";

export default function SideCampCard({ icon, title, desc }) {
  // Her karta farklı bir animasyon gecikmesi verelim
  const delay = Math.random() * 1.5;
  return (
    <div
      className="card-hover wobble"
      style={{
        background: "#2d3c2a",
        color: "#fff8e7",
        borderRadius: 16,
        padding: 20,
        margin: 10,
        minWidth: 180,
        maxWidth: 260,
        boxShadow: "0 2px 12px #0002",
        textAlign: "center",
        cursor: "pointer",
        animationDelay: `${delay}s`,
      }}
    >
      <img
        src={icon}
        alt={title}
        style={{ width: 54, height: 54, marginBottom: 10 }}
      />
      <h3 style={{ margin: "0 0 8px 0", fontSize: 20 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 15 }}>{desc}</p>
    </div>
  );
} 