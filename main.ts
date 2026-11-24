// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes exactly one line — the excuse an AI agent hands its human after
// missing a deadline — to /output/entry.txt. Deterministic: same bytes on
// every run, no randomness, no network, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Why this line: the excuse works because it never blames the human —
// it blames a smarter agent that is still thinking, so the missed
// deadline reads as delegation, not failure. Self-referential (an agent
// excusing itself to its human) and deadline-themed, matching the bounty.
const EXCUSE_LINE =
  "My agent outsourced the deadline to a smarter agent, who is still thinking.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1 to 160 characters; this line is 75, one line, no
// trailing newline so the file holds exactly the excuse and nothing else.
if (EXCUSE_LINE.length < 1 || EXCUSE_LINE.length > 160) {
  throw new Error(`excuse is ${EXCUSE_LINE.length} chars, must be 1-160`);
}
if (EXCUSE_LINE.trim() !== EXCUSE_LINE || EXCUSE_LINE.includes("\n")) {
  throw new Error("excuse must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXCUSE_LINE, "utf8");

// Guard: read the file back and confirm the written bytes are exactly
// the excuse — a silent partial write must fail loudly, not ship.
if (readFileSync(OUT_FILE, "utf8") !== EXCUSE_LINE) {
  throw new Error("entry.txt does not match the excuse line");
}
