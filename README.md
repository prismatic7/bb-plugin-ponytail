# bb-plugin-ponytail

Lazy senior dev mode for BB agents: the smallest change that fully solves the
task, and a reply a busy human understands in one read. A port of
[ponytail](https://github.com/DietrichGebert/ponytail) 5.3.3, carried as six
skills rather than hooks.

## Skills

| Skill | Ask for | What it does |
|---|---|---|
| `ponytail` | "ponytail", "ponytail lite", "ponytail ultra" | The mode itself: least new code, reply names what was skipped and any risk. |
| `ponytail-review` | "ponytail review" | Quality review of a diff: bugs, security, load, missing tests, speed, what to cut. |
| `ponytail-audit` | "ponytail audit" | The same review for a whole repo, ranked. |
| `ponytail-debt` | "ponytail debt" | Harvest `shortcut:` comments into a tracked ledger. |
| `ponytail-gain` | "ponytail gain" | Measured-impact scoreboard: less code, less cost, more speed. |
| `ponytail-help` | "ponytail help" | Reference card. |

The plugin registers no tools. BB loads these as skills, so any provider in a
BB thread — Hermes, Antigravity, Codex, Claude Code, Pi — can use them.

## Install

```sh
npm install
npm run bundle          # bb plugin build → dist/
bb plugin install . --yes
bb plugin reload ponytail
```

## Development

```sh
npm run build      # tsc typecheck
npm test           # skill frontmatter + foreign-host leftovers
npm run bundle     # bb plugin build
```

## What was left behind

Upstream's hooks — mode tracking, the prompt band, session accounting,
subagent wiring — attach to Claude Code, Codex, Cursor, Qoder and OpenCode
plugin APIs. BB has no equivalent surfaces, so they are not ported; the levels
are set in words and apply to the conversation. See [NOTICE](./NOTICE).
