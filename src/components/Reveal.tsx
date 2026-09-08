import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/* A small reusable wrapper. Anything you put inside it starts
   invisible and shifted down, then fades up the first time it
   scrolls into view.

   whileInView          -> animate when it enters the viewport
   viewport once: true  -> only play once, not every time it re-enters
   viewport amount: 0.3 -> trigger when ~30% of it is visible
   delay                -> optional head start so items can cascade */
type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
