/**
 * WHY THIS FILE EXISTS
 * --------------------
 * Mentoring is not just code — it is a shared plan. This section shows how sessions
 * would unfold: review your current site, rebuild foundations, then grow into 3D.
 *
 * NEXT TO LEARN / CHANGE
 * - Turn these steps into your personal checklist after the first call
 * - Add links to your real repo once we start reviewing it together
 */
const PHASES = [
  {
    title: 'Phase 1 · Map the vibe-coded site',
    body: 'We open your existing codebase together. I mark what is AI noise vs solid structure, and we write a simple map of pages, components, and data flow.',
  },
  {
    title: 'Phase 2 · Rebuild piece by piece',
    body: 'We recreate your landing and key flows in a clean React (or vanilla) structure like this demo — so you can explain every file and change copy/layout safely.',
  },
  {
    title: 'Phase 3 · Foundations that stick',
    body: 'JS/React fundamentals on demand: components, props, state, events, and how the browser paints your UI. Always tied to YOUR product, not abstract drills.',
  },
  {
    title: 'Phase 4 · 3D avatar path',
    body: 'From this geometric stub → camera/lights/materials → loading a real avatar model → simple interaction on your site. Same teaching style: small steps, clear why.',
  },
]

export default function MentorNotes() {
  return (
    <section id="mentor" className="mentor" aria-labelledby="mentor-title">
      <p className="eyebrow">How mentoring works</p>
      <h2 id="mentor-title">Long-term tutoring path for a beginner founder</h2>
      <p className="mentor-intro">
        Target rhythm: ~9 hours/week over ~24 weeks. Pacific Time friendly scheduling.
        Goal: you understand and improve your AI/vibe-coded website, then grow a 3D
        avatar system you can actually maintain.
      </p>
      <div className="phase-grid">
        {PHASES.map((phase) => (
          <article key={phase.title} className="phase-card">
            <h3>{phase.title}</h3>
            <p>{phase.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
