import { GLOBAL_STYLES } from "./data";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

export default function App() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {/* Fixed background noise texture */}
      <div style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.6,
      }} />

      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Stack />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
    </>
  );
}