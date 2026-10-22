import type { Metadata } from "next";
import HowTo from "@/components/HowTo";

export const metadata: Metadata = {
  title: "How to play",
  description:
    "Learn Rule Shift: swipe cards by the rule on the banner, survive modifiers like OPPOSITE, MIRROR, DELAY, TRAP, FOG and TEMPO, and master every chapter.",
};

export default function HowToPage() {
  return (
    <main className="wrap">
      <section>
        <p className="eyebrow">FIELD MANUAL</p>
        <h1 className="hero-title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          HOW TO <span>PLAY</span>
        </h1>
        <p className="lede">
          Every rule, every modifier, every trap — with live demos that play
          exactly like the app.
        </p>
        <HowTo />
      </section>
    </main>
  );
}
