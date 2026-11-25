// Fortune Cookie for the Liquidated Trader
// Writes one fortune-cookie line (19 words, 100 bytes) to /output/entry.txt.
// Deterministic: no input, no network, no randomness — every run writes
// byte-identical output.
//
// Design: the winning pattern in the judged fortune-cookie comps is an
// oracular "You will ..." opening, one concrete image, and a twist in the
// final clause. Here the twist is the double meaning of "fortune": the
// trader came for wealth and leaves with the cookie's slip instead — the
// market kept the money, the cookie kept its promise. Rueful and warm,
// never cruel; no obvious liquidation pun, no lecture, no command.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will find the fortune you came for: the market kept your money, but the cookie kept its promise.";

// Gate from the brief: 1-160 chars, at most 20 words, one line.
const words = FORTUNE.trim().split(/\s+/).length;
if (FORTUNE.length < 1 || FORTUNE.length > 160 || words > 20 || FORTUNE.includes("\n")) {
  throw new Error(`fortune fails gate: ${FORTUNE.length} chars, ${words} words`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
