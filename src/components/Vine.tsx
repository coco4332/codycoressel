import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import './Vine.css'

/* Each leaf is drawn (pathLength 0 -> 1) as the page's scroll progress
   passes its position on the vine, so leaves sprout on the way down. */
type LeafSpec = { at: number; y: number; dir: number }
const LEAVES: LeafSpec[] = [
  { at: 0.16, y: 150, dir: -1 },
  { at: 0.34, y: 330, dir: 1 },
  { at: 0.52, y: 510, dir: -1 },
  { at: 0.70, y: 690, dir: 1 },
  { at: 0.86, y: 860, dir: -1 },
]

function VineLeaf({ progress, at, y, dir }: LeafSpec & { progress: MotionValue<number> }) {
  const start = Math.max(0, at - 0.08)
  const draw = useTransform(progress, [start, at], [0, 1])
  const d = dir < 0 ? 'M0 0 C -7 -3, -12 -9, -15 -17' : 'M0 0 C 7 -3, 12 -9, 15 -17'
  return (
    <g transform={`translate(22 ${y})`}>
      <motion.path
        d={d}
        fill="none"
        stroke="var(--moss)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength: draw, opacity: draw }}
      />
    </g>
  )
}

function Vine() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="vine" aria-hidden="true">
      <svg viewBox="0 0 44 1000" preserveAspectRatio="none">
        <motion.path
          d="M22 0 C 40 120, 4 240, 22 360 C 40 480, 4 600, 22 720 C 40 840, 10 940, 22 1000"
          fill="none"
          stroke="var(--fern)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
        {LEAVES.map((leaf, i) => (
          <VineLeaf key={i} progress={scrollYProgress} {...leaf} />
        ))}
      </svg>
    </div>
  )
}

export default Vine
