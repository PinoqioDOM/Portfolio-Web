import profileImg from '../assets/profile.jpg';
import resume from '../assets/Tornike Resume.pdf';
import { NavLink } from 'react-router-dom'; 

const LeftSide = () => {
  return (
    <aside className='profile-section' role='complementary'>
      <div className='profile-box'>
        <div className='profile-info'>
          <img 
            src={profileImg} 
            className='profile-img' 
            alt="Tornike Alkhanishvili Profile Picture" 
          />
          <h3>Tornike Alkhanishvili</h3>
          <small>Front-End Developer</small>
          <a href={resume} download aria-label="Download Tornike's Resume">
            <button className='download-btn'>Resume</button>
          </a>
        </div>

        <nav className='nav-bar' aria-label="Main navigation">
          <NavLink to="/" aria-label="Go to Home page">
            <span aria-hidden="true">🏡</span> Home
          </NavLink>
          <NavLink to="/projects" aria-label="Go to Projects page">
            <span aria-hidden="true">💻</span> Projects
          </NavLink>
          <NavLink to="/contacts" aria-label="Go to Contacts page">
            <span aria-hidden="true">🤖</span> Contacts
          </NavLink>
        </nav>

        <p className='info-p'>
          Designed & Built By Tornike Alkhanishvili @2025,<br />
          All Rights Reserved
        </p>
      </div>
    </aside>
  );
};

export default LeftSide;