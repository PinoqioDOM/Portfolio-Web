import LeftSide from '../components/LeftSide'
import '../design/Project.css'
import ProjectCard from '../components/ProjectCard'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="projects-container">
      <div className={`left-side-wrapper ${isVisible ? 'animate-left' : ''}`}>
        <LeftSide />
      </div>

      <div className={`projects-content ${isVisible ? 'animate-right' : ''}`}>
        <div>
          <div className={`contribution-section ${isVisible ? 'animate-right-delay-1' : ''}`}>
            <a href='https://github.com/PinoqioDOM' className="contribution-graph">
              <img
                src="https://ghchart.rshah.org/PinoqioDOM"
                alt="PinoqioDOM's GitHub Contribution Graph"
                className="contribution-image"
              />
            </a>
          </div>

          <div className={`projects ${isVisible ? 'animate-right-delay-2' : ''}`}>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;