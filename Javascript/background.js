/* ============================================================
   js/background.js | Portfolio of AVINASH PRATAP SINGH
   Animated background: drifting data-network canvas (#bg) + soft cursor glow (#cg).
   Colours follow the light/dark theme toggle automatically.
   ============================================================ */
(() => {
  const cv = document.getElementById("bg"),
    cg = document.getElementById("cg");
  if (!cv) return;
  const cx = cv.getContext("2d"),
    RM = matchMedia("(prefers-reduced-motion:reduce)").matches,
    root = document.documentElement;
  // dot colour, line colour (r,g,b) and line strength for each theme
  const THEME = {
    dark: { dot: "rgba(56,189,248,.75)", line: "34,211,238", a: 0.2 },
    light: { dot: "rgba(37,99,235,.9)", line: "37,99,235", a: 0.45 },
  };
  const pick = () => (root.classList.contains("dark") ? THEME.dark : THEME.light);
  let T = pick(),
    W,
    H,
    P = [],
    raf = 0;

  const init = () => {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
    P = Array.from({ length: W < 700 ? 22 : 46 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  };
  const draw = () => {
    cx.clearRect(0, 0, W, H);
    cx.fillStyle = T.dot;
    for (const a of P) {
      a.x = (a.x + a.vx + W) % W;
      a.y = (a.y + a.vy + H) % H;
      cx.fillRect(a.x, a.y, 2, 2);
    }
    for (let i = 0; i < P.length; i++)
      for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
        if (d < 120) {
          cx.strokeStyle = `rgba(${T.line},${T.a * (1 - d / 120)})`;
          cx.beginPath();
          cx.moveTo(P[i].x, P[i].y);
          cx.lineTo(P[j].x, P[j].y);
          cx.stroke();
        }
      }
    if (!RM) raf = requestAnimationFrame(draw);
  };
  init();
  draw();

  // rebuild on width change only (avoids reset when the mobile address bar moves)
  let lastW = innerWidth,
    rt;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (innerWidth !== lastW) {
        lastW = innerWidth;
        init();
        if (RM) draw();
      }
    }, 200);
  });
  // pause when the tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (RM) return;
    document.hidden ? cancelAnimationFrame(raf) : draw();
  });
  // recolour when the theme button toggles the "dark" class
  new MutationObserver(() => {
    T = pick();
    if (RM) draw();
  }).observe(root, { attributes: true, attributeFilter: ["class"] });

  // cursor glow (mouse devices only)
  if (cg && matchMedia("(hover:hover)").matches && !RM) {
    let mt = 0,
      mx = 0,
      my = 0;
    addEventListener(
      "pointermove",
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        mt ||
          (mt = requestAnimationFrame(() => {
            mt = 0;
            cg.style.transform = `translate(${mx}px,${my}px)`;
          }));
      },
      { passive: true },
    );
  }
})();
