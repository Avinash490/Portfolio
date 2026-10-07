/* ============================================================
   js/interactions.js | Portfolio of AVINASH PRATAP SINGH
   Theme toggle, mobile menu, contact form, scroll reveal, active-link highlight, scroll-to-top.
   ============================================================ */
// STEP 4: dark/light theme toggle, mobile menu, contact form (opens your email app)
$("#theme").onclick = () => {
  const d = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", d ? "dark" : "light");
  } catch (e) {}
};
$("#mb").onclick = () => {
  const o = $("#mm").classList.toggle("open");
  $("#mb").setAttribute("aria-expanded", o);
};
$("#mm").onclick = (e) => {
  if (e.target.closest("a")) {
    $("#mm").classList.remove("open");
    $("#mb").setAttribute("aria-expanded", false);
  }
};
$("#cf").onsubmit = (e) => {
  e.preventDefault();
  const v = (k) => $("#" + k).value.trim();
  const body = v("message") + "\n\n— " + v("name") + " (" + v("email") + ")",
    q =
      "subject=" +
      encodeURIComponent(v("subject")) +
      "&body=" +
      encodeURIComponent(body);
  const gm =
    "https://mail.google.com/mail/?view=cm&fi=1&to=" +
    P.email +
    "&su=" +
    encodeURIComponent(v("subject")) +
    "&body=" +
    encodeURIComponent(body); // Gmail in a new tab
  const ml = "mailto:" + P.email + "?" + q; // or the default email app
  const a = 'class="font-semibold text-blue-700 underline dark:text-sky-400"';
  $("#fs").innerHTML =
    `Message ready: <a ${a} target="_blank" rel="noopener" href="${gm}">send with Gmail</a> or <a ${a} href="${ml}">open your email app</a>.`;
  window.open(gm, "_blank", "noopener");
};
// scroll reveal + active nav
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { rootMargin: "0px 0px -6% 0px" },
);
$$(".rv").forEach((e) => io.observe(e));
const ao = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        $$(".nl").forEach((a) => {
          const on = a.dataset.n == e.target.id;
          a.classList.toggle("on", on);
          on
            ? a.setAttribute("aria-current", "true")
            : a.removeAttribute("aria-current");
        });
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
NAV.forEach((n) => {
  const el = document.getElementById(n.toLowerCase());
  el && ao.observe(el);
});
// project filter buttons: show All / Web Development / Data & ML
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-f]");
  if (!b) return;
  $$("[data-f]").forEach((x) => {
    const on = x === b;
    x.setAttribute("aria-pressed", on);
    x.classList.toggle("btn-p", on);
    x.classList.toggle("btn-g", !on);
  });
  $$("#pgrid [data-c]").forEach((a) =>
    a.classList.toggle(
      "hidden",
      b.dataset.f !== "all" && a.dataset.c !== b.dataset.f,
    ),
  );
});
// scroll-to-top button
const toTop = $("#toTop");
addEventListener(
  "scroll",
  () => toTop.classList.toggle("hidden", scrollY < 600),
  { passive: true },
);
toTop.onclick = () => scrollTo({ top: 0 });
lucide.createIcons(); // draw all icons
