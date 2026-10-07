/* ==========================================================================
   js/data.js | Portfolio of AVINASH PRATAP SINGH
   WHAT THIS FILE DOES: holds ALL the text and links shown on the website.
   Edit only this file to change content. Leave a link as '' to show a
   disabled "Coming Soon" button (projects) or "link coming soon" (certificates).
   ========================================================================== */

// ---- Contact details and social links (used in navbar, hero, contact, footer) ----
const P = {
  email: "avinashpratapsingh9389@gmail.com",
  phone: "+91-9389942758",
  loc: "Etmadpur, Agra, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/avinash-pratap-singh-/",
  github: "https://github.com/Avinash490",
  instagram: "https://www.instagram.com/aavinashhhh__",
  x: "https://x.com/_Avinash_Pratap",
  resume: "Avinash_Pratap_Singh_Resume.pdf", // keep this PDF in the same folder as index.html
};

// ---- Navigation (each name must match a section id, in lowercase) ----
const NAV = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Certifications",
  "Contact",
];

// ---- Skills: 'Tab name': [icon, [skills]]  (icons: https://lucide.dev/icons) ----
const SK = {
  Programming: ["code", ["Python", "Pandas", "NumPy", "Matplotlib"]],
  Database: ["database", ["PostgreSQL", "SQL"]],
  "Data Analysis": [
    "sigma",
    [
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Data Visualization",
      "Dashboard Development",
    ],
  ],
  Visualization: ["layout-dashboard", ["Power BI", "Microsoft Excel"]],
  Tools: [
    "wrench",
    ["VS Code", "Microsoft Office", "Git", "GitHub", "Jupyter Notebook"],
  ],
  "Soft Skills": [
    "users",
    [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Analytical Thinking",
      "Time Management",
    ],
  ],
};

// ---- Experience: t=title, o=organisation, d=dates, p=place, l=bullet list, u=website link ----
const EXP = [
  {
    t: "Data Analytics with AI Intern",
    o: "AICTE | IBM SkillBuild x BharatCares",
    d: "16 August 2026 – 30 September 2026",
    p: "Remote",
    l: [
      "Conducted Exploratory Data Analysis (EDA), data cleaning, and preprocessing techniques on complex datasets.",
      "Built machine learning and predictive models including Regression, Decision Trees, and Classification to generate business insights.",
      "Applied AI-driven visualization techniques using Power BI and Tableau aligned with UN Sustainable Development Goals (UN SDGs).",
    ],
  },
  {
    t: "Web Development Intern",
    o: "Mayra Events India P. LTD",
    d: "18 June 2025 – 18 September 2025",
    p: "Agra, Uttar Pradesh, India",
    l: [
      "Developed a Simple Calculator using HTML, CSS, and JavaScript.",
      "Developed a WhatsApp Clone frontend with chat functionality.",
      "Assisted in developing the Swastik Shaadi company website with a partner.",
    ],
    u: "https://swastikshaadi.com",
  },
];

// ---- Education: b = small badge text (optional) ----
const EDU = [
  {
    t: "MCA - Integrated",
    o: "Raja Balwant Singh Management Technical Campus",
    d: "November 2022 – Present",
    p: "Khandari, Agra, Uttar Pradesh",
    b: "Currently in 5th Year, 9th Semester",
    l: [
      "Deeply focused on Data Analyst and Business Analyst domains during the 5-year integrated MCA program",
      "Maintained a strong academic record throughout the 5-year integrated course",
    ],
  },
  {
    t: "12th - UP Board",
    o: "Mamta Girls Inter College",
    d: "2022",
    p: "Etmadpur, Agra, Uttar Pradesh",
    b: "Passed",
    l: [
      "Graduated with a major focus on Science stream subjects.",
      "Actively participated in school-level science exhibitions and debates.",
      "Developed foundational logic and analytical thinking skills for higher technical studies.",
    ],
  },
  {
    t: "10th - UP Board",
    o: "GS Public Inter College",
    d: "2020",
    p: "Kuberpur, Agra, Uttar Pradesh",
    b: "Passed",
    l: [
      "Cleared secondary education under the UP Board with a strong overall percentage.",
      "Awarded certificate of merit for maintaining top 10% rank in class.",
      "Participated in inter-school sports tournaments and cultural events.",
      "Built core foundational knowledge in Science, Mathematics, and English languages.",
    ],
  },
];

// ---- Projects: t=title, d=description, k=technologies, w=key functionality,
//      c=filter group ('web' or 'data'), gh=GitHub link, demo=live demo link ('' or missing = Coming Soon) ----
const PRJ = [
  {
    t: "Simple Calculator",
    c: "web",
    d: "Developed a functional calculator interface using HTML, CSS, and JavaScript with a focus on user interaction and frontend functionality.",
    k: ["HTML", "CSS", "JavaScript"],
    w: ["Functional calculator interface", "Focus on user interaction"],
    gh: "https://github.com/Avinash490/Simple-Calculator",
  },
  {
    t: "WhatsApp Clone Frontend",
    c: "web",
    d: "Developed a WhatsApp-inspired frontend interface with chat functionality as part of web development internship work.",
    k: ["HTML", "CSS", "JavaScript"],
    w: [
      "WhatsApp-inspired interface",
      "Chat functionality",
      "Built during web development internship",
    ],
    gh: "",
  },
  {
    t: "Swastik Shaadi Website",
    c: "web",
    d: "Assisted in developing the Swastik Shaadi company website with a partner.",
    k: ["HTML", "CSS", "JavaScript", "Web Development"],
    w: ["Company website", "Built collaboratively with a partner"],
    gh: "",
    demo: "https://swastikshaadi.com",
  },
  {
    t: "Data Analytics / EDA Projects",
    c: "data",
    d: "Exploratory data analysis, data cleaning, and preprocessing on complex datasets to find patterns and prepare data for analysis.",
    k: ["Python", "Pandas", "NumPy", "Matplotlib"],
    w: ["Data cleaning and preprocessing", "Exploratory Data Analysis (EDA)"],
    gh: "",
  },
  {
    t: "Machine Learning / Predictive Modeling",
    c: "data",
    d: "Machine learning and predictive models built to generate business insights.",
    k: ["Python", "Regression", "Decision Trees", "Classification"],
    w: ["Regression models", "Decision Tree models", "Classification models"],
    gh: "https://github.com/Avinash490/Machine-Learning",
  },
  {
    t: "Power BI / Tableau Visualization",
    c: "data",
    d: "AI-driven visualizations aligned with the UN Sustainable Development Goals (UN SDGs).",
    k: ["Power BI", "Tableau"],
    w: ["Interactive dashboards", "Visualizations aligned with UN SDGs"],
    gh: "",
  },
];

// ---- Certifications: [title, issuer, extra note ('' if none), certificate link ('' = coming soon)] ----
const CERT = [
  [
    "TATA GenAI Powered Data Analytics",
    "TATA Group with Forage",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_tata-forage-dataanalytics-activity-7508774055559467008-HMfh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
  [
    "Data Analysis Mastery with ChatGPT and Manus AI Tools",
    "Udemy",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_udemy-dataanalysis-dataanalytics-activity-7511460766839885824-LSBf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
  [
    "AI Skills for Careers & Productivity Workshop",
    "AI Academia",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_artificialintelligence-ai-aiskills-activity-7504433909447847936-WkAH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
  [
    "Data Analytics Job Simulation",
    "Deloitte with Forage",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_deloitte-dataanalytics-dataanalyst-activity-7501549215886794752--kH9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
  [
    "Credit Analyst Job Simulation",
    "Standard Chartered with Forage",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_creditanalysis-financialanalysis-creditrisk-activity-7502045197812424704-HT-S?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
  [
    "Machine Learning",
    "Softpro India Computer Technologies (P.) Ltd. In collaboration with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    "",
    "https://www.linkedin.com/posts/avinash-pratap-singh-_machinelearning-certification-gratitude-activity-7218992561015640064-izSQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwl-psBBlJdk8Vjvw6r92V6kwi0vX14w1Y",
  ],
];
