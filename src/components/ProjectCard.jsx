import React from 'react'
import { projects } from '../Projects'

const ProjectCard = () => {
  return (
    <>
      {projects.map(project => (
        <div key={project.id} className="project-card-item">
          <img src={project.img} alt="project preview" />
          <p>{project.description}</p>
          <p className="project-title">Point:{project.point}</p>
          <div className="separator-line"></div>
          <ul>
            {project.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      ))}
    </>
  )
}

export default ProjectCard