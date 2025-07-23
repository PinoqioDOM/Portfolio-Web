import React, { useState, useEffect } from 'react';

const RightSide = () => {
  const [sectionsRevealedCount, setSectionsRevealedCount] = useState(0);
  const [currentAnimatingTextIndex, setCurrentAnimatingTextIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const sections = [
    <div className='hacker-container' key="about">
      <h3>/ About me</h3>
      <p className={`hacker-text ${currentAnimatingTextIndex === 0 ? 'typing-demo' : ''}`}>
        <span>I am a Front-End Developer in training with a strong passion for building user-friendly web applications.</span>
        <span>Currently, I’m studying Front-End Development at Digital Institute, learning JavaScript, React, Node.js, HTML, and CSS.</span>
        <span>Although I don’t have a background in computer science, my dedication to continuous learning drives me to master modern web technologies.</span>
      </p>
      {showHint && <div className="hint-text">Press anywhere to continue...</div>}
    </div>,
    <div className='skills-box' key="skills">
      <h3>/ Skills</h3>
      <p className={`hacker-text ${currentAnimatingTextIndex === 1 ? 'typing-demo' : ''}`}>
        <span>- React</span>
        <span>- JavaScript</span>
        <span>- Bootstrap</span>
        <span>- Redux</span>
        <span>- TailWind CSS</span>
        <span>- TypeScript</span>
        <span>- HTML5</span>
        <span>- CSS3</span>
        <span>- GitHub</span>
        <span>- Redux</span>
      </p>
    </div>,
    <div className='education-box' key="education">
      <h3>/ Education</h3>
      <p className={`hacker-text ${currentAnimatingTextIndex === 2 ? 'typing-demo' : ''}`}>
        <span>- Digital Institute - Front-End Development</span>
        <span>- 163 Public School</span>
        <span>- Georgian National University SEU - Management</span>
        <span>- English Business Academy - B2</span>
      </p>
    </div>,

    <div className='languages-box' key="languages">
      <h3>/ Languages</h3>
      <p className={`hacker-text ${currentAnimatingTextIndex === 3 ? 'typing-demo' : ''}`}>
        <span>Georgian - Native</span>
        <span>English - B2</span>
        <span>Russian - A2</span>
      </p>
    </div>,

    <div className='contact-box'>
      <h3 className='contact-heading'>/ Get in Touch </h3>
      <div className='contact-links'>
        <a href='https://www.linkedin.com/in/tornike-alxanishvili-58485b318' target='_blank' rel='noopener noreferrer'>
          👉 LinkedIn
        </a>
        <a href='https://github.com/PinoqioDOM' target='_blank' rel='noopener noreferrer'>
          👉 GitHub
        </a>
        <a href='*' target='_blank' rel='noopener noreferrer'>
          👉 Gmail : alkhanishvilit@gmail.com
        </a>
      </div>
    </div>

  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionsRevealedCount(1);
      setTimeout(() => {
        setShowHint(true);
      }, 2000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (sectionsRevealedCount > 0 && sectionsRevealedCount <= sections.length) {
      setCurrentAnimatingTextIndex(sectionsRevealedCount - 1);
      if (sectionsRevealedCount === 2) {
        setTimeout(() => {
          setSectionsRevealedCount(3);
        }, 1000);
      } else if (sectionsRevealedCount === 3) {
        setTimeout(() => {
          setSectionsRevealedCount(4);
        }, 1500);
      } else if (sectionsRevealedCount === 4) {
        setTimeout(() => {
          setSectionsRevealedCount(5);
        }, 1000);
      }
    }
  }, [sectionsRevealedCount]);

  const handleAdvanceSection = () => {
    if (sectionsRevealedCount === 1) {
      setShowHint(false);
      setSectionsRevealedCount(2);
    }
  };

  return (
    <div className='rightside-section' onClick={handleAdvanceSection}>
      <div className='right-box'>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section-wrapper ${index < sectionsRevealedCount ? 'visible' : 'hidden'}`}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;