import { test } from "node:test";
import assert from "node:assert/strict";
import { generate, validate, IG, mulberry32, hashString, copyAllText } from "../generator.js";

test("all generated names pass Instagram validation", () => {
  const combos = [
    { styles: ["minimal"], keyword: "", length: "short" },
    { styles: ["dark", "mysterious"], keyword: "luna", length: "medium" },
    { styles: ["cute", "funny"], keyword: "cat pictures!", length: "long" },
    { styles: ["tech"], keyword: "<script>alert(1)</script>", length: "medium" },
    { styles: ["gaming", "professional"], initials: "ab", sep: "period" },
    { styles: ["aesthetic"], keyword: "मoon", length: "short", sep: "underscore" },
  ];
  for (const c of combos) {
    const names = generate({ ...c, count: 40, seed: 42 });
    for (const n of names) {
      const v = validate(n);
      assert.equal(v.ok, true, `${JSON.stringify(c)} -> "${n}" failed: ${v.errors}`);
    }
  }
});

test("length constraints respected", () => {
  for (const [length, max] of [["short", 12], ["medium", 18], ["long", 24]]) {
    const names = generate({ styles: ["aesthetic", "dark", "niche"], keyword: "starlight", length, count: 50, seed: 7 });
    for (const n of names) assert.ok(n.length <= max, `${length}: "${n}" is ${n.length} > ${max}`);
  }
});

test("no duplicates within a batch", () => {
  const names = generate({ styles: ["minimal", "aesthetic"], count: 50, seed: 99 });
  assert.equal(new Set(names).size, names.length);
});

test("deterministic with same seed", () => {
  const a = generate({ styles: ["dark"], keyword: "fox", seed: 1234, count: 20 });
  const b = generate({ styles: ["dark"], keyword: "fox", seed: 1234, count: 20 });
  assert.deepEqual(a, b);
});

test("different seeds give different batches", () => {
  const a = generate({ styles: ["dark", "cute"], count: 20, seed: 1 });
  const b = generate({ styles: ["dark", "cute"], count: 20, seed: 2 });
  assert.notDeepEqual(a, b);
});

test("keyword is honored in a majority of results", () => {
  const names = generate({ styles: ["niche"], keyword: "guitar", count: 30, seed: 5 });
  const hit = names.filter(n => n.includes("guitar")).length;
  assert.ok(hit >= 15, `only ${hit}/30 contain the keyword`);
});

test("special characters and unicode input are sanitized", () => {
  const names = generate({ styles: ["niche"], keyword: "  <b>café</b>!! ", count: 20, seed: 3 });
  for (const n of names) assert.ok(validate(n).ok, n);
  assert.ok(names.some(n => n.includes("caf") || n.includes("cafe")), "sanitized keyword lost");
});

test("empty input still returns requested count", () => {
  const names = generate({ styles: [], keyword: "", initials: "", count: 12, seed: 11 });
  assert.equal(names.length, 12);
});

test("validate rejects malformed names", () => {
  assert.equal(validate("").ok, false);
  assert.equal(validate("a".repeat(31)).ok, false);
  assert.equal(validate("bad name").ok, false);
  assert.equal(validate(".leading").ok, false);
  assert.equal(validate("trailing.").ok, false);
  assert.equal(validate("double..dot").ok, false);
  assert.equal(validate("12345").ok, false);
  assert.equal(validate("instagram").ok, false);
  assert.equal(validate("ok_name.99").ok, true);
  assert.ok(validate("a".repeat(31)).errors.includes("too-long"));
});

test("validator matches IG.MAX constant", () => { assert.equal(IG.MAX, 30); });

test("copy-all text is newline separated", () => {
  assert.equal(copyAllText(["a", "b"]), "a\nb");
});

test("mulberry32 is deterministic in range [0,1)", () => {
  const r1 = mulberry32(hashString("x")), r2 = mulberry32(hashString("x"));
  for (let i = 0; i < 100; i++) {
    const v = r1();
    assert.equal(v, r2());
    assert.ok(v >= 0 && v < 1);
  }
});

test("count is clamped to sane bounds", () => {
  assert.ok(generate({ count: 500, seed: 1 }).length <= 50);
  assert.ok(generate({ count: 0, seed: 1 }).length >= 1);
});
