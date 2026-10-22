import Link from "next/link";
import MiniStage from "@/components/MiniStage";
import { DEMOS } from "@/components/demos";

const MODES = [
  {
    icon: "🧗",
    title: "Climb mode",
    body: "An endless level map. Each level is generated from a seed, so it's identical every run — replay any cleared level to perfect your stars. Levels ending in 0 are boss levels; levels ending in 5 are breathers.",
  },
  {
    icon: "📅",
    title: "Daily challenge",
    body: "One seeded level per day, same for every player. Finish it to keep your daily streak alive — miss the day and the streak resets.",
  },
  {
    icon: "💀",
    title: "Survival mode",
    body: "One life. Rules keep shifting until you slip. Your best run is saved as the number of levels cleared.",
  },
];

const FEATURES = [
  {
    icon: "🃏",
    title: "30+ rules",
    body: "Parity, primes, colors, shapes, Stroop ink, arrows, letters, words, equations, fractions, dots, pairs and N-back memory — each with its own card style.",
  },
  {
    icon: "⚡",
    title: "11 modifiers",
    body: "OPPOSITE flips the rule, MIRROR swaps the sides, DELAY grades the previous card, AND/OR combine rules, and TRAP, FOG, TEMPO, DECOY, DBL SWITCH and CHAOS bend the deal itself.",
  },
  {
    icon: "🔥",
    title: "Combo scoring",
    body: "10 points per correct swipe, multiplied x2 at a 5-streak, x3 at 10 and x4 at 20. Fast answers earn up to +5, and the first correct swipe after a rule change earns +20.",
  },
  {
    icon: "⭐",
    title: "Stars & accuracy",
    body: "Earn 1 / 2 / 3 stars per level at 70% / 85% / 95% accuracy. Every cleared level stays unlocked as a checkpoint — losing never sends you back to level 1.",
  },
  {
    icon: "📈",
    title: "Stats that persist",
    body: "Best score, total swipes, accuracy, rounds played, day streaks and best survival run are all tracked on-device.",
  },
  {
    icon: "🔌",
    title: "Fully offline",
    body: "No accounts, no ads, no servers. Every level is generated locally from a seed and all progress lives on your phone.",
  },
];

const CHAPTERS = [
  ["Easy", "1–10", "Learn to swipe: odd/even, warm/cool, arrows, and your first modifier."],
  ["Normal", "11–30", "Stroop conflicts, word categories, mirror sides, real math, and rule combos."],
  ["Hard", "31–60", "N-back memory, fog, tempo beats, decoy banners and double switches."],
  ["Expert", "61–100", "Everything stacks — up to three modifiers on one rule."],
  ["Chaos", "101+", "No final level. Modifiers can appear and vanish mid-rule."],
];

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <div>
          <p className="eyebrow">SWIPE·BY·THE·RULE</p>
          <h1 className="hero-title">
            RULE <span>SHIFT</span>
          </h1>
          <p className="lede">
            A reflex game with one twist: the rule keeps changing. Read the
            banner, sort each card left or right before the timer runs out, and
            adapt the instant the rule shifts — because it will, without warning.
          </p>
          <div className="pill-row">
            <span className="pill"><b>5</b> CHAPTERS</span>
            <span className="pill"><b>30+</b> RULES</span>
            <span className="pill"><b>11</b> MODIFIERS</span>
            <span className="pill"><b>3</b> GAME MODES</span>
            <span className="pill"><b>∞</b> LEVELS</span>
          </div>
          <div className="btn-row">
            <Link href="/how-to" className="btn">
              HOW TO PLAY
            </Link>
            <Link href="/privacy" className="btn ghost">
              PRIVACY
            </Link>
          </div>
        </div>
        <div className="phone">
          <MiniStage cfg={DEMOS.parity} />
        </div>
      </section>

      <section>
        <h2>Game modes</h2>
        <p className="sub">Three ways to play, one skill: adaptability.</p>
        <div className="grid cols-3">
          {MODES.map((m) => (
            <div key={m.title} className="card">
              <span className="icon">{m.icon}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Features</h2>
        <p className="sub">Everything in the app, at a glance.</p>
        <div className="grid cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card">
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>The climb</h2>
        <p className="sub">
          Difficulty is a budget that grows with every level — spent on harder
          rules, more rule slots and nastier modifiers.
        </p>
        <div className="card">
          {CHAPTERS.map(([name, range, desc]) => (
            <div key={name} className="score-row">
              <span className="score-key">
                <b style={{ color: "var(--hi)" }}>{name}</b> · levels {range}
              </span>
              <span className="score-val" style={{ maxWidth: "60%" }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="cta-band">
          <h2>Think you can keep up?</h2>
          <p className="sub" style={{ margin: "8px auto 24px", maxWidth: 520 }}>
            The rule will change. Your brain will lag. That's the whole game.
          </p>
          <Link href="/how-to" className="btn">
            LEARN THE RULES
          </Link>
        </div>
      </section>
    </main>
  );
}
