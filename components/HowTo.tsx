"use client";

import { useState } from "react";
import MiniStage from "./MiniStage";
import { DEMOS } from "./demos";

const TABS = [
  { id: "basics", label: "BASICS" },
  { id: "easy", label: "EASY 1–10" },
  { id: "normal", label: "NORMAL 11–30" },
  { id: "hard", label: "HARD 31–60" },
  { id: "expert", label: "EXPERT+" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface GuideItem {
  demo: keyof typeof DEMOS;
  lvl: number;
  title: string;
  how: string;
  tip: string;
}

const EASY: GuideItem[] = [
  {
    demo: "parity", lvl: 1, title: "Even or odd",
    how: "Look at the number. Even goes right, odd goes left.",
    tip: "Check the last digit: 0, 2, 4, 6, 8 are even.",
  },
  {
    demo: "warmCool", lvl: 1, title: "Warm or cool",
    how: "Reds, oranges and yellows are warm; blues and teals are cool.",
    tip: "Warm = fire and sun. Cool = water and ice.",
  },
  {
    demo: "sameShape", lvl: 1, title: "Same shape as last",
    how: "Compare with the card before it. The first card is always a left swipe.",
    tip: "You only ever need to remember one card back.",
  },
  {
    demo: "arrowDir", lvl: 1, title: "Follow the arrow",
    how: "The simplest rule — it trains your thumb to react without thinking.",
    tip: "Expect this to come back later wearing a modifier.",
  },
  {
    demo: "opposite", lvl: 6, title: "Opposite",
    how: "A modifier chip appears under the banner. OPPOSITE means do the reverse.",
    tip: "Decide what the rule says first, then flip it.",
  },
  {
    demo: "prime", lvl: 8, title: "Prime numbers",
    how: "Primes divide only by 1 and themselves: 2, 3, 5, 7, 11, 13… 1 is not prime.",
    tip: "Learn the primes up to 13 — most cards stay small.",
  },
];

const NORMAL: GuideItem[] = [
  {
    demo: "stroopInk", lvl: 15, title: "Ink color, not the word",
    how: "The word and its ink disagree on purpose. Ignore the word, read the ink.",
    tip: "Squint a little — not reading is the whole skill.",
  },
  {
    demo: "animal", lvl: 15, title: "Animal or not",
    how: "Cards show an emoji with its name — animals, fruit, veggies and objects. Animals go right.",
    tip: "Fish and birds count as animals too.",
  },
  {
    demo: "delay", lvl: 18, title: "Delay",
    how: "Answer for the PREVIOUS card, not the one on screen — the first card grades itself, then each swipe answers the card before.",
    tip: "Keep the last card in your head while you read the new one.",
  },
  {
    demo: "mirror", lvl: 22, title: "Mirror",
    how: "The sides swap — the edge labels move. Follow the labels, not your habit.",
    tip: "Glance at the edge labels before every swipe.",
  },
  {
    demo: "eqTrue", lvl: 25, title: "True or false math",
    how: "Each card is a short equation. Decide if it's correct.",
    tip: "You don't need the exact answer — just whether the shown one is plausible.",
  },
  {
    demo: "andOr", lvl: 28, title: "AND / OR",
    how: "AND: both conditions must be true. OR: either one is enough.",
    tip: "Check the easy condition first, then the other only if it passes.",
  },
  {
    demo: "trap", lvl: 30, title: "Trap card",
    how: "A golden card means don't swipe — just tap it. Swiping a trap costs a life.",
    tip: "Gold is the signal, whatever is printed on the card.",
  },
];

const HARD: GuideItem[] = [
  {
    demo: "twoBack", lvl: 35, title: "Two cards back",
    how: "Compare with the card before the previous one. First two cards are always left.",
    tip: "Keep a two-card queue in your head and update it every swipe.",
  },
  {
    demo: "fog", lvl: 40, title: "Fog",
    how: "The card fades almost at once. Read it fast and swipe from memory.",
    tip: "Eyes on the center; swipe as soon as you've read it.",
  },
  {
    demo: "tempo", lvl: 45, title: "Tempo",
    how: "Swipe on the beat — the card pulses. If it sits still and dim, wait for it.",
    tip: "Ride the rhythm instead of reacting late.",
  },
  {
    demo: "decoy", lvl: 55, title: "Decoy banner",
    how: "A fake banner flashes to bait you. Only the yellow flash is a real rule change.",
    tip: "Real changes flash yellow — anything else can be ignored.",
  },
  {
    demo: "doubleSwitch", lvl: 60, title: "Double switch",
    how: "The rule can change twice within a couple of cards. After one flash, expect another.",
    tip: "Re-check the banner right after every swipe.",
  },
];

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <div className="guide-item">
      <MiniStage cfg={DEMOS[item.demo]} />
      <div>
        <div className="lvl">LEVEL {item.lvl}+</div>
        <div className="item-title">{item.title}</div>
        <p className="how">{item.how}</p>
        <p className="tip">
          <b>Tip: </b>
          {item.tip}
        </p>
      </div>
    </div>
  );
}

function Basics() {
  return (
    <>
      <p className="lede" style={{ marginBottom: 24 }}>
        Swipe cards left or right by the rule on the banner. The rule changes
        without warning — keep reading it.
      </p>

      <h3>Quick start</h3>
      <div className="step-row">
        {[
          ["1", "Read the banner", "It says which cards go right and which go left."],
          ["2", "Swipe the card", "Before the timer bar runs out. A wrong swipe costs a life."],
          ["3", "Watch for changes", "A yellow flash means the rule just changed."],
        ].map(([n, h, p]) => (
          <div key={n} className="step">
            <div className="step-num">{n}</div>
            <b>{h}</b>
            <p>{p}</p>
          </div>
        ))}
      </div>

      <h3>Reading the screen</h3>
      <div className="card" style={{ margin: "12px 0 24px" }}>
        {[
          "Rule banner — what to do with each card. Flashes yellow on a change.",
          "Top bar — time left for THIS card. Shrinks as levels rise.",
          "Second bar — level progress (cards done / total).",
          "Edge labels — which answer lives on each side.",
          "Combo · score — streaks multiply points up to x4.",
          "Hearts — three lives (one in Survival); lose them all and the run ends.",
        ].map((t, i) => (
          <div key={i} className="legend-row">
            <span className="legend-dot">{i + 1}</span>
            <span>{t}</span>
          </div>
        ))}
      </div>

      <h3>Scoring</h3>
      <div className="card" style={{ margin: "12px 0 24px" }}>
        {[
          ["Correct swipe", "10 points"],
          ["Combo", "x2 at 5 in a row, x3 at 10, x4 at 20"],
          ["Fast answer", "Up to +5 for answering under 0.6s"],
          ["Rule switch", "+20 for the first correct answer after a change"],
          ["Stars", "70% / 85% / 95% accuracy = 1 / 2 / 3 stars"],
        ].map(([k, v]) => (
          <div key={k} className="score-row">
            <span className="score-key">{k}</span>
            <span className="score-val">{v}</span>
          </div>
        ))}
      </div>

      <h3>Five tips</h3>
      <div className="card" style={{ marginTop: 12 }}>
        {[
          "Say the rule out loud — even silently, it makes switches easier.",
          "Look at the card, then the banner — changes are easy to miss.",
          "Slow down at high combo — a miss at x4 costs more than a late swipe at x1.",
          "Practice early levels for stars to build reflexes safely.",
          "Take breaks — reflex games get harder when you're tired.",
        ].map((t, i) => (
          <div key={i} className="legend-row">
            <span className="legend-dot">{i + 1}</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function Expert() {
  return (
    <>
      <h3>
        Expert <span style={{ color: "var(--hi)" }}>61–100</span> · Chaos{" "}
        <span style={{ color: "var(--hi)" }}>101+</span>
      </h3>
      <p className="sub">
        Nothing new to learn — only combinations of everything you know. There
        is no final level.
      </p>
      <div className="card">
        {[
          ["Stacked modifiers", "Up to three on one rule — 'prime, opposite, delay 1'. Take it one piece at a time."],
          ["Boss levels", "Levels ending in 0 stack at least three rules, extra modifiers and a forced double switch."],
          ["Breather levels", "Levels ending in 5 are ~20% easier. Use them to rebuild your combo."],
          ["Checkpoints", "Losing never sends you back to level 1 — every cleared level stays unlocked."],
          ["Replay for stars", "Levels are identical every run — go back and perfect them."],
          ["Chaos", "Past level 101, modifiers can appear and vanish mid-rule. Trust the banner first."],
        ].map(([h, p]) => (
          <div key={h} className="legend-row" style={{ display: "block" }}>
            <b>{h}</b>
            <p style={{ color: "var(--ink-dim)", fontSize: 14 }}>{p}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function HowTo() {
  const [tab, setTab] = useState<TabId>("basics");

  return (
    <>
      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={"tab" + (tab === t.id ? " active" : "")}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "basics" && <Basics />}

      {tab === "easy" && (
        <>
          <h3>
            Easy <span style={{ color: "var(--hi)" }}>LEVELS 1–10</span>
          </h3>
          <p className="sub">
            One rule at a time, generous timers. Learn to read the banner before
            you swipe.
          </p>
          {EASY.map((i) => <GuideCard key={i.title} item={i} />)}
        </>
      )}

      {tab === "normal" && (
        <>
          <h3>
            Normal <span style={{ color: "var(--hi)" }}>LEVELS 11–30</span>
          </h3>
          <p className="sub">
            Conflicting signals and real modifiers. The card starts lying to you.
          </p>
          {NORMAL.map((i) => <GuideCard key={i.title} item={i} />)}
        </>
      )}

      {tab === "hard" && (
        <>
          <h3>
            Hard <span style={{ color: "var(--hi)" }}>LEVELS 31–60</span>
          </h3>
          <p className="sub">
            Memory rules and deal-level tricks. The game plays you now.
          </p>
          {HARD.map((i) => <GuideCard key={i.title} item={i} />)}
        </>
      )}

      {tab === "expert" && <Expert />}
    </>
  );
}
