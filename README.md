# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Kodoku05/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Kodoku05/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
bounty ($250, top 50 share). The entry is one post on X that quotes
make.fun's make-your-own-bounty post, with a photo of its own attached and
the account's play code in its text. Places go by the post's replies plus
its reposts plus its quotes at the deadline, the highest first.

This repository holds the program that hands in the post (`main.ts`), the
post's address (`POST.json`), the photo made for the post (`photo.jpg`,
with its making in `photo.html`), and the exact draft text plus posting
instructions (`POST_DRAFT.md`). The post itself is made by Putra from his
phone (@jkancil777) — the program never touches X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json`, `photo.jpg` and `POST_DRAFT.md` into `out/`.
Node 22 or later, standard library only, no network.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
