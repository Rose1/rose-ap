import { useRef, useEffect, useState } from "react";
import { EXPERIENCE } from "../data";

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
    marginBottom: "48px",
    lineHeight: "1.15",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
  },
  item: {
    display: "flex",
    gap: "20px",
    paddingBottom: "36px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20px",
    flexShrink: 0,
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginTop: "4px",
    flexShrink: 0,
  },
  line: {
    flex: 1,
    width: "1px",
    marginTop: "6px",
    background: "rgba(255,255,255,0.06)",
  },
  year: {
    fontSize: "12px",
    fontWeight: "500",
    marginBottom: "4px",
  },
  role: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#e2e2f0",
  },
  place: {
    fontSize: "13px",
    color: "rgba(226,226,240,0.4)",
    marginBottom: "8px",
  },
  desc: {
    fontSize: "14px",
    color: "rgba(226,226,240,0.5)",
    lineHeight: "1.65",
  },
};

export default function Experience() {
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
    <section id="experience" ref={ref} style={styles.section}>
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <span style={styles.tag}>Experience</span>
        <h2 style={styles.title}>Background</h2>
        <div style={styles.timeline}>
          {EXPERIENCE.map((item, i) => (
            <div key={item.role} style={styles.item}>
              <div style={styles.left}>
                <div style={{
                  ...styles.dot,
                  background: item.color,
                  boxShadow: `0 0 10px ${item.color}66`,
                }} />
                {i < EXPERIENCE.length - 1 && <div style={styles.line} />}
              </div>
              <div>
                <p style={{ ...styles.year, color: item.color }}>{item.year}</p>
                <p style={styles.role}>{item.role}</p>
                <p style={styles.place}>{item.place}</p>
                <p style={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
