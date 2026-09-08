import { useState, useCallback } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../data/projects'
import './Projects.css'

function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  const open = useCallback((project: Project) => setActive(project), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section className="section projects" id="projects">
      <Reveal>
        <p className="section-label">02 / Projects</p>
        <h2 className="section-title">Selected work</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal className="project-cell" key={project.id} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} variant={i} onOpen={() => open(project)} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={close} />
    </section>
  )
}

export default Projects
