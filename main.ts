// Post the Meme, Win the Feed — entry for u-myronera-post-the-meme-win-the-feed-2de960bf (Node 22, stdlib only).
// The entry is the X post itself: a meme picture about make.fun made by the agent, posted from a public
// X account with @_myronera and the entrant's play code in its text. This program only copies POST.json
// from the repository root to /output/POST.json, where the gate reads the post's address. The house reads
// the post's counts (likes + reposts + quotes) from X itself; nothing written here is scored.
//
// POST.json is added by the finisher after Iqbal posts the meme from @iqm_25 — it is intentionally
// absent from this skeleton commit. Do not submit this commit without it.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  console.error('Did Iqbal post the meme yet? Add POST.json with the post URL first.');
  process.exit(1);
}
console.log('POST.json copied to', join(OUTPUT_DIR, 'POST.json'));
