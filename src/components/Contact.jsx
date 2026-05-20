import { useRef, useEffect, useState } from "react";
import { CONTACT_LINKS } from "../data";

const styles = {
  section: {
    padding: "96px 48px 80px",
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
    maxWidth: "440px",
    lineHeight: "1.7",
    marginBottom: "48px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "14px",
    maxWidth: "700px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "20px 22px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.03)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.25s, background 0.25s, transform 0.2s",
  },
  icon: { fontSize: "22px" },
  label: { fontSize: "14px", fontWeight: "600" },
  sub: { fontSize: "12px", color: "rgba(226,226,240,0.4)" },
  footer: {
    marginTop: "80px",
    paddingTop: "32px",
    borderTop: "0.5px solid rgba(255,255,255,0.04)",
    textAlign: "center",
    fontSize: "12px",
    color: "rgba(226,226,240,0.2)",
  },
};

export default function Contact() {
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
    <section id="contact" ref={ref} style={styles.section}>
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <span style={styles.tag}>Contact</span>
        <h2 style={styles.title}>Let's talk.</h2>
        <p style={styles.subtitle}>
          I'm always open to new opportunities, collaborations, or just a good
          conversation about data. Feel free to reach out.
        </p>
        <div style={styles.grid}>
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${c.color}55`;
                e.currentTarget.style.background = `${c.color}08`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={styles.icon}>{c.icon}</span>
              <span style={{ ...styles.label, color: c.color }}>{c.label}</span>
              <span style={styles.sub}>{c.sub}</span>
            </a>
          ))}
        </div>
        <footer style={styles.footer}>
          <p>Built with React · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}

