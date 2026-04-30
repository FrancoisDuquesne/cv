// ── François Duquesne — CV ──────────────────────────────────────────────────
// Compile: typst compile cv.typ
// Install DM Sans for best results: https://fonts.google.com/specimen/DM+Sans

#let accent     = rgb("#2563eb")
#let text-color = rgb("#18181b")
#let muted      = rgb("#71717a")
#let subtle     = rgb("#a1a1aa")
#let border-col = rgb("#e4e4e7")

#set page(
  paper: "a4",
  margin: (x: 1.8cm, y: 1.4cm),
)

#set text(
  font: ("DM Sans", "Noto Sans"),
  size: 9pt,
  fill: text-color,
)

#set par(leading: 0.6em, justify: false)

#set list(indent: 0pt, marker: "–")

// ── Helpers ─────────────────────────────────────────────────────────────────

#let section(title) = {
  v(0.85em)
  text(size: 7pt, weight: 500, tracking: 2pt, fill: subtle)[#upper(title)]
  v(0.15em)
  line(length: 100%, stroke: 0.4pt + border-col)
  v(0.4em)
}

#let entry(period, title, subtitle, note: none, bullets: ()) = {
  grid(
    columns: (3cm, 1fr),
    column-gutter: 1.1em,
    align(top, text(size: 8pt, fill: subtle)[#period]),
    {
      text(weight: 500)[#title]
      h(0.4em)
      text(fill: muted)[#subtitle]
      if note != none {
        linebreak()
        text(size: 8.5pt, fill: muted)[#note]
      }
      if bullets.len() > 0 {
        v(0.15em)
        for b in bullets {
          text(size: 8.5pt, fill: subtle)[– #b]
          linebreak()
        }
      }
    }
  )
  v(0.45em)
}

// ── Header ──────────────────────────────────────────────────────────────────

#grid(
  columns: (1fr, auto),
  align(bottom)[
    #text(size: 27pt, weight: 300, tracking: -1.5pt)[François Duquesne]
    #v(0.2em)
    #text(size: 9.5pt, fill: muted)[Software Engineer · Belgium / Remote]
  ],
  align(right + bottom)[
    #text(size: 8.2pt, fill: muted)[
      francoisduq\@gmail.com \
      #link("https://github.com/francoisduquesne")[github.com/francoisduquesne] \
      #link("https://www.linkedin.com/in/francoisduquesne/")[linkedin.com/in/francoisduquesne] \
      #link("https://francoisduquesne.com")[francoisduquesne.com]
    ]
  ]
)

#v(0.45em)
#line(length: 100%, stroke: 0.5pt + border-col)

// ── Profile ─────────────────────────────────────────────────────────────────

#section("Profile")

#text(size: 9pt, fill: muted)[
  Software engineer with a background in scientific research, building product-grade interfaces
  for technical domains. My work sits at the intersection of complex data and operational
  decision-making, from signal intelligence and satellite operations to hydrodynamic modelling
  and developer tooling. I care about making technically dense information usable: clear under
  complexity, reliable under pressure, and honest about what the data says.
  Currently at Aerospacelab. Open to full-time opportunities and selective freelance engagements.
]

// ── Experience ──────────────────────────────────────────────────────────────

#section("Experience")

#entry(
  "Sep 2022 — Present",
  "Software Engineer",
  "Aerospacelab",
  note: "Belgian new-space company developing its own satellites and intelligence products.",
  bullets: (
    "Sole frontend engineer on DataFusion, an extensible platform fusing SIGINT, optical, and open-source data into a unified operational interface with real-time monitoring, vessel tracking, and configurable alerting.",
    "Led frontend of a SIGINT platform serving internal analysts and undisclosed external clients, delivering geospatial maps and tabular views for signal classification and intelligence workflows.",
    "Built satellite operations platform used by all satellite operators, providing real-time telemetry, telecommand management, health tracking, and pass scheduling.",
    "Contributed to frontend architecture across multiple intelligence and Earth observation products.",
  )
)

#entry(
  "2019 — Jul 2022",
  "Full-Stack Developer",
  "SEALAB",
  note: "UCLouvain spin-off developing scientific software for hydrodynamic modelling. Joined as part of the founding team.",
  bullets: (
    "Designed system architecture and led technical decisions as a founding team member.",
    "Implemented CI/CD pipeline and deployment infrastructure from scratch.",
    "Developed full-stack features from data ingestion and backend APIs to user-facing UI.",
  )
)

#entry(
  "2019",
  "Research Support",
  "UCLouvain — Earth and Life Institute",
  note: "Extended research from my M.Sc. dissertation; contributed to hydrodynamic model quality.",
)

// ── Education ───────────────────────────────────────────────────────────────

#section("Education")

#entry(
  "2017 — 2019",
  "Master's in Bioengineering",
  "UCLouvain",
  note: "Major in data analysis and management, with a focus on environmental modelling.",
)

#entry(
  "2014 — 2017",
  "Bachelor's in Bioengineering",
  "UCLouvain",
  note: "Louvain-la-Neuve, Belgium.",
)

// ── Publications ────────────────────────────────────────────────────────────

#section("Publications")

#entry(
  "January 2021",
  "A coupled ecohydrodynamic model to predict algal blooms in Lake Titicaca",
  "Ecological Modelling",
  note: link("https://www.sciencedirect.com/science/article/pii/S0304380020304750")[
    sciencedirect.com ↗
  ],
)

// ── Skills ──────────────────────────────────────────────────────────────────

#section("Skills & Stack")

#grid(
  columns: (1fr, 1fr, 1fr),
  column-gutter: 1.5em,
  row-gutter: 0.75em,
  [
    #text(size: 7.5pt, fill: subtle)[Frontend] \
    #text(size: 8.5pt, fill: muted)[TypeScript · JavaScript · Vue 3 · Nuxt · React (learning) · HTML/CSS · Tailwind]
  ],
  [
    #text(size: 7.5pt, fill: subtle)[Backend / APIs] \
    #text(size: 8.5pt, fill: muted)[Python · Django · REST APIs · SQL · PostgreSQL · Node.js]
  ],
  [
    #text(size: 7.5pt, fill: subtle)[Data & Viz] \
    #text(size: 8.5pt, fill: muted)[D3.js · Vue Flow · Dashboards · Geospatial / Maps · Signal data]
  ],
  [
    #text(size: 7.5pt, fill: subtle)[Tools] \
    #text(size: 8.5pt, fill: muted)[Git · Docker · GitLab CI/CD · Vitest · Playwright · Bash]
  ],
  [
    #text(size: 7.5pt, fill: subtle)[Scientific] \
    #text(size: 8.5pt, fill: muted)[R · MatLab · GIS (QGIS / ArcGIS) · Mathematical modelling · LaTeX]
  ],
  [
    #text(size: 7.5pt, fill: subtle)[Languages] \
    #text(size: 8.5pt, fill: muted)[Spanish (native) · French (native) · English (fluent)]
  ],
)

// ── Footer ──────────────────────────────────────────────────────────────────

#v(1fr)
#line(length: 100%, stroke: 0.4pt + border-col)
#v(0.3em)
#align(center)[
  #text(size: 7.5pt, fill: subtle)[francoisduquesne.com]
]
