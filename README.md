# Codementor demo · Web + 3D avatar mentoring

**Who this is for:** A beginner founder who wants long-term tutoring to **understand and improve an AI / vibe-coded website**, then grow into a **3D avatar system** (JS / React / web + Three.js / WebGL).

This small public demo is a teaching sample. It shows how Mihai would mentor hands-on: clean structure a beginner can read, a simple landing shell (“rebuild your site with understanding”), and a minimal rotatable 3D avatar stub that proves the path toward an avatar goal — not a finished product.

---

## How Mihai would mentor you

1. **Review your existing codebase together**  
   Open the vibe-coded site side by side. Mark what looks AI-generated vs solid, map pages/components/data flow, and agree on a rebuild order.

2. **Explain AI-generated vs solid structure**  
   Messy generated files vs small components with a clear job (like the files in this repo). You learn *why* each file exists.

3. **Rebuild piece by piece**  
   Landing shell → layout/CSS variables → React components → interaction. Always tied to *your* product copy and goals.

4. **Grow into a Three.js / WebGL avatar**  
   Start from the geometric head in this demo (lights, camera, mesh, orbit). Next: real `.glb` models, then simple interaction on your site.

**Suggested rhythm:** ~9 hrs/week for ~24 weeks at your rate — foundations first, then avatar depth.

---

## What’s in this demo

| Piece | Purpose |
| --- | --- |
| `src/App.jsx` | Readable site shell (header, sections, footer) |
| `src/components/LandingHero.jsx` | “Rebuild with understanding” landing block |
| `src/components/AvatarScene.jsx` | Minimal React Three Fiber avatar you can drag to rotate |
| `src/components/MentorNotes.jsx` | Four-phase tutoring path written in plain language |
| Teaching comments | Top of each file: *why this file* + *what to change next* |

Stack: **Vite + React + Three.js** via `@react-three/fiber` and `@react-three/drei`.

---

## How to run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Drag on the dark canvas to orbit the geometric avatar; scroll to zoom.

Build for production:

```bash
npm run build
npm run preview
```

---

## Codementor offer note

Teaching sample for long-term JS/React/Three.js mentoring: clean React landing shell + rotatable Three.js avatar stub, with teaching comments throughout.

**Public repo:** https://github.com/morosanu1st/codementor-founder-web-3d-demo

---

## License

MIT — feel free to fork and learn from the structure.
