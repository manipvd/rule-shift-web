import type { Metadata } from "next";
import "./globals.css";
import Nav, { Footer } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Rule Shift — Swipe by the rule",
    template: "%s · Rule Shift",
  },
  description:
    "Rule Shift is a fast-paced swipe game where the rule changes without warning. Sort cards left or right, survive modifiers, and climb endless levels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
