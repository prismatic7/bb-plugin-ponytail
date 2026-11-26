---
name: ponytail-help
description: >
  Quick reference for ponytail levels, skills and commands. One-shot display.
  Use for /ponytail-help, "ponytail help", "how do I use ponytail".
---

# Ponytail Help

Display this reference card when invoked. One-shot, do NOT change mode,
write flag files, or persist anything.

## Levels

| Level | Ask for | What change |
|-------|---------|-------------|
| **Lite** | "ponytail lite" | Build what was asked, name the smaller option in one line. |
| **Full** | "ponytail" | The smallest complete change, a check where the logic needs one, and a reply that names what was skipped and any risk. Default. |
| **Ultra** | "ponytail ultra" | Also questions the request and pushes back before building. |

Level sticks until changed or session end.

## Skills

| Skill | Ask for | What it does |
|-------|---------|--------------|
| **ponytail** | "ponytail" | Lazy mode itself: least new code, clear replies that name skipped work and risks. |
| **ponytail-review** | "ponytail review" | Quality review of a diff: bugs, security, load, missing tests, speed, what to cut. Each finding says what goes wrong and how to fix it. |
| **ponytail-audit** | "ponytail audit" | The same quality review for the whole repo, ranked. |
| **ponytail-debt** | "ponytail debt" | Harvest `shortcut:` comments into a tracked ledger. |
| **ponytail-gain** | "ponytail gain" | Measured-impact scoreboard: less code, less cost, more speed. |
| **ponytail-help** | "ponytail help" | This card. |

In BB, skills are loaded by name rather than typed as slash commands: ask for
the skill and the agent reads it. The `$ponytail:…` and `/ponytail-…` forms
belong to Codex, Claude Code and OpenCode, where these skills also ship.

## Deactivate

Say "stop ponytail" or "normal mode". Resume by asking for the skill again.

## Levels in BB

There is no status band and no config file: BB shows skills, not status-line
furniture. A level applies to the conversation it was set in, and nothing is
persisted between threads. The upstream Claude Code build adds a prompt band, a
default-mode environment variable and a JSON config file; none of that exists
here.

## Update

This port tracks upstream `@dietrichgebert/ponytail`. Bump the version in
`package.json` and refresh `skills/` when upstream moves.

## More

Full docs + examples: https://github.com/DietrichGebert/ponytail
