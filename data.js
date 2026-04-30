window.siteData = {
  experience: [
    {
      period: "Sep 2022 — Present",
      role: "Software Engineer",
      company: "Aerospacelab",
      companyUrl: "https://www.aerospacelab.be",
      details: "Belgian new-space company developing its own satellites and intelligence products.",
      bullets: [
        "Led frontend of a SIGINT platform serving internal analysts and undisclosed external clients — interactive geospatial maps and structured tabular views for signal classification and intelligence workflows.",
        "Built satellite operations platform used by all satellite operators at Aerospacelab — real-time telemetry dashboards, telecommand management, health tracking, and pass scheduling.",
        "Contributed to frontend architecture across multiple intelligence and Earth observation products.",
      ],
    },
    {
      period: "2019 — Jul 2022",
      role: "Full-Stack Developer",
      company: "SEALAB",
      companyUrl: "https://sealab.be/",
      details: "UCLouvain spin-off developing scientific software for hydrodynamic modelling. Joined as part of the founding team.",
      bullets: [
        "Designed system architecture and led technical decisions as a founding team member.",
        "Implemented CI/CD pipeline and deployment infrastructure from scratch.",
        "Developed full-stack features from data ingestion and backend APIs to user-facing UI.",
        "Improved usability of modelling and simulation workflows for engineering and scientific users.",
      ],
    },
    {
      period: "2019",
      role: "Research Support",
      company: "UCLouvain, Earth and Life Institute",
      companyUrl: "https://uclouvain.be",
      details: "Extended research from my M.Sc. dissertation; contributed to hydrodynamic model quality.",
      bullets: [],
    },
    {
      period: "2017 — 2018",
      role: "Sales & Events Staff",
      company: "Gestion du Centre Ville — Ottignies Louvain-la-Neuve",
      companyUrl: null,
      details: "Seasonal sales work during Louvain-la-Plage (summer) and the Christmas market (winter).",
      bullets: [],
      early: true,
    },
    {
      period: "2016",
      role: "Operations Intern",
      company: "Nativeblooms — Ecuador",
      companyUrl: null,
      details: "Hands-on experience at one of Ecuador's pioneering rose farms. Exposure to agricultural operations and business management. (1 month)",
      bullets: [],
      early: true,
    },
    {
      period: "2012",
      role: "Co-founder & Volunteer",
      company: "Yanapaqui — Ecuador",
      companyUrl: null,
      details: "Co-created a community development project providing better housing for poor communities in remote regions of Ecuador. (~6 months)",
      bullets: [],
      early: true,
    },
  ],

  education: [
    {
      period: "2017 — 2019",
      degree: "Master's in Bioengineering",
      school: "UCLouvain — Université catholique de Louvain",
      note: "Major in data analysis and management — environmental modelling.",
    },
    {
      period: "2014 — 2017",
      degree: "Bachelor's in Bioengineering",
      school: "UCLouvain — Université catholique de Louvain",
      note: "Louvain-la-Neuve, Belgium.",
    },
  ],

  publications: [
    {
      title: "A coupled ecohydrodynamic model to predict algal blooms in Lake Titicaca",
      journal: "Ecological Modelling",
      date: "January 2021",
      url: "https://www.sciencedirect.com/science/article/pii/S0304380020304750",
    },
  ],

  projects: [
    {
      title: "SIGINT Intelligence Platform",
      meta: "Frontend engineer · Aerospacelab",
      description:
        "Frontend of a signal intelligence platform used by internal analysts and undisclosed external clients. Interactive geospatial maps display signal distribution in real time; structured tabular views support classification and analysis workflows — cutting through signal noise to surface actionable intelligence.",
      tags: ["TypeScript", "Vue 3", "Nuxt 4", "Nuxt UI 4", "Geospatial", "Mapping", "Data Visualization"],
      link: null,
    },
    {
      title: "Satellite Operations Platform",
      meta: "Frontend engineer · Aerospacelab",
      description:
        "Ground segment tool used by all satellite operators at Aerospacelab. Provides real-time telemetry dashboards, telecommand management, and pass scheduling — centralising every operator's daily workflow into a single, reliable interface.",
      tags: [
        "TypeScript", "Vue 3", "Nuxt 4", "Nuxt UI 4", "Real-time data", "REST APIs", "Dashboards",
        { name: "Java / Quarkus", note: "learning" },
      ],
      link: null,
    },
    {
      title: "DataFusion",
      meta: "Frontend engineer · Aerospacelab",
      description:
        "Extensible intelligence platform built around a plug-and-play data model: any source — SIGINT, optical, open-source, or custom feeds — connects and surfaces on a unified operational interface. Analysts can explore live data across sources, monitor maritime activity and ground assets, and configure alerts for events like vessel loitering or illegal fishing. Sole frontend engineer in a cross-functional team of seven — partially government-funded and delivered to a customer.",
      tags: ["TypeScript", "Vue 3", "Nuxt 4", "Nuxt UI 4", "Geospatial", "Mapping", "Real-time data", "Alerting", "Data Visualization"],
      link: null,
    },
    {
      title: "Hydrodynamic Modeling Platform",
      meta: "Full-stack developer · SEALAB",
      description:
        "Full-stack scientific platform that replaced fragmented manual workflows with an end-to-end browser-based solution — from data ingestion and model configuration to result visualization. Made complex hydrodynamic simulations accessible to engineers and scientists without specialist tooling.",
      tags: ["Python", "Django", "PostgreSQL", "JavaScript", "REST APIs"],
      link: null,
    },
    {
      title: "DevBoard",
      meta: "Personal project",
      description:
        "Personal tool built to eliminate context-switching across GitLab and GitHub. Visualises all open MRs, issues, and todos as an interactive dependency graph — with Ctrl+K search, worktree tracking, and persistent annotations. Replaced scattered tab chaos with a single focused view.",
      tags: ["Nuxt 4", "Vue 3", "Nuxt UI 4", "TypeScript", "Vue Flow"],
      link: { label: "GitHub", url: "https://github.com/FrancoisDuquesne/devboard" },
    },
    {
      title: "Browser Games",
      meta: "Personal projects · For fun",
      description:
        "I build small browser games in my spare time. Current examples: a space colony life-support simulator and an aquarium simulation. An excuse to explore game loops, real-time state, and interactive rendering.",
      tags: ["JavaScript", "Vue", "Game dev"],
      link: { label: "GitHub", url: "https://github.com/FrancoisDuquesne/Life-Support" },
    },
    {
      title: "Lake Titicaca Ecosystem Model",
      meta: "M.Sc. Thesis · UCLouvain / SLIM team · 2019",
      description:
        "M.Sc. thesis modelling Lake Titicaca's ecosystem to assess how pollution affects biodiversity in one of the world's highest-altitude lakes. Resulted in a peer-reviewed publication in Ecological Modelling (2021) — contributing to the scientific basis for environmental protection of the lake.",
      tags: ["Python", "Hydrodynamics", "Ecosystem modelling", "Scientific computing"],
      link: { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0304380020304750" },
    },
    {
      title: "PubMed Search Engine",
      meta: "Academic project · UCLouvain · 2018",
      description:
        "Text mining search engine on PubMed abstracts using LSA and LDA techniques. Deployed as an interactive web app on Shinyapps.io.",
      tags: ["R", "Shinyapps.io", "Text mining", "LSA / LDA"],
      link: { label: "GitHub", url: "https://github.com/Option10/Text-Mining-with-R" },
    },
    {
      title: "Licence Plate Reader",
      meta: "Academic project · UCLouvain · 2018",
      description:
        "Licence plate recognition combining deep learning (Keras) and image manipulation for end-to-end text detection.",
      tags: ["Python", "Keras", "Deep learning", "Computer vision"],
      link: { label: "GitHub", url: "https://github.com/Option10/Deep-Learning---Plate-recognition" },
    },
    {
      title: "Ebola Outbreak Simulation",
      meta: "Academic project · UCLouvain · 2018",
      description:
        "Spatial simulation of the 2014 West Africa Ebola epidemic using cellular automata and Monte Carlo methods to model epidemic progression.",
      tags: ["MatLab", "Cellular automata", "Monte Carlo", "Epidemic modelling"],
      link: null,
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "TypeScript", "JavaScript",
        { name: "React", note: "· learning" },
        "Vue 3", "Nuxt", "HTML / CSS", "Tailwind CSS", "Accessibility",
      ],
    },
    {
      category: "Backend / APIs",
      items: ["Python", "Django", "REST APIs", "SQL", "PostgreSQL", "Node.js"],
    },
    {
      category: "Data & Viz",
      items: ["D3.js", "Vue Flow", "Dashboards", "Geospatial / Maps", "Signal data"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "GitLab CI/CD", "Vitest", "Playwright", "Bash"],
    },
    {
      category: "Scientific",
      items: ["R", "MatLab", "GIS (QGis / ArcGis)", "Mathematical modelling", "LaTeX"],
    },
  ],

  personal: {
    bio: "I'm drawn to anything that involves movement and the outdoors — paragliding, kitesurfing, motorcycle rides. I play basketball, padel, and salsa. I enjoy beers with colleagues and try to travel as much as I can. I like meeting new people and seeing new places.",
    workStyle: "I work iteratively — I'd rather ship and learn than overthink and stall. I'm collaborative without ego, direct without being difficult, and results-driven without losing sight of quality. I adapt fast: three different product verticals in three years at Aerospacelab. I work agile — two-week sprints, planning, retros, GitLab milestones and issues — and I'm comfortable making decisions and owning them.",
    interests: ["Paragliding", "Kitesurfing", "Motorcycle", "Basketball", "Padel", "Salsa dancing", "Travel", "Hikes", "Gaming", "Movies", "Food", "Beer"],
    softSkills: ["Collaborative", "Low ego", "Feedback-driven", "Business-minded", "Decisive", "Results-driven", "Iterative", "Direct & actionable", "Agile"],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
  },

  contacts: [
    { label: "Email",    value: "francoisduq@gmail.com",                         href: "mailto:francoisduq@gmail.com" },
    { label: "GitHub",   value: "github.com/francoisduquesne",                   href: "https://github.com/francoisduquesne" },
    { label: "LinkedIn", value: "linkedin.com/in/francoisduquesne",               href: "https://www.linkedin.com/in/francoisduquesne/" },
  ],
};
