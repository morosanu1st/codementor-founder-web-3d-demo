/**
 * WHY THIS FILE EXISTS
 * --------------------
 * App.jsx is the "shell" of the site: layout, sections, and how pieces fit together.
 * Mentoring start: we map YOUR existing pages into a shell like this, then rebuild
 * one section at a time so you understand every line.
 *
 * NEXT TO LEARN / CHANGE
 * - Replace placeholder copy with your real product story
 * - Extract sections into their own files when App.jsx grows past ~100 lines
 */
import LandingHero from './components/LandingHero.jsx'
import AvatarScene from './components/AvatarScene.jsx'
import MentorNotes from './components/MentorNotes.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">◆</span>
          <div>
            <strong>Founder Site Rebuild</strong>
            <p className="tagline">Clean structure → real understanding → 3D avatar</p>
          </div>
        </div>
        <nav className="nav" aria-label="Primary">
          <a href="#rebuild">Rebuild</a>
          <a href="#avatar">3D Avatar</a>
          <a href="#mentor">Mentoring path</a>
        </nav>
      </header>

      <main>
        <LandingHero />
        <AvatarScene />
        <MentorNotes />
      </main>

      <footer className="site-footer">
        <p>
          Demo for long-term tutoring · React + Three.js foundations ·
          Built as a readable contrast to messy vibe-coded output
        </p>
      </footer>
    </div>
  )
}
