/* NSS Field Manual — search, theme, mobile nav */
(() => {
  "use strict";
  const MAX = 12, DELAY = 80, SNIP = 140, LEAD = 40;
  const KEY = "nss-manual-theme";
  const input = document.getElementById("q");
  const clearBtn = document.getElementById("clear");
  const results = document.getElementById("results");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-btn");
  const themeBtn = document.getElementById("theme-btn");
  const backdrop = document.getElementById("backdrop");
  const entries = window.NSS_SEARCH || [];
  let timer = null;

  const norm = s => s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  function score(e, terms) {
    const t = norm(e.title), b = norm(e.text);
    let s = 0;
    for (const w of terms) {
      if (t.includes(w)) s += 10;
      else if (b.includes(w)) s += 1;
      else return 0;
    }
    return s;
  }

  function excerpt(text, term) {
    const i = norm(text).indexOf(term);
    const a = Math.max(0, i - LEAD), c = a + SNIP;
    return (a ? "…" : "") + text.slice(a, c).trim() + (c < text.length ? "…" : "");
  }

  function render() {
    const q = input.value.trim();
    const terms = norm(q).split(/\s+/).filter(Boolean);
    clearBtn.hidden = !terms.length;
    results.replaceChildren();
    results.hidden = !terms.length;
    nav.hidden = terms.length > 0;
    if (!terms.length) return;
    const hits = entries.map(e => ({ e, s: score(e, terms) }))
      .filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, MAX);
    if (!hits.length) {
      const p = document.createElement("p");
      p.textContent = "No matches.";
      p.style.cssText = "font-size:12px;color:var(--text-mute);padding:8px";
      results.append(p);
      return;
    }
    for (const { e } of hits) {
      const a = document.createElement("a");
      a.href = e.url;
      const strong = document.createElement("strong");
      strong.textContent = e.title;
      a.append(strong);
      const sm = document.createElement("small");
      sm.textContent = excerpt(e.text, terms[0]);
      a.append(sm);
      results.append(a);
    }
  }

  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
    backdrop.hidden = !open;
  }

  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.textContent = t === "light" ? "Dark" : "Light";
    try { localStorage.setItem(KEY, t); } catch {}
  }

  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(render, DELAY);
  });
  clearBtn.addEventListener("click", () => {
    input.value = ""; render(); input.focus();
  });
  menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("nav-open")));
  backdrop.addEventListener("click", () => setMenu(false));
  themeBtn.addEventListener("click", () =>
    applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault(); setMenu(true); input.focus();
    }
    if (e.key === "Escape") setMenu(false);
  });
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") applyTheme(saved);
  } catch {}
  const q = new URLSearchParams(location.search).get("q");
  if (q) { input.value = q; render(); }
})();
