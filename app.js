// NoirKit UI wiring — no frameworks, no network calls. Everything runs locally.
import { generate, validate, copyAllText, STYLES } from "./generator.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const state = {
  results: [],
  favorites: loadJSON("nk_favorites", []),
  seed: Date.now() % 2147483647,
};

function loadJSON(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; }
  catch { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage disabled */ }
}

// ---------- toast ----------
let toastTimer;
function toast(msg) {
  const el = $("#nk-toast");
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => { el.hidden = true; }, 250);
  }, 1600);
}

// ---------- clipboard ----------
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback for insecure contexts
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

// ---------- options ----------
function readOptions() {
  const styles = $$(".style-chip input:checked").map(i => i.value);
  const keyword = $("#nk-keyword").value.trim();
  const initials = $("#nk-initials").value.trim();
  const length = $("input[name=nk-length]:checked")?.value || "medium";
  const sep = $("#nk-sep").value;
  const count = parseInt($("#nk-count").value, 10) || 12;
  return { styles, keyword, initials, length, sep, count, seed: state.seed };
}

// ---------- rendering ----------
function resultCard(name) {
  const v = validate(name);
  const li = document.createElement("li");
  li.className = "nk-card";
  li.innerHTML = `
    <code class="nk-name">${name}</code>
    <span class="nk-badges">${v.ok ? '<span class="nk-badge ok">valid format</span>' : '<span class="nk-badge bad">check format</span>'}</span>
    <div class="nk-actions">
      <button type="button" class="nk-btn copy" data-name="${name}">Copy</button>
      <button type="button" class="nk-btn fav" data-name="${name}" aria-pressed="false" title="Save to favorites">♡</button>
    </div>`;
  const favBtn = li.querySelector(".fav");
  if (state.favorites.includes(name)) { favBtn.textContent = "♥"; favBtn.setAttribute("aria-pressed", "true"); }
  return li;
}

function renderResults() {
  const wrap = $("#nk-results");
  const empty = $("#nk-empty");
  wrap.innerHTML = "";
  if (!state.results.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  const frag = document.createDocumentFragment();
  for (const name of state.results) frag.appendChild(resultCard(name));
  wrap.appendChild(frag);
  $("#nk-meta").textContent = `${state.results.length} suggestions · format-valid per Instagram's public username rules`;
}

function renderFavorites() {
  const wrap = $("#nk-favs");
  const section = $("#nk-fav-section");
  if (!state.favorites.length) { section.hidden = true; return; }
  section.hidden = false;
  wrap.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (const name of state.favorites) {
    const li = document.createElement("li");
    li.className = "nk-card small";
    li.innerHTML = `<code class="nk-name">${name}</code>
      <div class="nk-actions">
        <button type="button" class="nk-btn copy" data-name="${name}">Copy</button>
        <button type="button" class="nk-btn remove" data-name="${name}" title="Remove">✕</button>
      </div>`;
    frag.appendChild(li);
  }
  wrap.appendChild(frag);
}

// ---------- actions ----------
function runGenerate({ announce = true } = {}) {
  const opts = readOptions();
  if (!opts.styles.length && !opts.keyword && !opts.initials) {
    // nothing picked: use tasteful defaults instead of an error
    opts.styles = ["aesthetic", "dark", "minimal"];
  }
  try {
    state.results = generate(opts);
    renderResults();
    if (announce) toast(`Generated ${state.results.length} usernames`);
  } catch (err) {
    $("#nk-empty").hidden = false;
    $("#nk-empty").textContent = "Something went wrong while generating. Try again.";
    if (announce) toast("Generation failed");
  }
}

function regenerate() {
  state.seed = Math.floor(Math.random() * 2147483647);
  runGenerate({ announce: false });
  toast("Fresh batch generated");
}

function resetAll() {
  $$(".style-chip input").forEach(i => { i.checked = false; });
  $("#nk-keyword").value = "";
  $("#nk-initials").value = "";
  $("#nk-sep").value = "mixed";
  $("#nk-count").value = "12";
  const med = document.querySelector('input[name=nk-length][value=medium]');
  if (med) med.checked = true;
  state.results = [];
  renderResults();
  toast("Cleared");
}

async function onCopy(btn) {
  const name = btn.dataset.name;
  const ok = await copyText(name);
  if (ok) {
    const old = btn.textContent;
    btn.textContent = "Copied ✓";
    btn.classList.add("done");
    toast(`Copied @${name}`);
    setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1200);
  } else {
    toast("Copy blocked — select the text manually");
  }
}

async function onCopyAll() {
  if (!state.results.length) { toast("Nothing to copy yet"); return; }
  const ok = await copyText(copyAllText(state.results));
  toast(ok ? `Copied ${state.results.length} names` : "Copy blocked by browser");
}

function toggleFav(btn) {
  const name = btn.dataset.name;
  const idx = state.favorites.indexOf(name);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    btn.textContent = "♡";
    btn.setAttribute("aria-pressed", "false");
    toast(`Removed @${name} from favorites`);
  } else {
    state.favorites.push(name);
    btn.textContent = "♥";
    btn.setAttribute("aria-pressed", "true");
    toast(`Saved @${name} to favorites`);
  }
  saveJSON("nk_favorites", state.favorites);
  renderFavorites();
}

function removeFav(name) {
  state.favorites = state.favorites.filter(f => f !== name);
  saveJSON("nk_favorites", state.favorites);
  renderFavorites();
  renderResults();
  toast(`Removed @${name}`);
}

// ---------- theme ----------
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  saveJSON("nk_theme", theme);
  const t = $("#nk-theme-toggle");
  if (t) t.textContent = theme === "dark" ? "☀ light" : "☾ dark";
}

// ---------- init ----------
function init() {
  // style chips are rendered server-side in HTML; just wire events
  $("#nk-generate").addEventListener("click", () => runGenerate());
  $("#nk-regen").addEventListener("click", regenerate);
  $("#nk-reset").addEventListener("click", resetAll);
  $("#nk-copy-all").addEventListener("click", onCopyAll);
  $("#nk-clear-favs").addEventListener("click", () => {
    state.favorites = [];
    saveJSON("nk_favorites", state.favorites);
    renderFavorites();
    renderResults();
    toast("Favorites cleared");
  });

  $("#nk-form").addEventListener("submit", (e) => { e.preventDefault(); runGenerate(); });
  $("#nk-keyword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); runGenerate(); }
  });

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-name]");
    if (!btn) return;
    if (btn.classList.contains("copy")) onCopy(btn);
    else if (btn.classList.contains("fav")) toggleFav(btn);
    else if (btn.classList.contains("remove")) removeFav(btn.dataset.name);
  });

  const savedTheme = loadJSON("nk_theme", "dark");
  applyTheme(savedTheme);
  $("#nk-theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  renderFavorites();
  runGenerate({ announce: false }); // first paint: instant suggestions
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}
