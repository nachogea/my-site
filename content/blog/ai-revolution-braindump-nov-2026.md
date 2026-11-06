---
title: "AI revolution braindump of Nov 6th, 2026"
description: "Thoughts after Tessl's AI DevCon in NYC: software factories, how my team at Vantage builds with agents, and my own day-to-day workflow."
date: 2026-11-06
tags: ["ai", "career"]
readingTime: 4
---

I just attended [Tessl's AI DevCon](https://tessl.io/devcon) in NYC, and I came out of it more confused about where software developers will be in the next few years. I heard some inspiring talks that made me want to go all in on building my own "AI Factory," some that made me want to spend more time writing my own harness skills, and quite a few that proposed solutions to the context/memory management problem for both cloud and local agent environments. My mental model of a software factory is the following:

1. Work with humans and agents to spec out Linear/Jira tickets.
2. Feed the ticket to the factory (i.e., assign the ticket to the factory).
3. Review a PR that has already been thoroughly reviewed by agents in one way or another. Some PRs may be auto-approved based on either agentic or deterministic criteria.
4. Rinse and repeat, but tune the factory as you observe metrics trending in the wrong direction. Some metrics might be time from PR open to close and the number of comments on a PR.

I believe most engineering organizations have this so-called factory to some extent, but humans are probably still more in the loop between steps 1 and 3. I'll leave it at that. Lots of food for thought, but getting into philosophical interpretations is not the purpose of this post.

I'm one of the more tenured engineers at [Vantage](https://www.vantage.sh/), and in general I think we're doing a good job of evolving into this new world where the implementation of the code is becoming more trivial and we're focusing more on the intent and outcome of the work. I joined relatively early in the company's scaling journey, and a lot of my time went into writing out what I considered elegant scalable code (to solve real problems). It's wild to think that in such a short time frame (about 3 years), we've gone to writing almost no code by hand and, frankly, not caring too much about nit-picks like Ruby-isms. We still care about scalable abstractions and not over-engineering, but less so as all of this becomes "codified" into the LLMs. We still develop locally quite a bit using tools like Codex, Claude, and Cursor, and we rely on cloud agents more and more as we learn to multitask in this new world. Like everywhere, our ongoing battle is setting up the guardrails so we can continue to improve our product and move quicker to provide value to our customers. Nothing groundbreaking; I imagine most organizations are operating in a similar manner.

I've bounced around quite a bit between Claude, Cursor, and Codex. The more complicated the task, the more I like to build on the specs with all three. I know adversarial reviews are becoming debatable, but I still do some of that because, you know... non-determinism. I'm quite tired of hearing that word, but alas. As I feed in context from Notion docs, Slack threads, and empirical data (e.g. Datadog, read-only databases), I find myself working alongside the agents to build understanding and refine the specifications for the work that needs to be done. After that, I'm generally hands off. I'll have an agent implement the work, run several waves of local reviews, and make sure I (the human) understand the intent, what is changing, and the risks of rolling the work out to production. Then I open the PR for review. I make sure the PR description is digestible to me and hope that's enough for the other humans reviewing the work.

That's all, folks. Maybe it feels like I cut this short, and that's okay. Hopefully there's more to come where I can share more of my opinions and how I came to form them. It's wild to see the industry and the economy reshaped in real time, and I hope to stay optimistic by writing more.
