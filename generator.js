// NoirKit core generator — pure logic, no DOM. Runs in browser and Node (tests).

export const IG = {
  MAX: 30,
  MIN: 1,
  VALID: /^[A-Za-z0-9._]+$/,
};

// ---------- seeded RNG (deterministic, testable) ----------
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// ---------- word banks ----------
const WORDS = {
  noun: ["wolf", "raven", "moth", "ember", "haze", "velvet", "static", "lunar", "onyx", "fable",
    "dusk", "orchid", "nova", "quartz", "sable", "echo", "mirage", "tide", "bloom", "cipher",
    "frost", "willow", "cobra", "lynx", "pixel", "rune", "shadow", "silk", "thorn", "violet",
    "cloud", "drift", "flare", "gloom", "halo", "ivory", "jade", "karma", "lumen", "marble",
    "neon", "orbit", "prism", "quill", "riff", "sunra", "umbra", "wisp", "zephyr", "cinder"],
  adj: ["quiet", "soft", "cold", "pale", "dark", "slow", "lucky", "golden", "silver", "hollow",
    "wild", "gentle", "burning", "frozen", "electric", "velvet", "paper", "neon", "muted", "restless",
    "cosmic", "hazy", "tender", "grim", "lucid", "strange", "humble", "vivid", "lonely", "eternal"],
  cute: ["mochi", "bunny", "pudding", "peachy", "clover", "biscuit", "kitten", "doodle", "sprinkle", "jellybean",
    "honey", "puff", "marshmallow", "cherry", "daisy", "tater", "noodle", "waffle", "cocoa", "bubu",
    "pookie", "mittens", "cupcake", "sunny", "lilac", "toffee", "berry", "gummy", "panda", "sushi"],
  funny: ["noodle", "pickle", "banana", "hamster", "goose", "waffle", "goblin", "potato", "llama", "dingus",
    "bonk", "derp", "muffin", "gremlin", "snack", "doofus", "wobbly", "spaghetti", "cheese", "froggo",
    "blob", "gizmo", "wonky", "goofy", "bean", "chaos", "snorlax", "peanut", "dork", "silly"],
  tech: ["stack", "kernel", "buffer", "commit", "tensor", "vector", "shader", "debug", "syntax", "runtime",
    "protocol", "array", "byte", "cache", "daemon", "mutex", "regex", "sudo", "widget", "compile",
    "quantum", "binary", "script", "render", "crypto", "node", "cloud", "proxy", "async", "lambda"],
  game: ["raid", "respawn", "crit", "noob", "clutch", "frag", "spawn", "aimbot", "headshot", "grind",
    "boss", "quest", "loot", "combo", "speedrun", "tank", "healer", "crits", "ace", "aceclutch",
    "pubg", "valor", "frostbyte", "tryhard", "snipe", "clutchgod", "carry", "jungle", "midlane", "gg"],
  pro: ["studio", "works", "labs", "creative", "design", "media", "group", "craft", "atelier", "collective",
    "agency", "press", "co", "office", "project", "firm", "worksop", "studio24", "brand", "profile"],
};

export const STYLES = [
  { id: "minimal", label: "Minimal", desc: "Short, lowercase, clean." },
  { id: "aesthetic", label: "Aesthetic", desc: "Soft, pretty, flowy." },
  { id: "dark", label: "Dark", desc: "Shadowy and bold." },
  { id: "mysterious", label: "Mysterious", desc: "Cryptic and quiet." },
  { id: "cute", label: "Cute", desc: "Sweet and tiny." },
  { id: "funny", label: "Funny", desc: "Silly and memorable." },
  { id: "professional", label: "Professional", desc: "Clean and brandable." },
  { id: "gaming", label: "Gaming", desc: "Gamer energy." },
  { id: "tech", label: "Tech", desc: "Dev and startup vibes." },
  { id: "niche", label: "Niche", desc: "Built around your keyword." },
];

const PRE = ["the", "real", "its", "just", "oh", "hey", "mr", "ms", "not", "only", "always", "so", "definitely"];
const SUF = ["xx", "xo", "hq", "ig", "tv", "online", "official", "daily", "era", "core", "ish", "ify", "verse"];
const MOOD = ["luna", "void", "nocturne", "eerie", "reverie", "solace", "monolith", "whisper", "phantom", "obsidian"];

function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }

function sanitizeKeyword(raw) {
  return String(raw || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 20);
}

// ---------- validation (conservative Instagram-compatible rules) ----------
export function validate(name) {
  const errors = [];
  if (typeof name !== "string" || name.length === 0) errors.push("empty");
  else {
    if (name.length > IG.MAX) errors.push("too-long");
    if (name.length < IG.MIN) errors.push("too-short");
    if (!IG.VALID.test(name)) errors.push("bad-chars");
    if (name.startsWith(".")) errors.push("leading-period");
    if (name.endsWith(".")) errors.push("trailing-period");
    if (name.includes("..")) errors.push("double-period");
    if (!/[a-zA-Z]/.test(name)) errors.push("needs-letter");
    if (/instagram/i.test(name)) errors.push("reserved");
  }
  return { ok: errors.length === 0, errors };
}

function finalize(name, rng, length) {
  const max = length === "short" ? 12 : length === "long" ? 24 : 18;
  const min = length === "short" ? 3 : length === "long" ? 10 : 6;
  name = name.replace(/^[_\.]+/, "").replace(/[_\.]+$/, "").replace(/\.{2,}/g, ".");
  if (name.length > max) {
    // cut at the last separator inside the limit instead of mid-word
    let cut = -1;
    for (let i = Math.min(name.length, max) - 1; i >= 0; i--) {
      if (name[i] === "." || name[i] === "_") { cut = i; break; }
    }
    if (cut > 0) {
      name = name.slice(0, cut).replace(/[._]+$/, "");
    } else {
      name = name.slice(0, max); // single token (e.g. a long keyword) — clean slice
    }
  }
  if (name.length < min) {
    const pad = ["x", "o", "ix", "ux", "0", "7", "9"][Math.floor(rng() * 7)];
    name = (name + pad).slice(0, max);
  }
  return name.length >= min && name.length <= max ? name : null;
}

function decorate(name, rng, sep) {
  const r = rng();
  if (sep === "period" && r < 0.45) return pick(rng, ["", ...PRE]) + "." + name;
  if (sep === "underscore" && r < 0.45) return pick(rng, ["", ...PRE]) + "_" + name;
  if (sep === "none" && r < 0.30) return pick(rng, PRE) + name;
  if (r > 0.88) return name + (rng() < 0.5 ? String(Math.floor(rng() * 90) + 10) : "");
  return name;
}

function styleWords(style, rng) {
  switch (style) {
    case "cute": return pick(rng, WORDS.cute);
    case "funny": return pick(rng, WORDS.funny);
    case "tech": return pick(rng, WORDS.tech) + (rng() < 0.35 ? pick(rng, WORDS.tech) : "");
    case "gaming": return pick(rng, WORDS.game);
    case "professional": return pick(rng, WORDS.pro);
    case "dark": {
      const a = pick(rng, ["void", "dusk", "shade", "graves", "haze", "blackout", "grim"]);
      const b = pick(rng, WORDS.noun);
      if (rng() < 0.5) return a + pick(rng, ["", ".", "_"]) + b;
      return a + b;
    }
    case "mysterious": return pick(rng, MOOD) + (rng() < 0.5 ? pick(rng, [".", "", "_"]) + pick(rng, WORDS.noun) : "");
    case "aesthetic": return pick(rng, ["soft", "pale", "quiet", "golden", ""]) + pick(rng, WORDS.noun);
    case "minimal": return pick(rng, WORDS.noun).slice(0, 6);
    default: return pick(rng, WORDS.noun);
  }
}

/**
 * Generate usernames.
 * opts: { styles: string[], keyword: string, initials: string, length: 'short'|'medium'|'long',
 *         count: number, sep: 'period'|'underscore'|'none'|'mixed', seed: number }
 */
export function generate(opts = {}) {
  const styles = (opts.styles && opts.styles.length) ? opts.styles : ["aesthetic", "dark", "minimal"];
  const keyword = sanitizeKeyword(opts.keyword);
  const initials = sanitizeKeyword(opts.initials).slice(0, 4);
  const length = ["short", "medium", "long"].includes(opts.length) ? opts.length : "medium";
  const count = Math.max(1, Math.min(50, opts.count || 12));
  const sep = opts.sep || "mixed";
  const seedBase = (opts.seed ?? hashString(JSON.stringify([styles, keyword, initials, length, sep])));

  const results = [];
  const seen = new Set();
  let attempts = 0;

  while (results.length < count && attempts < count * 60) {
    attempts++;
    const rng = mulberry32((seedBase + attempts * 2654435761) >>> 0);
    const style = styles[Math.floor(rng() * styles.length)];
    const thisSep = sep === "mixed"
      ? (["period", "underscore", "none", "period", "underscore"][Math.floor(rng() * 5)])
      : sep;

    let core = "";
    const mode = rng();

    if (keyword && (mode < 0.55 || style === "niche")) {
      // keyword-led
      const r = rng();
      if (r < 0.18) core = keyword + "." + styleWords(style, rng);
      else if (r < 0.36) core = keyword + "_" + styleWords(style, rng);
      else if (r < 0.5) core = styleWords(style, rng) + "." + keyword;
      else if (r < 0.62) core = styleWords(style, rng) + keyword;
      else if (r < 0.74) core = pick(rng, PRE) + "." + keyword;
      else if (r < 0.86) core = keyword + pick(rng, SUF);
      else core = keyword;
    } else if (initials && mode < 0.75) {
      const r = rng();
      if (r < 0.3) core = initials + "." + styleWords(style, rng);
      else if (r < 0.55) core = initials + "_" + keywordOr(styleWords(style, rng), keyword, rng);
      else if (r < 0.75) core = initials + styleWords(style, rng);
      else core = pick(rng, PRE) + "." + initials;
    } else if (style === "minimal" && rng() < 0.5) {
      core = pick(rng, WORDS.noun).slice(0, 5 + Math.floor(rng() * 3)) + (rng() < 0.4 ? String(Math.floor(rng() * 90) + 10) : "");
    } else {
      core = styleWords(style, rng);
      if (rng() < 0.4) core = core + (thisSep === "period" ? "." : thisSep === "underscore" ? "_" : "") + styleWords(style, rng);
    }

    core = decorate(core, rng, thisSep);
    let name = finalize(core, rng, length);
    if (!name) continue;
    name = name.toLowerCase();

    const v = validate(name);
    if (!v.ok || seen.has(name) || results.includes(name)) continue;
    seen.add(name);
    results.push(name);
  }

  // last-resort filler so count is honored even with narrow inputs
  let n = 1;
  while (results.length < count) {
    const fallback = `${sanitizeKeyword(keyword) || pick(rngSafe(seedBase + n), WORDS.noun)}${pick(rngSafe(seedBase + n * 7), SUF)}${n}`;
    const f = finalize(fallback, rngSafe(seedBase + n * 3), "long");
    if (validate(f).ok && !seen.has(f)) { seen.add(f); results.push(f); }
    n++;
    if (n > 500) break;
  }
  return results;
}

function keywordOr(fallback, keyword, rng) { return keyword || fallback; }
function rngSafe(seed) { return mulberry32(seed >>> 0); }

export function copyAllText(names) { return names.join("\n"); }
