import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 48px",
      height: "60px",
      background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.07)" : "none",
      transition: "all 0.4s ease",
    },
    logo: {
      fontSize: "17px",
      fontWeight: "700",
      letterSpacing: "0.5px",
      background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textDecoration: "none",
    },
    links: {
      display: "flex",
      gap: "32px",
      listStyle: "none",
    },
    link: {
      fontSize: "13px",
      color: "rgba(226,226,240,0.5)",
      textDecoration: "none",
      letterSpacing: "0.3px",
      transition: "color 0.2s",
    },
  };

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>your.name</a>
      <ul style={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = "#e2e2f0")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(226,226,240,0.5)")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
