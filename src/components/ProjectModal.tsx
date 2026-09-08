import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import type { Project } from '../data/projects'
import { withBase } from '../lib/withBase'
import './ProjectModal.css'

/* The detail popup. It shows whichever project is passed in, or
   nothing when project is null. AnimatePresence lets it animate OUT
   as well as in. The useEffect handles the Escape key and locks
   page scrolling while the modal is open, then cleans up after. */
type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              &#10005;
            </button>

            <header className="modal-header">
              <p className="project-tag">{project.tag}</p>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
            </header>

            <div className="modal-body">
              <section className="modal-block">
                <h4>The goal</h4>
                <p>{project.goal}</p>
              </section>

              <section className="modal-block">
                <h4>What I did</h4>
                <ul>
                  {project.contributions.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-block">
                <h4>Skills gained</h4>
                <ul>
                  {project.skills.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-block">
                <h4>Preview</h4>
                <div className="modal-shots">
                  {project.images.map((src, i) => (
                    <img key={i} src={withBase(src)} alt={`${project.title} preview ${i + 1}`} loading="lazy" />
                  ))}
                </div>
                {project.download && (
                  <a className="btn btn-primary modal-dl" href={withBase(project.download.href)} download>
                    {project.download.label} &darr;
                  </a>
                )}
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
