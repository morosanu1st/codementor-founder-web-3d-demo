/**
 * WHY THIS FILE EXISTS
 * --------------------
 * This is the "proof of path" toward your 3D avatar goal — not a finished product.
 * We use React Three Fiber so the 3D canvas lives inside React the same way a
 * normal component does. Later we can swap the geometric head for a real model.
 *
 * Mentoring angle: first you understand lights, camera, mesh, and orbit controls.
 * Only then do we talk about GLTF avatars, facial rigs, and animation.
 *
 * NEXT TO LEARN / CHANGE
 * - Tweak head color / eye size to see props flow into the mesh
 * - Replace GeometricAvatar with a loaded .glb model (useGLTF)
 * - Add a simple idle animation with useFrame
 */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

/** Minimal geometric "avatar" — a head + eyes a beginner can read line by line. */
function GeometricAvatar() {
  return (
    <group position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#7c9cff" roughness={0.35} metalness={0.1} />
      </mesh>

      {/* Left eye */}
      <mesh position={[-0.18, 0.22, 0.42]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.18, 0.22, 0.42]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Soft "shoulders" so it feels more like an avatar, less like a lone ball */}
      <mesh position={[0, -0.55, 0]} castShadow>
        <capsuleGeometry args={[0.35, 0.25, 8, 16]} />
        <meshStandardMaterial color="#5b6fd6" roughness={0.5} />
      </mesh>
    </group>
  )
}

function SceneFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial color="#94a3b8" wireframe />
    </mesh>
  )
}

export default function AvatarScene() {
  return (
    <section id="avatar" className="avatar-section" aria-labelledby="avatar-title">
      <div className="avatar-copy">
        <p className="eyebrow">Step 2 · 3D avatar stub</p>
        <h2 id="avatar-title">Drag to rotate — your first interactive avatar</h2>
        <p>
          Click and drag on the canvas. This stub uses Three.js through React Three Fiber:
          a geometric head you can understand today, and a clear upgrade path to a
          custom 3D avatar on your site later.
        </p>
        <ul className="avatar-checklist">
          <li>Lights + camera = what you see</li>
          <li>Mesh + material = the avatar body</li>
          <li>OrbitControls = drag-to-rotate interaction</li>
          <li>Next lesson: load a real model (.glb) instead of spheres</li>
        </ul>
      </div>

      <div className="avatar-canvas-wrap" role="img" aria-label="Rotatable geometric 3D avatar">
        <Canvas
          shadows
          camera={{ position: [0, 0.4, 2.4], fov: 42 }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={['#0f172a']} />
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[3, 4, 2]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Suspense fallback={<SceneFallback />}>
            <GeometricAvatar />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={false}
            minDistance={1.6}
            maxDistance={4}
            target={[0, 0, 0]}
          />
          {/* Ground plane for a bit of depth */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 0]} receiveShadow>
            <circleGeometry args={[1.4, 48]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        </Canvas>
        <p className="canvas-hint">Drag to orbit · scroll to zoom</p>
      </div>
    </section>
  )
}
