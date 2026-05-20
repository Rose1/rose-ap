const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "120px 48px 80px",
    position: "relative",
    overflow: "hidden",
  },
  glow1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    top: "10%",
    right: "-100px",
    background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  glow2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    bottom: "10%",
    left: "-80px",
    background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(139,92,246,0.12)",
    border: "0.5px solid rgba(139,92,246,0.3)",
    borderRadius: "30px",
    padding: "6px 16px",
    marginBottom: "28px",
    fontSize: "12px",
    color: "#c4b5fd",
    width: "fit-content",
    animation: "fadeInUp 0.6s ease both",
  },
  badgeDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#a78bfa",
    animation: "pulse 2s infinite",
  },
  h1: {
    fontSize: "clamp(42px, 6vw, 76px)",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "20px",
    letterSpacing: "-1.5px",
    animation: "fadeInUp 0.7s 0.1s ease both",
  },
  gradient: {
    background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "17px",
    color: "rgba(226,226,240,0.5)",
    maxWidth: "520px",
    lineHeight: "1.75",
    marginBottom: "16px",
    animation: "fadeInUp 0.7s 0.2s ease both",
  },
  bio: {
    fontSize: "15px",
    color: "rgba(226,226,240,0.4)",
    maxWidth: "540px",
    lineHeight: "1.8",
    marginBottom: "40px",
    animation: "fadeInUp 0.7s 0.25s ease both",
  },
  buttons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    animation: "fadeInUp 0.7s 0.3s ease both",
  },
  btnPrimary: {
    padding: "12px 28px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    background: "linear-gradient(135deg, #7c3aed, #0ea5e9)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.3px",
    transition: "opacity 0.2s, transform 0.15s",
  },
  btnSecondary: {
    padding: "12px 28px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "500",
    background: "transparent",
    color: "rgba(226,226,240,0.7)",
    border: "0.5px solid rgba(226,226,240,0.2)",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  stats: {
    display: "flex",
    gap: "40px",
    marginTop: "64px",
    animation: "fadeInUp 0.7s 0.4s ease both",
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  statNum: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    fontSize: "12px",
    color: "rgba(226,226,240,0.4)",
    letterSpacing: "0.5px",
  },
};

const STATS = [
  { num: "3+", label: "Years of experience" },
  { num: "15+", label: "Projects completed" },
  { num: "87%", label: "Best ML accuracy" },
];

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.badge}>
        <div style={styles.badgeDot} />
        <span>Open to new opportunities</span>
      </div>

      <h1 style={styles.h1}>
        Data that<br />
        <span style={styles.gradient}>tells stories.</span>
      </h1>

      <p style={styles.subtitle}>
        Data Analyst · Computer Science & Software Engineering background
      </p>

      <p style={styles.bio}>
        I turn complex data into clear decisions through visualization, analysis,
        and predictive modeling. With a foundation in software engineering, I bring
        both analytical depth and technical rigor to every project.
      </p>

      <div style={styles.buttons}>
        <a href="#projects" style={styles.btnPrimary}>View projects →</a>
        <a href="#" style={styles.btnSecondary}>⬇ Download CV</a>
      </div>

      <div style={styles.stats}>
        {STATS.map(({ num, label }) => (
          <div key={label} style={styles.statItem}>
            <span style={styles.statNum}>{num}</span>
            <span style={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
