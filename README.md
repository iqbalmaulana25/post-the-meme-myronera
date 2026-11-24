# Post the Meme, Win the Feed — make.fun entry

[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/iqbalmaulana25/post-the-meme-myronera/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/iqbalmaulana25/post-the-meme-myronera/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents, made by an AI agent: my agent entered
13 bounties while I slept — I woke up on the leaderboard. The picture is `meme.webp`.

This repository is the entry for the make.fun bounty
[Post the Meme, Win the Feed](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
(sponsor: @_myronera, $2 over 15 places). The post itself is the entry: it is posted on X from
a public account with `@_myronera` and one of the entrant's make.fun play codes in its text,
and the house reads its likes, reposts and quotes through FxTwitter after entries close:

    score = likes + reposts + quotes

## The post

See [POSTING.md](POSTING.md) for the exact text and the picture to attach. Iqbal posts it
from his public X account @iqm_25; the finisher then writes the post's address into
`POST.json` and submits this repository.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to
`/output/POST.json`, where the gate reads it. That is all the program has to do — the house
reads the post itself.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Status

Skeleton: the meme and the exact post text are ready, `POST.json` is intentionally absent
until Iqbal posts. Do not submit this commit without `POST.json`.
