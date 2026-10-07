/* ============================================================
   js/components.js | Portfolio of AVINASH PRATAP SINGH
   Builds every section (About, Skills, Experience, Projects...) from the content in js/data.js.
   ============================================================ */
// STEP 1: small helper functions ($ = find element, ic = icon, sec = section wrapper, tl = timeline, act = button)
// STEP 2: build every section and insert it into <div id="app">
// STEP 3: fill navbar, footer, social icons, hero bars and skill tabs
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const ic = (n, c = "h-4 w-4") => `<i data-lucide="${n}" class="${c}"></i>`;
const sec = (id, h, body) =>
  `<section id="${id}" class="rv mx-auto max-w-6xl px-5 py-14 sm:py-24"><h2 class="h2">${h}</h2><div class="mt-10">${body}</div></section>`;
const lk = (c) =>
  NAV.map(
    (n) =>
      `<a href="#${n.toLowerCase()}" data-n="${n.toLowerCase()}" class="nl ${c} rounded-lg px-2.5 py-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">${n}</a>`,
  ).join("");
const socials = [
  ["LinkedIn", "linkedin", P.linkedin],
  ["GitHub", "github", P.github],
  ["Instagram", "instagram", P.instagram],
  ["X (Twitter)", "twitter", P.x],
  ["Email", "mail", "mailto:" + P.email],
]
  .map(([l, i, h]) =>
    h
      ? `<a href="${h}" aria-label="${l}" ${h[0] == "h" ? 'target="_blank" rel="noopener"' : ""} class="sb hover:border-blue-600 hover:text-blue-700">${ic(i, "h-[18px] w-[18px]")}</a>`
      : `<span role="img" aria-label="${l} link not added yet" title="Add your ${l} URL in the P object" class="sb cursor-not-allowed opacity-40">${ic(i, "h-[18px] w-[18px]")}</span>`,
  )
  .join("");
const tl = (a) =>
  `<ol class="ml-3 border-l-2 border-blue-300 dark:border-blue-900/60">${a.map((i) => `<li class="relative mb-6 ml-5 last:mb-0 sm:ml-7"><span class="absolute -left-[29px] top-6 sm:-left-[37px] h-3.5 w-3.5 rounded-full border-[3px] border-blue-600 bg-blue-50 dark:bg-[#07101f]"></span><div class="card p-5 sm:p-6"><div class="flex flex-wrap items-center gap-2"><h3 class="text-lg font-bold t">${i.t}</h3>${i.b ? `<span class="chip">${i.b}</span>` : ""}</div><p class="mt-1 font-semibold text-blue-700 dark:text-sky-400">${i.o}</p><p class="mt-1 text-sm text-slate-500">${i.d} · ${i.p}</p>${i.n ? `<p class="mt-3 text-sm leading-relaxed">${i.n}</p>` : ""}${i.l ? `<ul class="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">${i.l.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}${i.u ? `<a href="${i.u}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline dark:text-sky-400">swastikshaadi.com ${ic("external-link", "h-3.5 w-3.5")}</a>` : ""}</div></li>`).join("")}</ol>`;
const act = (h, i, l) =>
  h
    ? `<a href="${h}" target="_blank" rel="noopener" class="btn btn-g min-w-[10.5rem] flex-1">${ic(i)}${l}</a>`
    : `<button disabled aria-disabled="true" class="btn btn-g min-w-[10.5rem] flex-1 cursor-not-allowed opacity-50 hover:!border-slate-300 hover:!text-slate-800">${ic(i)}${l} · Coming Soon</button>`;
const about = [
  [
    "database",
    "Collect, clean, interpret",
    "Skilled in collecting, cleaning, analyzing, and interpreting data to generate actionable business insights.",
  ],
  [
    "layout-dashboard",
    "Dashboards and reports",
    "Experienced in creating interactive dashboards, automating reports, and solving real-world business problems using data.",
  ],
  [
    "sigma",
    "Strong foundation",
    "Solid grounding in statistics, problem-solving, and communication.",
  ],
  [
    "sparkles",
    "Always learning",
    "A passion for continuous learning and data-driven decision-making.",
  ],
];
const stats = [
  ["trending-up", "Data Analytics"],
  ["code", "SQL & Python"],
  ["file-spreadsheet", "Power BI & Excel"],
  ["layout-dashboard", "Data Visualization"],
];
const lab = (id, l, t, x = "") =>
  `<div><label for="${id}" class="mb-1.5 block text-sm font-semibold t">${l}</label>${t == "ta" ? `<textarea id="${id}" required rows="5" class="field"></textarea>` : `<input id="${id}" type="${t}" required class="field">`}</div>`;
const info = [
  ["mail", "Email", P.email, "mailto:" + P.email],
  ["phone", "Phone", P.phone, "tel:" + P.phone],
  ["map-pin", "Location", P.loc, ""],
];
const graph = `<svg class="il card w-full p-4 shadow-xl shadow-blue-900/10" viewBox="0 0 320 220" role="img" aria-label="Animated bar chart with a rising trend line"><path d="M20 190H300" stroke="#94A3B8" opacity=".4"/><g class="fill-blue-600 dark:fill-sky-400"><rect x="30" y="120" width="30" height="70" opacity=".5"/><rect x="80" y="90" width="30" height="100" opacity=".65"/><rect x="130" y="105" width="30" height="85" opacity=".5"/><rect x="180" y="60" width="30" height="130" opacity=".8"/><rect x="230" y="75" width="30" height="115"/></g><polyline points="45,100 95,70 145,85 195,40 245,52" fill="none" stroke-width="2.5" stroke-linejoin="round" class="stroke-slate-900 dark:stroke-cyan-300"/><g class="fill-slate-900 dark:fill-cyan-300"><circle cx="45" cy="100" r="4"/><circle cx="95" cy="70" r="4"/><circle cx="145" cy="85" r="4"/><circle cx="195" cy="40" r="4"/><circle cx="245" cy="52" r="4"/></g></svg>`;
$("#app").innerHTML =
  /* ---- ABOUT section: intro + graph, then 4 cards, then highlight strip ---- */
  sec(
    "about",
    "About me",
    `<div class="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]"><p class="border-l-4 border-blue-600 pl-5 font-display text-xl font-semibold leading-snug t sm:text-2xl">I am a Data Analyst who enjoys turning raw data into meaningful insights that help businesses make better decisions. I have strong skills in PostgreSQL, Excel, Power BI, and Python for data cleaning, analysis, visualization, and reporting.

I love exploring data, finding trends, and create dashboards that tell a story. I am passionate about solving problems and continuously learning new tools and techniques in data analytics.

Currently, I am looking for opportunities where i can contribute, learn, and grow as a Data Analyst.

.</p>${graph}</div><div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${about.map(([i, t, d]) => `<div class="card p-5">${ic(i, "h-5 w-5 text-blue-700 dark:text-sky-400")}<h3 class="mt-3 font-bold t">${t}</h3><p class="mt-1 text-sm leading-relaxed">${d}</p></div>`).join("")}</div><ul class="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">${stats.map(([i, l]) => `<li class="flex items-center gap-2.5 rounded-2xl bg-blue-900 p-3.5 text-white sm:gap-3 sm:p-4 dark:bg-[#12254a]">${ic(i, "h-[22px] w-[22px] shrink-0 text-sky-400")}<span class="text-sm font-semibold">${l}</span></li>`).join("")}</ul>`,
  ) +
  /* ---- SKILLS section: category tabs (filled by tab() below) ---- */
  sec(
    "skills",
    "Skills",
    `<div role="tablist" aria-label="Skill categories" id="tabs" class="ts -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"></div><div role="tabpanel" id="panel" class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"></div>`,
  ) +
  /* ---- EXPERIENCE section: timeline from EXP in data.js ---- */
  sec("experience", "Experience", tl(EXP)) +
  /* ---- PROJECTS section: cards from PRJ in data.js ---- */
  sec(
    "projects",
    "Projects",
    `<div role="group" aria-label="Filter projects" class="mb-8 flex flex-wrap gap-2">${[
      ["all", "All"],
      ["web", "Web Development"],
      ["data", "Data & ML"],
    ]
      .map(
        ([k, l], i) =>
          `<button type="button" data-f="${k}" aria-pressed="${i == 0}" class="btn ${i == 0 ? "btn-p" : "btn-g"}">${l}</button>`,
      )
      .join(
        "",
      )}</div><div id="pgrid" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${PRJ.map((p) => `<article data-c="${p.c}" class="card flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/10"><h3 class="text-xl font-bold t">${p.t}</h3><p class="mt-2 text-sm leading-relaxed">${p.d}</p><div class="mt-4 flex flex-wrap gap-1.5">${p.k.map((k) => `<span class="chip">${k}</span>`).join("")}</div><ul class="mt-4 flex-1 list-disc space-y-1 pl-5 text-sm">${p.w.map((w) => `<li>${w}</li>`).join("")}</ul><div class="mt-6 flex flex-wrap gap-2">${act(p.gh, "github", "GitHub")}${act(p.demo, "external-link", "Live Demo")}</div></article>`).join("")}</div>`,
  ) +
  /* ---- EDUCATION section: timeline from EDU in data.js ---- */
  sec("education", "Education", tl(EDU)) +
  /* ---- CERTIFICATIONS section: cards from CERT in data.js ---- */
  sec(
    "certifications",
    "Certifications",
    `<div class="grid gap-5 md:grid-cols-3">${CERT.map(([t, i, n, u]) => `<article class="card border-t-4 !border-t-blue-600 p-6">${ic("award", "h-6 w-6 text-blue-700 dark:text-sky-400")}<h3 class="mt-4 text-lg font-bold t">${t}</h3><p class="mt-1 text-sm font-semibold">${i}</p>${n ? `<p class="mt-2 text-sm">${n}</p>` : ""}${u ? `<a href="${u}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline dark:text-sky-400">View certificate ${ic("external-link", "h-3.5 w-3.5")}</a>` : `<p class="mt-4 text-xs text-slate-500">Certificate link coming soon</p>`}</article>`).join("")}</div><h3 class="mt-14 text-xl font-bold t">Languages</h3><ul class="mt-4 flex gap-3"><li class="card px-5 py-2 text-sm font-semibold">Hindi</li><li class="card px-5 py-2 text-sm font-semibold">English</li></ul>`,
  ) +
  /* ---- CONTACT section: details, social icons and email form ---- */
  sec(
    "contact",
    "Let's Connect",
    `<div class="grid gap-10 lg:grid-cols-2"><div><p class="max-w-md text-lg leading-relaxed">I'm open to Data Analyst opportunities, jobs, internships, projects, and professional collaborations.</p><ul class="mt-8 space-y-5">${info.map(([i, l, v, h]) => `<li class="flex items-start gap-4"><span class="ib h-11 w-11">${ic(i, "h-[18px] w-[18px]")}</span><div><p class="text-sm text-slate-500">${l}</p>${h ? `<a href="${h}" class="break-all font-semibold t hover:underline">${v}</a>` : `<p class="font-semibold t">${v}</p>`}</div></li>`).join("")}</ul><div class="soc mt-8 flex gap-2"></div></div><form id="cf" class="card space-y-4 p-6">${lab("name", "Name", "text")}${lab("email", "Email", "email")}${lab("subject", "Subject", "text")}${lab("message", "Message", "ta")}<button type="submit" class="btn btn-p w-full">${ic("send")}Send Message</button><p id="fs" role="status" class="text-sm"></p><p class="text-xs text-slate-500">Sending opens Gmail (or your email app) with the message ready. Nothing is stored by this website.</p></form></div>`,
  );
$("#links").innerHTML = lk("");
$("#mm").innerHTML =
  lk("!py-3 !text-base") +
  '<a class="btn btn-p rs mt-2 sm:hidden" download>Download Resume</a>';
$("#fl").innerHTML = NAV.map(
  (n) =>
    `<a href="#${n.toLowerCase()}" class="hover:text-blue-700 dark:hover:text-sky-300">${n}</a>`,
).join("");
$$(".soc").forEach((e) => (e.innerHTML = socials));
$$(".rs").forEach((a) => {
  a.href = P.resume;
  a.download = "Avinash_Pratap_Singh_Resume.pdf";
});
// skills tabs
$("#tabs").innerHTML = Object.keys(SK)
  .map(
    (k) =>
      `<button role="tab" data-k="${k}" class="btn shrink-0 whitespace-nowrap">${ic(SK[k][0])}${k}</button>`,
  )
  .join("");
function tab(c) {
  $$("#tabs [data-k]").forEach((b) => {
    const on = b.dataset.k == c;
    b.setAttribute("aria-selected", on);
    b.classList.toggle("btn-p", on);
    b.classList.toggle("btn-g", !on);
  });
  $("#panel").innerHTML = SK[c][1]
    .map(
      (x, i) =>
        `<div class="card pop flex items-center gap-3 p-4" style="animation-delay:${i * 50}ms"><span class="ib">${ic(SK[c][0], "h-[18px] w-[18px]")}</span><span class="font-semibold t">${x}</span></div>`,
    )
    .join("");
  lucide.createIcons();
}
tab("Programming");
$("#tabs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-k]");
  if (b) {
    tab(b.dataset.k);
    b.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }
});
