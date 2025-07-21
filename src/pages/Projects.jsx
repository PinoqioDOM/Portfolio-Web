import React, { useEffect, useState } from 'react'
import LeftSide from '../components/LeftSide'
import '../Project.css' 
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className="projects-container">
      <LeftSide />
      
      <div className="projects-content">
        <div>
          <div className="contribution-section">
            <a href='https://github.com/PinoqioDOM' className="contribution-graph">
              <img 
                src="https://ghchart.rshah.org/PinoqioDOM" 
                alt="PinoqioDOM's GitHub Contribution Graph"
                className="contribution-image"
              />
            </a>
          </div>

          <div className='projects'>
            <ProjectCard />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects