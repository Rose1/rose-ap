# Rosario Ancco Peralta — Data Analyst Portfolio

> Turning complex data into clear decisions through visualization, analysis, and predictive modeling.

🌐 **Live site:** https://Rose1.github.io/rose-ap/

![Portfolio Preview](https://via.placeholder.com/1200x600/0d0d14/a78bfa?text=Portfolio+Preview)

---

## About

Hi!! This is my personal portfolio built with React. It showcases my work as a Data Analyst with a background in Computer Science and Software Engineering — including dashboards, ML models, and data pipelines.

I built it from scratch to have full control over the design and to practice modern front-end development alongside my data work.

---

## Live Projects

| Project | Tools | Highlights |
|---|---|---|
| Retail Sales Dashboard | Power BI · SQL · Python | −60% reporting time |
| Churn Prediction Model | Python · Scikit-learn · SQL | 87% accuracy |
| Latin America Market Analysis | Tableau · Python · SQL | 6 countries analyzed |
| Automated Data Pipeline | Python · SQL · Pandas | +2M rows / day |

---

## Built With

- **React** — component-based UI
- **Vite** — fast dev server and build tool
- **GitHub Pages** — free hosting via `gh-pages`
- No UI libraries or CSS frameworks — all styles written in plain JS style objects

---

## Project Structure

```
src/
├── App.jsx                  # Main component, composes all sections
├── data.js                  # All content lives here — edit this to customize
└── components/
    ├── Navbar.jsx            # Fixed nav with scroll glassmorphism effect
    ├── About.jsx             # Hero section with stats and CTA buttons
    ├── Projects.jsx          # Project cards with inline SVG mini-charts
    ├── Stack.jsx             # Tech stack badges
    ├── Experience.jsx        # Career timeline
    ├── Contact.jsx           # Contact links and footer
    └── Divider.jsx           # Reusable section separator
```

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Open `http://localhost:5173` to see it running locally.

---

## Deployment

```bash
npm run deploy
```

This builds the project and pushes it to the `gh-pages` branch automatically. The live site updates in ~2 minutes.

> Make sure `vite.config.js` has `base: '/my-portfolio/'` matching your repo name.

---

## Customization

All personal content is centralized in `src/data.js`. You won't need to touch any component file to make the portfolio your own.

**What you can update in `data.js`:**

- `STACK` — your tech badges (label, icon, color)
- `PROJECTS` — title, description, tags, metric, GitHub and demo links
- `EXPERIENCE` — roles, companies, years, descriptions
- `CONTACT_LINKS` — email, LinkedIn, GitHub, CV download link

**Other things to personalize:**

- Your name in `Navbar.jsx` (replace `your.name`)
- Hero headline and bio in `About.jsx`
- Stats (years of experience, projects, accuracy) in `About.jsx`

---

## License

[MIT](LICENSE) — feel free to fork and adapt for your own portfolio.

---

*Designed and built by [Rose A. Peralta](https://Rose1.github.io/my-portfolio/)*