import type { Project } from '../data/projects'
import PlantThumb from './PlantThumb'

type ProjectCardProps = {
  project: Project
  onOpen: () => void
  variant?: number
}

function ProjectCard({ project, onOpen, variant = 0 }: ProjectCardProps) {
  return (
    <button className="project-card" onClick={onOpen}>
      <div className="project-thumb">
        <PlantThumb variant={variant} />
      </div>
      <div className="project-body">
        <p className="project-tag">{project.tag}</p>
        <h3 className="project-name">{project.title}</h3>
        <p className="project-blurb">{project.blurb}</p>
        <div className="project-tools">
          {project.tools.map((tool) => (
            <span className="badge" key={tool}>{tool}</span>
          ))}
        </div>
        <span className="project-arrow">View details &rarr;</span>
      </div>
    </button>
  )
}

export default ProjectCard
