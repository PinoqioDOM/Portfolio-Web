import ReactPng from './assets/Codin-Guy.jpg'
import PoolClub from './assets/Pool-Club.jpg'
import ProFitness from './assets/Pro-Fitness.jpg'
import Shop from './assets/E-commerce.jpg'

export const projects = [
  {
    id: 1,
    description: "Responsive e-commerce platform with modern UI/UX and full shopping cart.",
    img: ReactPng,
    point: "8/10",
    languages: ["React", "JavaScript", "BootStrap", "HTML"],
    link: "https://github.com/PinoqioDOM/React" 
  },
  
  {
    id: 2,
    description: "Minimalist Gym Website Featuring Modern Fonts and Clean UI/UX Design",
    img: ProFitness, 
    point: "9/10.",
    languages: ["React", "JavaScript", "HTML5", "CSS3"],
    link: "https://pro-fitness-hualing.netlify.app/" 
  },

  {
    id: 3,
    description: "My first real project  fully responsive with a clean, modern UI/UX.",
    img: PoolClub, 
    point: "7/10",
    languages: ["JavasScript", "CSS3", "HTML"],
    link: "https://pool-club.netlify.app/" 
  },

  {
    id: 4,
    description: "Fully functional, responsive design with modern UI/UX and clean structure",
    img: Shop, 
    point: "9/10",
    languages: ["React", "JavaScript", "TypeScript","TailWind CSS", "API", "HTML" ], 
    link: "e-commerce link" 
  }
];