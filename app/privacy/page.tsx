import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Rule Shift collects no personal data. All gameplay, progress and statistics are stored locally on your device.",
};

export default function PrivacyPage() {
  return (
    <main className="wrap legal">
      <section>
        <p className="eyebrow">LEGAL</p>
        <h1 className="hero-title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          PRIVACY <span>POLICY</span>
        </h1>
        <p className="updated">Last updated: October 2026 · Applies to Rule Shift v1.0.3 and later</p>

        <div className="callout">
          <p>
            <b>The short version:</b> Rule Shift collects nothing. No accounts,
            no analytics, no ads, no tracking, no network requests for your
            data. Everything the game remembers — progress, stars, scores and
            streaks — is stored only on your device and never leaves it.
          </p>
        </div>

        <h2>1. Who we are</h2>
        <p>
          Rule Shift ("the app", "we", "us") is an offline puzzle/reflex game
          published on the Google Play Store as <code>com.ruleshift.app</code>.
          Because the app does not collect personal data, there is no data
          controller processing information about you in the usual sense —
          all gameplay data stays on your device under your control.
        </p>

        <h2>2. Data the app stores</h2>
        <p>
          The app stores the following information <b>locally on your device</b>{" "}
          using the operating system's standard app storage (AsyncStorage on
          Android/iOS). None of it is transmitted anywhere:
        </p>
        <ul>
          <li>
            <b>Game progress</b> — the highest level you have unlocked and the
            star rating earned on each level.
          </li>
          <li>
            <b>Statistics</b> — best score, total swipes, total correct answers,
            number of rounds played, highest level reached, best survival run,
            daily-challenge completion day, and your day-streak counter
            (derived from the dates you played, stored as a date stamp only).
          </li>
          <li>
            <b>Round results</b> — per-round score, accuracy and swipe history
            used to show the results screen.
          </li>
        </ul>
        <p>
          This data contains no names, no contact details, no identifiers, no
          location, and no content you create. It is anonymous game state that
          cannot identify you.
        </p>

        <h2>3. Data the app does NOT collect</h2>
        <p>Rule Shift does not collect, request, transmit or sell:</p>
        <ul>
          <li>Personal identifiers (name, email, phone number, user IDs)</li>
          <li>Device identifiers (advertising ID, IMEI, Android ID)</li>
          <li>Location data of any precision</li>
          <li>Contacts, photos, media, files, call logs or messages</li>
          <li>Microphone or camera data</li>
          <li>Usage analytics, crashlytics or behavioral telemetry</li>
          <li>Advertising or tracking data of any kind</li>
          <li>Payment or financial information (the app has no purchases)</li>
        </ul>

        <h2>4. Permissions</h2>
        <p>
          The app requests no sensitive Android permissions. Optional haptic
          feedback uses the device's vibration capability only and can be
          disabled in the system settings.
        </p>

        <h2>5. Network usage</h2>
        <p>
          Rule Shift is fully playable offline. Levels are generated on-device
          from a seed value — the "daily challenge" uses the device's calendar
          date as the seed, which is computed locally and never uploaded. The
          app contains no third-party SDKs that make network calls, no ad
          networks, and no analytics frameworks.
        </p>

        <h2>6. Third-party services</h2>
        <p>
          The app integrates no third-party services that process user data.
          There are no ads, no social login, no cloud sync, and no external
          fonts or trackers. The only network traffic the app may produce is
          the Google Play Store's own licensing/installation infrastructure,
          which is governed by Google's privacy policy, not ours.
        </p>

        <h2>7. Children's privacy</h2>
        <p>
          Rule Shift is suitable for a general audience and does not knowingly
          collect any personal information from children under 13 (or the
          equivalent age in your jurisdiction). Since the app collects nothing
          from anyone, no parental consent mechanism is required. The game is
          non-violent, contains no chat or social features, and shows no
          advertising.
        </p>

        <h2>8. Data retention and deletion</h2>
        <p>
          All stored data remains on your device until you delete it. To erase
          everything the app stores:
        </p>
        <ol>
          <li>Open Android Settings → Apps → Rule Shift → Storage, or</li>
          <li>Uninstall the app — all local data is removed with it.</li>
        </ol>
        <p>
          Because no data ever leaves your device, there is nothing for us to
          delete on your behalf and no account to close.
        </p>

        <h2>9. Your rights</h2>
        <p>
          Under GDPR, CCPA and similar regulations you may have rights to
          access, correct, export or delete personal data a controller holds
          about you. Rule Shift holds none — all data lives in your device's
          app storage, which you fully control. No request to us is needed to
          exercise these rights.
        </p>

        <h2>10. Security</h2>
        <p>
          Since no personal data is collected or transmitted, there is no
          user-data attack surface. Local game data is stored in the app's
          private sandbox, protected by the operating system's standard app
          isolation.
        </p>

        <h2>11. Google Play Data Safety summary</h2>
        <p>For transparency, our Play Console Data Safety answers are:</p>
        <ul>
          <li><b>Data collected:</b> none</li>
          <li><b>Data shared:</b> none</li>
          <li><b>Data encrypted in transit:</b> not applicable (no transmission)</li>
          <li><b>Data deletion:</b> available — uninstall or clear app storage</li>
        </ul>

        <h2>12. Changes to this policy</h2>
        <p>
          If a future version of the app adds any data collection (for example
          optional cloud leaderboards), this policy will be updated before the
          feature ships, the "last updated" date will change, and collection
          will be opt-in where required.
        </p>

        <h2>13. Contact</h2>
        <p>
          Questions about this policy or the app? Reach us via the support
          contact listed on the app's Google Play Store page.
        </p>
      </section>
    </main>
  );
}
