/**
 * WHY THIS FILE EXISTS
 * --------------------
 * A landing "hero" is usually the first thing visitors see. Keeping it in its own
 * component makes it easy to rewrite copy without touching the 3D scene or layout.
 *
 * Mentoring angle: we take your AI-generated homepage blocks and rewrite them into
 * small components like this so each piece has a clear job.
 *
 * NEXT TO LEARN / CHANGE
 * - Swap the headline/body for your real product pitch
 * - Add a real CTA that links to signup or a contact form
 * - Practice: change colors only in CSS — never hard-code style chaos in JSX
 */
export default function LandingHero() {
  return (
    <section id="rebuild" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Step 1 · Rebuild with understanding</p>
        <h1 id="hero-title">Your site, rebuilt so you own every piece</h1>
        <p className="lead">
          Vibe-coding gets you a first draft fast. Mentoring turns that draft into
          something you can read, change, and grow — starting with a clean page shell
          like this one, then layering in React skills, and finally a 3D avatar path.
        </p>
        <ul className="hero-points">
          <li>Map what AI wrote vs what is solid architecture</li>
          <li>Rebuild section by section (hero → nav → features → avatar)</li>
          <li>Grow into Three.js / WebGL when the foundation is clear</li>
        </ul>
      </div>
      <aside className="hero-card" aria-label="Learning outcomes">
        <h2>What you will be able to do</h2>
        <ol>
          <li>Explain every file in your project tree</li>
          <li>Change layout and copy without breaking the app</li>
          <li>Add a simple interactive 3D head/avatar stub</li>
          <li>Plan the next features yourself with confidence</li>
        </ol>
      </aside>
    </section>
  )
}
