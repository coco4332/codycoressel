import { motion, type Variants } from 'motion/react'

/* Three plant shapes as line art. Each is a list of SVG paths; the
   first path is the stem (drawn in fern), the rest are leaves/buds
   (drawn in moss). We animate every path's "pathLength" from 0 to 1
   so the plant appears to grow, staggered, when it scrolls into view. */
const PLANTS: string[][] = [
  [
    'M50 96 C 50 78, 49 64, 50 46',
    'M50 70 C 40 68, 32 62, 27 53',
    'M50 60 C 60 58, 68 52, 73 43',
    'M50 46 C 45 40, 45 32, 50 27 C 55 32, 55 40, 50 46 Z',
  ],
  [
    'M50 96 L50 34',
    'M50 74 C 39 71, 31 64, 27 55',
    'M50 62 C 61 59, 69 52, 73 43',
    'M50 50 C 40 47, 33 41, 30 33',
    'M50 34 C 46 29, 46 22, 50 18 C 54 22, 54 29, 50 34 Z',
  ],
  [
    'M50 96 C 52 76, 48 60, 50 44',
    'M50 64 C 35 62, 27 52, 30 42 C 42 45, 50 53, 50 64 Z',
    'M50 54 C 65 52, 73 42, 70 32 C 58 35, 50 43, 50 54 Z',
  ],
]

const svgVariants: Variants = {
  rest: {},
  grow: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
}
const pathVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  grow: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

function PlantThumb({ variant = 0 }: { variant?: number }) {
  const paths = PLANTS[variant % PLANTS.length]
  return (
    <motion.svg
      className="plant"
      viewBox="0 0 100 100"
      variants={svgVariants}
      initial="rest"
      whileInView="grow"
      viewport={{ once: true, amount: 0.5 }}
      aria-hidden="true"
    >
      <line x1="30" y1="95" x2="70" y2="95" stroke="var(--fern)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={i === 0 ? 'var(--fern)' : 'var(--moss)'}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
      ))}
    </motion.svg>
  )
}

export default PlantThumb
