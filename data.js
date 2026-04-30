window.siteData = {
  experience: [
    {
      period: "Sep 2022 — Present",
      role: "Software Engineer",
      company: "Aerospacelab",
      companyUrl: "https://www.aerospacelab.be",
      details: "Building product-grade interfaces for intelligence analysis and satellite operations.",
      bullets: [
        "Led frontend of a SIGINT platform — interactive maps and tabular views for signal intelligence.",
        "Built satellite operations platform for telemetry monitoring, telecommand management, and configuration.",
        "Contributed to frontend architecture across multiple intelligence and Earth observation products.",
      ],
    },
    {
      period: "2019 — Jul 2022",
      role: "Full-Stack Developer",
      company: "SEALAB",
      companyUrl: "https://sealab.be/",
      details: "Built and maintained a scientific web platform for hydrodynamic modeling workflows.",
      bullets: [
        "Developed full-stack features from data ingestion and backend APIs to user-facing UI.",
        "Improved usability of modeling and simulation workflows for scientific users.",
      ],
    },
    {
      period: "2019",
      role: "Research Support",
      company: "UCLouvain, Earth and Life Institute",
      companyUrl: "https://uclouvain.be",
      details: "Extended thesis research; contributed to hydrodynamic model quality.",
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
        "Signal intelligence platform for processing and visualizing signal data and derived intelligence. Interactive maps for geographic signal distribution alongside structured tabular views for analysis and classification workflows.",
      tags: ["TypeScript", "Vue 3", "Nuxt 4", "Nuxt UI 4", "Geospatial", "Mapping", "Data Visualization"],
      link: null,
    },
    {
      title: "Satellite Operations Platform",
      meta: "Frontend engineer · Aerospacelab",
      description:
        "Ground segment tool for monitoring, configuring, and communicating with satellites. Real-time telemetry dashboards, telecommand management, satellite health tracking, and pass scheduling.",
      tags: [
        "TypeScript", "Vue 3", "Nuxt 4", "Nuxt UI 4", "Real-time data", "REST APIs", "Dashboards",
        { name: "Java / Quarkus", note: "learning" },
      ],
      link: null,
    },
    {
      title: "Hydrodynamic Modeling Platform",
      meta: "Full-stack developer · SEALAB",
      description:
        "Full-stack scientific platform for hydrodynamic simulation workflows — from data ingestion and model configuration through to result visualization for engineering and scientific users.",
      tags: ["Python", "Django", "PostgreSQL", "JavaScript", "REST APIs"],
      link: null,
    },
    {
      title: "DevBoard",
      meta: "Personal project",
      description:
        "Real-time developer dashboard for GitLab and GitHub. Visualizes MRs, issues, and todos as an interactive dependency graph with Ctrl+K fuzzy search, local worktree tracking, and persistent annotations.",
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
        "Modelled Lake Titicaca's hydrodynamic and ecosystemic system to assess the impact of anthropogenic contaminants on biodiversity. Work published in Ecological Modelling (2021).",
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
    bio: "I'm drawn to anything that involves movement and the outdoors — paragliding, kitesurfing, motorcycle rides. I play basketball and padel, enjoy beers with colleagues, and try to travel as much as I can. I like meeting new people and seeing new places.",
    interests: ["Paragliding", "Kitesurfing", "Motorcycle", "Basketball", "Padel", "Travel", "Hikes", "Gaming", "Movies", "Food", "Beer"],
    softSkills: ["Team player", "Clear communicator", "Autonomous", "Proactive", "Curious", "Adaptable", "Detail-oriented", "Problem-solver"],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
  },

  contacts: [
    { label: "Email",    value: "francoisduq@gmail.com",                         href: "mailto:francoisduq@gmail.com" },
    { label: "GitHub",   value: "github.com/francoisduquesne",                   href: "https://github.com/francoisduquesne" },
    { label: "LinkedIn", value: "linkedin.com/in/francois-duquesne-aa213499",    href: "https://www.linkedin.com/in/francois-duquesne-aa213499/" },
  ],
};
