import { useRef, useEffect, useState } from "react";
import { PROJECTS } from "../data";

function MiniBarChart({ accent }) {
  const heights = [35, 55, 42, 75, 60, 85, 70];
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
      {heights.map((h, i) => (
        <rect key={i} x={i * 13} y={60 - h} width="10" height={h} rx="2"
          fill={accent} opacity={0.35 + i * 0.09} />
      ))}
      <polyline
        points={heights.map((h, i) => `${i * 13 + 5},${60 - h}`).join(" ")}
        stroke={accent} strokeWidth="1.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniDonut({ accent }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="22" fill="none"
        stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      <circle cx="30" cy="30" r="22" fill="none"
        stroke={accent} strokeWidth="8"
        strokeDasharray="120 138" strokeLinecap="round"
        transform="rotate(-90 30 30)" opacity="0.9" />
      <text x="30" y="35" textAnchor="middle"
        fill={accent} fontSize="11" fontWeight="600">87%</text>
    </svg>
  );
}

function MiniLine({ accent }) {
  const pts = [5, 25, 18, 40, 30, 35, 45, 50, 55, 42, 70, 55, 85, 48];
  const pairs = [];
  for (let i = 0; i < pts.length; i += 2) pairs.push([pts[i], pts[i + 1]]);
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
      <polyline
        points={pairs.map(([x, y]) => `${x},${60 - y}`).join(" ")}
        stroke={accent} strokeWidth="1.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.8"
      />
      {pairs.map(([x, y], i) => (
        <circle key={i} cx={x} cy={60 - y} r="2.5" fill={accent} opacity="0.7" />
      ))}
    </svg>
  );
}

function MiniFlow({ accent }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} opacity="0.6" />
        </marker>
      </defs>
      {[0, 28, 56].map((x, i) => (
        <g key={i}>
          <rect x={x} y="20" width="22" height="20" rx="4"
            fill={accent} opacity={0.2 + i * 0.15} />
          {i < 2 && (
            <path d={`M${x + 22} 30 L${x + 26} 30`}
              stroke={accent} strokeWidth="1.5"
              strokeLinecap="round" markerEnd="url(#arr)" opacity="0.6" />
          )}
        </g>
      ))}
    </svg>
  );
}

function ProjectChart({ type, accent }) {
  if (type === "bar") return <MiniBarChart accent={accent} />;
  if (type === "donut") return <MiniDonut accent={accent} />;
  if (type === "line") return <MiniLine accent={accent} />;
  return <MiniFlow accent={accent} />;
}

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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "24px",
    transition: "border-color 0.3s, transform 0.3s, background 0.3s",
    cursor: "default",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "16px",
  },
  metric: {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    padding: "4px 10px",
    borderRadius: "20px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
    lineHeight: "1.3",
    color: "#e2e2f0",
  },
  cardDesc: {
    fontSize: "13px",
    color: "rgba(226,226,240,0.5)",
    lineHeight: "1.65",
    marginBottom: "16px",
  },
  tags: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },
  tag: {
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(226,226,240,0.5)",
    border: "0.5px solid rgba(255,255,255,0.08)",
  },
  links: {
    display: "flex",
    gap: "10px",
  },
  link: {
    fontSize: "12px",
    fontWeight: "500",
    padding: "5px 12px",
    borderRadius: "8px",
    border: "0.5px solid rgba(255,255,255,0.12)",
    color: "rgba(226,226,240,0.6)",
    textDecoration: "none",
    transition: "color 0.2s, border-color 0.2s",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={styles.section}>
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <span style={styles.tag}>Projects</span>
        <h2 style={styles.title}>Selected work</h2>
        <div style={styles.grid}>
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = `${p.accent}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={styles.cardHeader}>
                <ProjectChart type={p.chart} accent={p.accent} />
                <span style={{
                  ...styles.metric,
                  color: p.accent,
                  backgroundColor: p.accentBg,
                  border: `0.5px solid ${p.accent}44`,
                }}>
                  {p.metric}
                </span>
              </div>
              <p style={styles.cardTitle}>{p.title}</p>
              <p style={styles.cardDesc}>{p.desc}</p>
              <div style={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
              <div style={styles.links}>
                <a href={p.github} style={styles.link}
                  onMouseEnter={(e) => { e.target.style.color = p.accent; e.target.style.borderColor = p.accent; }}
                  onMouseLeave={(e) => { e.target.style.color = "rgba(226,226,240,0.6)"; e.target.style.borderColor = "rgba(255,255,255,0.12)"; }}>
                  🐙 GitHub
                </a>
                <a href={p.demo} style={styles.link}
                  onMouseEnter={(e) => { e.target.style.color = p.accent; e.target.style.borderColor = p.accent; }}
                  onMouseLeave={(e) => { e.target.style.color = "rgba(226,226,240,0.6)"; e.target.style.borderColor = "rgba(255,255,255,0.12)"; }}>
                  ↗ Live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
