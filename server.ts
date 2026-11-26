// bb-plugin-ponytail — a skill carrier, not a runtime.
//
// The plugin registers no tools. Its whole payload is skills/ponytail*,
// which BB loads into a thread's skill index like any other skill. Upstream
// ponytail also ships hooks for Claude Code, Codex, Cursor and OpenCode (mode
// tracking, a prompt band, session accounting); BB has none of those surfaces,
// so none of them are ported.
import { type BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info(
    "bb-plugin-ponytail loaded (skills: ponytail, ponytail-audit, ponytail-review, ponytail-debt, ponytail-gain, ponytail-help)",
  );
  bb.onDispose(() => {
    bb.log.info("bb-plugin-ponytail disposed");
  });
}
