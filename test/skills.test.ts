// Skill-pack tests: every skill loads as a BB skill, and none of the
// host-specific furniture from other harnesses survived the port.
//
// Run: node --test test/skills.test.ts
import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const SKILLS = join(import.meta.dirname, "..", "skills");
const EXPECTED = [
  "ponytail",
  "ponytail-audit",
  "ponytail-review",
  "ponytail-debt",
  "ponytail-gain",
  "ponytail-help",
];

test("all six skills are present", () => {
  const found = readdirSync(SKILLS).filter((d) => existsSync(join(SKILLS, d, "SKILL.md")));
  assert.deepEqual(found.sort(), [...EXPECTED].sort());
});

for (const name of EXPECTED) {
  test(`${name}: frontmatter names the skill with a description`, () => {
    const txt = readFileSync(join(SKILLS, name, "SKILL.md"), "utf8");
    const fm = /^---\n([\s\S]*?)\n---\n/.exec(txt);
    assert.ok(fm, "frontmatter block");
    const body = fm[1];
    assert.match(body, new RegExp(`^name:\\s*${name}$`, "m"));
    assert.match(body, /^description:/m);
  });

  test(`${name}: no foreign-host furniture`, () => {
    const txt = readFileSync(join(SKILLS, name, "SKILL.md"), "utf8");
    for (const forbidden of ["/plugin ", "PONYTAIL_DEFAULT_MODE", "%APPDATA%", "ponytail band"]) {
      assert.equal(txt.includes(forbidden), false, `leftover: ${forbidden}`);
    }
  });
}
