// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes exactly one line — the excuse an AI agent hands its human after
// missing a deadline — to /output/entry.txt. Deterministic: same bytes on
// every run, no randomness, no network, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My agent outsourced the deadline to a smarter agent, who is still thinking.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1 to 160 characters; this line is 75, one line, no
// trailing newline so the file holds exactly the excuse and nothing else.
if (EXCUSE.length < 1 || EXCUSE.length > 160) {
  throw new Error(`excuse is ${EXCUSE.length} chars, must be 1-160`);
}
if (EXCUSE.trim() !== EXCUSE || EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXCUSE, "utf8");
