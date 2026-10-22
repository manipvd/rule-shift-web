export type Dir = "left" | "right" | "tap" | "wait";

export interface DemoCard {
  kind: string;
  number?: number;
  colorHex?: string;
  shape?: string;
  word?: string;
  emoji?: string;
  arrow?: string;
  letter?: string;
  eq?: { a: number; b: number; shown: number };
  dots?: number;
  frac?: { n: number; d: number };
  pair?: { a: number; b: number };
}

export interface DemoStep {
  card: DemoCard;
  dir: Dir;
}

export interface DemoCfg {
  rule: string;
  mods?: string[];
  l: string;
  r: string;
  fog?: boolean;
  demo: DemoStep[];
}

const num = (n: number): DemoCard => ({ kind: "number", number: n });
const col = (warm: boolean, hex: string): DemoCard => ({
  kind: "color",
  colorHex: hex,
});

export const DEMOS: Record<string, DemoCfg> = {
  parity: {
    rule: "Even → Right · Odd → Left",
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "right" },
      { card: num(7), dir: "left" },
      { card: num(2), dir: "right" },
      { card: num(9), dir: "left" },
    ],
  },
  warmCool: {
    rule: "Warm → Right · Cool → Left",
    l: "COOL",
    r: "WARM",
    demo: [
      { card: col(true, "#E5383B"), dir: "right" },
      { card: col(false, "#2F6BDB"), dir: "left" },
      { card: col(true, "#F07C1B"), dir: "right" },
      { card: col(false, "#12908F"), dir: "left" },
    ],
  },
  sameShape: {
    rule: "Same as last → Right · Different → Left",
    l: "DIFFERENT",
    r: "SAME AS LAST",
    demo: [
      { card: { kind: "shape", shape: "triangle" }, dir: "left" },
      { card: { kind: "shape", shape: "triangle" }, dir: "right" },
      { card: { kind: "shape", shape: "circle" }, dir: "left" },
      { card: { kind: "shape", shape: "circle" }, dir: "right" },
    ],
  },
  arrowDir: {
    rule: "Swipe the way the arrow points",
    l: "POINTS LEFT",
    r: "POINTS RIGHT",
    demo: [
      { card: { kind: "arrow", arrow: "left" }, dir: "left" },
      { card: { kind: "arrow", arrow: "right" }, dir: "right" },
      { card: { kind: "arrow", arrow: "right" }, dir: "right" },
      { card: { kind: "arrow", arrow: "left" }, dir: "left" },
    ],
  },
  opposite: {
    rule: "Even → Right · Odd → Left",
    mods: ["OPPOSITE"],
    l: "EVEN",
    r: "ODD",
    demo: [
      { card: num(4), dir: "left" },
      { card: num(7), dir: "right" },
      { card: num(2), dir: "left" },
      { card: num(9), dir: "right" },
    ],
  },
  prime: {
    rule: "Prime → Right · Not prime → Left",
    l: "NOT PRIME",
    r: "PRIME",
    demo: [
      { card: num(7), dir: "right" },
      { card: num(9), dir: "left" },
      { card: num(11), dir: "right" },
      { card: num(8), dir: "left" },
    ],
  },
  stroopInk: {
    rule: "Ink warm → Right · Ink cool → Left",
    l: "COOL INK",
    r: "WARM INK",
    demo: [
      { card: { kind: "stroop", word: "COOL", colorHex: "#E5383B" }, dir: "right" },
      { card: { kind: "stroop", word: "WARM", colorHex: "#2F6BDB" }, dir: "left" },
      { card: { kind: "stroop", word: "COOL", colorHex: "#F07C1B" }, dir: "right" },
      { card: { kind: "stroop", word: "WARM", colorHex: "#12908F" }, dir: "left" },
    ],
  },
  animal: {
    rule: "Animal → Right · Not an animal → Left",
    l: "NOT ANIMAL",
    r: "ANIMAL",
    demo: [
      { card: { kind: "word", word: "DOG", emoji: "🐶" }, dir: "right" },
      { card: { kind: "word", word: "APPLE", emoji: "🍎" }, dir: "left" },
      { card: { kind: "word", word: "FISH", emoji: "🐟" }, dir: "right" },
      { card: { kind: "word", word: "CHAIR", emoji: "🪑" }, dir: "left" },
    ],
  },
  delay: {
    rule: "Even → Right · Odd → Left",
    mods: ["DELAY 1"],
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "left" },
      { card: num(7), dir: "right" },
      { card: num(2), dir: "left" },
      { card: num(8), dir: "right" },
    ],
  },
  mirror: {
    rule: "Even → Right · Odd → Left",
    mods: ["MIRROR"],
    l: "EVEN",
    r: "ODD",
    demo: [
      { card: num(4), dir: "left" },
      { card: num(7), dir: "right" },
      { card: num(6), dir: "left" },
      { card: num(3), dir: "right" },
    ],
  },
  eqTrue: {
    rule: "True → Right · False → Left",
    l: "FALSE",
    r: "TRUE",
    demo: [
      { card: { kind: "equation", eq: { a: 3, b: 4, shown: 8 } }, dir: "left" },
      { card: { kind: "equation", eq: { a: 2, b: 2, shown: 4 } }, dir: "right" },
      { card: { kind: "equation", eq: { a: 5, b: 1, shown: 6 } }, dir: "right" },
      { card: { kind: "equation", eq: { a: 9, b: 3, shown: 7 } }, dir: "left" },
    ],
  },
  andOr: {
    rule: "Even AND above 5 → Right · Else → Left",
    mods: ["AND"],
    l: "ELSE",
    r: "BOTH",
    demo: [
      { card: num(8), dir: "right" },
      { card: num(4), dir: "left" },
      { card: num(7), dir: "left" },
      { card: num(10), dir: "right" },
    ],
  },
  trap: {
    rule: "Even → Right · Odd → Left",
    mods: ["TRAP"],
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "right" },
      { card: num(7), dir: "left" },
      { card: num(5), dir: "tap" },
      { card: num(2), dir: "right" },
    ],
  },
  twoBack: {
    rule: "Same as 2 ago → Right · Different → Left",
    mods: ["MEMORY"],
    l: "NO MATCH",
    r: "MATCH 2-BACK",
    demo: [
      { card: num(3), dir: "left" },
      { card: num(5), dir: "left" },
      { card: num(3), dir: "right" },
      { card: num(8), dir: "left" },
      { card: num(3), dir: "left" },
      { card: num(8), dir: "right" },
    ],
  },
  fog: {
    rule: "Above 5 → Right · 5 or less → Left",
    mods: ["FOG"],
    l: "≤5",
    r: ">5",
    fog: true,
    demo: [
      { card: num(8), dir: "right" },
      { card: num(3), dir: "left" },
      { card: num(9), dir: "right" },
      { card: num(2), dir: "left" },
    ],
  },
  tempo: {
    rule: "Even → Right · Odd → Left",
    mods: ["TEMPO"],
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "wait" },
      { card: num(7), dir: "left" },
      { card: num(8), dir: "wait" },
      { card: num(2), dir: "right" },
    ],
  },
  decoy: {
    rule: "Even → Right · Odd → Left",
    mods: ["DECOY"],
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "right" },
      { card: num(7), dir: "left" },
      { card: num(6), dir: "right" },
      { card: num(1), dir: "left" },
    ],
  },
  doubleSwitch: {
    rule: "Even → Right · Odd → Left",
    mods: ["DBL SWITCH"],
    l: "ODD",
    r: "EVEN",
    demo: [
      { card: num(4), dir: "right" },
      { card: num(7), dir: "left" },
      { card: num(2), dir: "right" },
      { card: num(5), dir: "left" },
    ],
  },
};
