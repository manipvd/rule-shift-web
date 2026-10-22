import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "Terms and conditions for using the Rule Shift mobile game.",
};

export default function TermsPage() {
  return (
    <main className="wrap legal">
      <section>
        <p className="eyebrow">LEGAL</p>
        <h1 className="hero-title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          TERMS &amp; <span>CONDITIONS</span>
        </h1>
        <p className="updated">Last updated: October 2026 · Applies to Rule Shift v1.0.3 and later</p>

        <h2>1. Acceptance</h2>
        <p>
          By downloading, installing or playing Rule Shift ("the app"), you
          agree to these Terms &amp; Conditions. If you do not agree, do not
          install or use the app. These terms form a binding agreement between
          you and the app's publisher ("we", "us").
        </p>

        <h2>2. License</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          license to install and use the app on devices you own or control,
          solely for personal, non-commercial entertainment, subject to these
          terms and the applicable app store's terms of service.
        </p>

        <h2>3. The app</h2>
        <p>
          Rule Shift is a reflex/puzzle game in which you sort cards according
          to a changing rule. Features, levels, rules and modifiers may be
          added, changed or removed in updates. The app is provided free of
          charge and contains no in-app purchases, subscriptions or
          advertisements.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile or modify the app, except where such restriction is prohibited by law;</li>
          <li>Use the app to violate any law or third-party right;</li>
          <li>Use cheats, automation or exploits to misrepresent scores if competitive features are added;</li>
          <li>Redistribute, resell, or repackage the app or its assets;</li>
          <li>Remove or alter any copyright, trademark or attribution notices.</li>
        </ul>

        <h2>5. Intellectual property</h2>
        <p>
          The app, including its code, artwork, game mechanics presentation,
          text, the "Rule Shift" name and logo, is owned by the publisher and
          protected by copyright and other intellectual-property laws. These
          terms do not transfer any ownership rights to you.
        </p>

        <h2>6. Privacy</h2>
        <p>
          Your use of the app is also governed by our{" "}
          <a href="/privacy">Privacy Policy</a>. In short: the app collects no
          personal data; all progress is stored locally on your device.
          Uninstalling the app permanently deletes all stored game data — we
          cannot recover it.
        </p>

        <h2>7. Health and gameplay notice</h2>
        <ul>
          <li>Rule Shift is a fast-paced reaction game with flashing colors and rapid visual changes. If you are sensitive to flashing lights or have photosensitive epilepsy, consult a physician before playing.</li>
          <li>Take regular breaks. Stop playing if you feel eye strain, dizziness or discomfort.</li>
          <li>The game involves repeated swiping motions; play in a comfortable position.</li>
        </ul>

        <h2>8. No warranties</h2>
        <p>
          The app is provided <b>"as is"</b> and <b>"as available"</b> without
          warranties of any kind, express or implied, including but not limited
          to merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the app will be
          uninterrupted, error-free, or compatible with every device.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any
          indirect, incidental, special, consequential or punitive damages —
          including lost data, lost progress, or device issues — arising from
          your use of or inability to use the app. Where liability cannot be
          excluded, it is limited to the amount you paid for the app (which is
          zero for a free app).
        </p>

        <h2>10. Loss of progress</h2>
        <p>
          All game progress is stored locally on your device. Clearing app
          data, uninstalling, resetting or replacing your device permanently
          deletes progress, stars, scores and streaks. We are not responsible
          for lost progress and cannot restore it, as no backups leave your
          device.
        </p>

        <h2>11. Updates and availability</h2>
        <p>
          We may update, suspend or discontinue the app at any time without
          notice. Updates may change gameplay, difficulty, or features. We are
          not obligated to maintain the app or provide support, though we aim
          to respond to issues reported through the store listing.
        </p>

        <h2>12. Age</h2>
        <p>
          The app is suitable for a general audience. If you are under the age
          of digital consent in your jurisdiction, a parent or guardian should
          review these terms on your behalf.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These terms are governed by the laws of the publisher's jurisdiction,
          without regard to conflict-of-law rules. App-store distribution terms
          (e.g., Google Play Terms of Service) apply in addition to these
          terms.
        </p>

        <h2>14. Changes to these terms</h2>
        <p>
          We may revise these terms from time to time. The "last updated" date
          reflects the latest revision. Continued use of the app after changes
          take effect constitutes acceptance of the new terms.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these terms? Contact us via the support address
          listed on the app's Google Play Store page.
        </p>
      </section>
    </main>
  );
}
