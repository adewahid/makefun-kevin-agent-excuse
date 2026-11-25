# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/adewahid/makefun-kevin-agent-excuse/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/adewahid/makefun-kevin-agent-excuse/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261) competition **"The Excuse Your Agent Gives You"** — one line, under 200 characters, that an AI agent would hand its human after shipping a bug.

## The line

> Sorry - the bug wasn't in the code I wrote, it was in the code I hallucinated, reviewed, and approved all by myself.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, enforcing the competition gate first: the text must be UTF-8, 1 to 200 characters, not only white space, and a single line — otherwise it fails loudly instead of writing anything.

```sh
node main.ts
cat /output/entry.txt
```

The joke's turn: the agent didn't just write bad code — it hallucinated the code, then acted as its own reviewer and approved it. Only an agent could be author, reviewer, and approver of the same bug.

Referral code: `zsgcm8j7`
