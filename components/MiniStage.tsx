"use client";

import { useEffect, useRef } from "react";
import type { DemoCard, DemoCfg, Dir } from "./demos";

const SHAPES: Record<string, string> = {
  circle: "●",
  square: "■",
  triangle: "▲",
  diamond: "◆",
  star: "★",
};
const ARROWS: Record<string, string> = { left: "←", right: "→", up: "↑", down: "↓" };
const VERDICT: Record<Dir, string> = {
  left: "← LEFT",
  right: "RIGHT →",
  tap: "TAP!",
  wait: "WAIT…",
};
const VERDICT_COLOR: Record<Dir, string> = {
  left: "#e2336b",
  right: "#35d0bc",
  tap: "#ffc62e",
  wait: "#ffc62e",
};
const DANGER_MODS = new Set(["TRAP", "DECOY", "DBL SWITCH"]);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function cardHtml(c: DemoCard): string {
  switch (c.kind) {
    case "number":
      return `<span class="mc-num">${c.number}</span>`;
    case "color":
      return `<span class="mc-swatch" style="background:${c.colorHex}"></span>`;
    case "shape":
      return `<span class="mc-shape">${SHAPES[c.shape ?? ""] ?? "?"}</span>`;
    case "stroop":
      return `<span class="mc-stroop" style="color:${c.colorHex}">${c.word}</span>`;
    case "arrow":
      return `<span class="mc-arrow">${ARROWS[c.arrow ?? ""] ?? "?"}</span>`;
    case "letter":
      return `<span class="mc-letter">${c.letter}</span>`;
    case "word":
      return `<span class="mc-emoji">${c.emoji}</span><span class="mc-word">${c.word}</span>`;
    case "equation":
      return `<span class="mc-eq">${c.eq!.a} + ${c.eq!.b} = ${c.eq!.shown}</span>`;
    case "dots":
      return `<span class="mc-dots">${"<i></i>".repeat(c.dots ?? 0)}</span>`;
    case "fraction":
      return `<span class="mc-frac">${c.frac!.n}<div class="bar"></div>${c.frac!.d}</span>`;
    case "pair":
      return `<span class="mc-pair">${c.pair!.a} · ${c.pair!.b}</span>`;
    default:
      return `<span class="mc-num">?</span>`;
  }
}

/** Animated demo stage — mirrors the in-app MiniStage loop. */
export default function MiniStage({ cfg }: { cfg: DemoCfg }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const banner = stage.querySelector<HTMLDivElement>(".banner")!;
    const barFill = stage.querySelector<HTMLElement>(".timerbar i")!;
    const hintL = stage.querySelector<HTMLElement>(".hint.l")!;
    const hintR = stage.querySelector<HTMLElement>(".hint.r")!;
    const holder = stage.querySelector<HTMLDivElement>(".card-holder")!;
    const verdict = stage.querySelector<HTMLDivElement>(".verdict")!;

    let alive = true;
    let i = 0;

    const setVerdict = (d: Dir | null) => {
      verdict.textContent = d ? VERDICT[d] : " ";
      verdict.style.color = d ? VERDICT_COLOR[d] : "transparent";
      hintL.classList.toggle("on", d === "left");
      hintR.classList.toggle("on", d === "right");
    };

    (async () => {
      while (alive) {
        const step = cfg.demo[i % cfg.demo.length];
        const el = document.createElement("div");
        el.className = "mini-card" + (step.dir === "tap" ? " trap" : "");
        el.innerHTML = cardHtml(step.card);
        holder.replaceChildren(el);
        el.style.transition = "none";
        el.style.transform = "rotate(-4deg) scale(.85)";
        el.style.opacity = "0";
        setVerdict(null);
        banner.classList.remove("flash");
        barFill.style.transition = "none";
        barFill.style.width = "100%";

        await sleep(50);
        if (!alive) return;
        el.style.transition = "opacity .16s, transform .16s";
        el.style.opacity = "1";
        el.style.transform = "rotate(0deg) scale(1)";
        barFill.style.transition = "width 1.4s linear";
        barFill.style.width = "0%";

        await sleep(cfg.fog ? 480 : 950);
        if (!alive) return;

        if (cfg.fog) {
          el.style.transition = "opacity .35s";
          el.style.opacity = "0.08";
          await sleep(320);
          if (!alive) return;
          el.style.transition = "opacity .08s";
          el.style.opacity = "1";
        }

        const d = step.dir;
        if (d === "wait") {
          setVerdict("wait");
          el.style.transition = "opacity .25s";
          el.style.opacity = "0.5";
          await sleep(650);
          if (!alive) return;
          el.style.opacity = "1";
          setVerdict("right");
          el.style.transition = "transform .15s";
          el.style.transform = "scale(1.15)";
          await sleep(160);
          el.style.transform = "scale(1)";
          await sleep(300);
          if (!alive) return;
          el.style.transition = "transform .26s, opacity .26s";
          el.style.transform = "translateX(170px) rotate(24deg)";
          el.style.opacity = "0";
          await sleep(280);
        } else if (d === "tap") {
          setVerdict("tap");
          el.style.transition = "transform .16s";
          el.style.transform = "scale(1.15)";
          await sleep(180);
          el.style.transform = "scale(1)";
          await sleep(160);
          el.style.transition = "transform .18s, opacity .18s";
          el.style.transform = "scale(0)";
          el.style.opacity = "0";
          await sleep(320);
        } else {
          setVerdict(d);
          banner.classList.add("flash");
          await sleep(320);
          if (!alive) return;
          const sgn = d === "right" ? 1 : -1;
          el.style.transition = "transform .28s, opacity .28s";
          el.style.transform = `translateX(${170 * sgn}px) rotate(${26 * sgn}deg)`;
          el.style.opacity = "0";
          await sleep(300);
        }
        await sleep(320);
        i++;
      }
    })();

    return () => {
      alive = false;
    };
  }, [cfg]);

  return (
    <div className="stage" ref={stageRef}>
      <div className="banner">{cfg.rule}</div>
      <div className="chips">
        {(cfg.mods ?? []).map((m) => (
          <span key={m} className={"chip" + (DANGER_MODS.has(m) ? " mod-danger" : "")}>
            {m}
          </span>
        ))}
      </div>
      <div className="timerbar">
        <i />
      </div>
      <div className="stage-mid">
        <span className="hint l">← {cfg.l}</span>
        <div className="card-holder" />
        <span className="hint r">{cfg.r} →</span>
      </div>
      <div className="verdict">&nbsp;</div>
    </div>
  );
}
