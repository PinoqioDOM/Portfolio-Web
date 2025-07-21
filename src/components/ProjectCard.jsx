import React from 'react'
import { projects } from '../Projects'

const ProjectCard = () => {
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <img src={project.img} alt="project preview" />
          <p>{project.description}</p>
          <p>{project.point}</p>
          <ul>
            {project.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
