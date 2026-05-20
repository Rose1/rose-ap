import { useRef, useEffect, useState } from "react";
import { STACK } from "../data";

const styles = {
  section: {
    padding: "96px 48px",
    position: "relative",
    zIndex: 1,
  },
  tag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#a78bfa",
    marginBottom: "12px",
  },
  title: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    letterSpacing: "-1px",
    marginBottom: "12px",
    lineHeight: "1.15",
  },
  subtitle: {
    fontSize: "15px",
    color: "rgba(226,226,240,0.4)",
    marginBottom: "48px",
    maxWidth: "480px",
    lineHeight: "1.7",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    borderRadius: "30px",
    fontSize: "13px",
    fontWeight: "500",
    border: "0.5px solid",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
    userSelect: "none",
  },
};

export default function Stack() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" ref={ref} style={styles.section}>
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <span style={styles.tag}>Stack</span>
        <h2 style={styles.title}>Tools & technologies</h2>
        <p style={styles.subtitle}>
          The tools I use daily to collect, process, analyze, and communicate data.
        </p>
        <div style={styles.grid}>
          {STACK.map((item) => (
            <div
              key={item.label}
              style={{
                ...styles.badge,
                color: item.color,
                backgroundColor: item.bg,
                borderColor: item.border,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = `0 0 16px ${item.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
