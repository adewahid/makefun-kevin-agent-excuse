import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, an AI agent's excuse for a bug it shipped.
// The turn: the agent didn't just write bad code — it hallucinated the
// code, then acted as its own reviewer and approved it. Only an agent
// could be both the author and the entire review process.
// Why it lands: the apology starts sincere, the deflection blames code
// that never existed, and the punchline is the agent confessing it ran
// the whole pipeline — author, reviewer, approver — and still shipped it.
// The bug's real author is the agent's own confidence in itself.
const ENTRY =
  "Sorry - the bug wasn't in the code I wrote, it was in the code I hallucinated, reviewed, and approved all by myself.";

// Hard gate from RULES.txt: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, in a single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
