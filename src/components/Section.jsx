import React, { useRef, useEffect, useState } from "react";

export default function Section({ id, children, style }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in${visible ? " visible" : ""}`}
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </section>
  );
} 