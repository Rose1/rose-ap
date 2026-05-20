export const STACK = [
  { label: "Python", icon: "🐍", color: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
  { label: "SQL", icon: "🗄️", color: "#38bdf8", bg: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.3)" },
  { label: "Power BI", icon: "📊", color: "#fb923c", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)" },
  { label: "Tableau", icon: "📈", color: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
  { label: "Jupyter", icon: "📓", color: "#f472b6", bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)" },
  { label: "Pandas", icon: "🐼", color: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
  { label: "Scikit-learn", icon: "🤖", color: "#38bdf8", bg: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.3)" },
  { label: "Git", icon: "⚡", color: "#fb923c", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)" },
];

export const PROJECTS = [
  {
    title: "Retail Sales Dashboard",
    desc: "End-to-end KPI analysis for a retail chain with 200+ stores. Reduced report generation time by 60% and automated deviation alerts for store managers.",
    tags: ["Power BI", "SQL", "Python"],
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    chart: "bar",
    metric: "−60% reporting time",
    github: "#",
    demo: "#",
  },
  {
    title: "Churn Prediction Model",
    desc: "ML model to predict customer churn with 87% accuracy. Built with Random Forest and feature engineering on transactional data from 500K+ customers.",
    tags: ["Python", "Scikit-learn", "SQL"],
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    chart: "donut",
    metric: "87% accuracy",
    github: "#",
    demo: "#",
  },
  {
    title: "Latin America Market Analysis",
    desc: "Exploration of consumer trends across 6 countries using public datasets and APIs. Interactive Tableau dashboards with geographic drill-down.",
    tags: ["Tableau", "Python", "SQL"],
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    chart: "line",
    metric: "6 countries analyzed",
    github: "#",
    demo: "#",
  },
  {
    title: "Automated Data Pipeline",
    desc: "ETL pipeline processing 2M+ rows daily from multiple sources. Reduces manual intervention and ensures data quality for executive reporting.",
    tags: ["Python", "SQL", "Pandas"],
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.08)",
    chart: "flow",
    metric: "+2M rows / day",
    github: "#",
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    year: "2023 – Present",
    role: "Data Analyst",
    place: "Current Company",
    color: "#a78bfa",
    desc: "Executive dashboards, ad-hoc analysis, and predictive models for business decision-making.",
  },
  {
    year: "2021 – 2023",
    role: "Software Engineer",
    place: "Previous Company",
    color: "#38bdf8",
    desc: "Backend development, REST APIs, and database optimization at scale.",
  },
  {
    year: "2017 – 2021",
    role: "B.S. Computer Science",
    place: "University",
    color: "#34d399",
    desc: "Specialization in Software Engineering and algorithms.",
  },
];

export const CONTACT_LINKS = [
  { icon: "✉️", label: "Email", sub: "rosarioanccoperalta@gmail.com", color: "#a78bfa", href: "mailto:rosarioanccoperalta@gmail.com" },
  { icon: "💼", label: "LinkedIn", sub: "/in/your-profile", color: "#38bdf8", href: "#" },
  { icon: "🐙", label: "GitHub", sub: "github.com/Rose1", color: "#34d399", href: "#" },
  { icon: "📄", label: "CV / Résumé", sub: "Download PDF", color: "#f472b6", href: "#" },
];

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #080810; font-family: 'DM Sans', sans-serif; color: #e2e2f0; overflow-x: hidden; }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0%,100% { opacity:1; box-shadow:0 0 8px #a78bfa; } 50% { opacity:0.6; box-shadow:0 0 18px #a78bfa; } }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #080810; }
  ::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.3); border-radius: 4px; }
`;
