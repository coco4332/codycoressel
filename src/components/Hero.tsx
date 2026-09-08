import { motion, type Variants } from 'motion/react'
import './Hero.css'

/* Motion "variants" are named animation states. We define two
   states, "hidden" and "show", then tell each element to move
   between them. The parent staggers its children so they rise in
   one after another instead of all at once.

   Typing these as `Variants` lets TypeScript understand the custom
   easing curve below (a cubic-bezier written as four numbers). */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-eyebrow" variants={item}>
          Hello, I'm
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          Cody
          <br />
          <em>Data Analyst</em>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          I turn messy data into clear, cozy stories. Information Science student
          at CU Boulder who likes SQL, dashboards, and finding the plot hiding in
          the numbers.
        </motion.p>

        <motion.div className="hero-cta" variants={item}>
          <a href="#projects" className="btn btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-scroll" aria-hidden="true">
        <span>scroll</span>
        <span className="hero-scroll-dot" />
      </div>
    </section>
  )
}

export default Hero
