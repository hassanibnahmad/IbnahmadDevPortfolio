
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  // Four featured projects from the screenshot
  const projects: Project[] = [
    {
      title: "elecfr",
      description: "A modern electrical services website for Elecfr, featuring a clean UI and fast deployment.",
      image: "https://raw.githubusercontent.com/hassanibnahmad/Elecfr/main/public/preview.png",
      stack: ["Vercel", "React", "tailwindcss"],
      links: {
        liveDemo: "https://elecfr.vercel.app",
        sourceCode: "https://github.com/hassanibnahmad/Elecfr"
      }
    },
    {
      title: "hair-spa",
      description: "A spa and beauty salon web app with custom routing and a smooth booking experience.",
      image: "https://raw.githubusercontent.com/hassanibnahmad/hairSpa/main/public/preview.png",
      stack: ["Vercel", "React", "Routing", "tailwindcss"],
      links: {
        liveDemo: "https://hair-spa-kappa.vercel.app",
        sourceCode: "https://github.com/hassanibnahmad/hairSpa"
      }
    },
    {
      title: "moving-pro",
      description: "A professional moving company site with a responsive design and online quote system.",
      image: "https://raw.githubusercontent.com/hassanibnahmad/movingPro/main/public/preview.png",
      stack: ["Vercel", "React", "tailwindcss"],
      links: {
        liveDemo: "https://moving-pro.vercel.app",
        sourceCode: "https://github.com/hassanibnahmad/movingPro"
      }
    },
    {
      title: "alaml-cabinet",
      description: "A cabinet and furniture showcase site for Alamal Cabinet, built for speed and style.",
      image: "https://raw.githubusercontent.com/hassanibnahmad/Alamal-Cabinet/main/public/preview.png",
      stack: ["Vercel", "React", "tailwindcss"],
      links: {
        liveDemo: "https://alaml-cabinet.vercel.app",
        sourceCode: "https://github.com/hassanibnahmad/Alamal-Cabinet"
      }
    },
    // Added from Services
    {
      title: 'Pharmacy Management System',
      description: 'A web application to manage pharmacy stock, sales, purchases, and reports efficiently.',
      image: 'https://raw.githubusercontent.com/hassanibnahmad/Pharmacy-Management-System/main/public/preview.png',
      stack: ['CodeIgniter 4', 'TailwindCSS', 'MySQL'],
      links: {
        liveDemo: '#',
        sourceCode: 'https://github.com/hassanibnahmad?tab=repositories'
      }
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A real-time messaging app enabling users to chat securely and instantly.',
      image: 'https://raw.githubusercontent.com/hassanibnahmad/ChatApp/main/public/preview.png',
      stack: ['React.js', 'TailwindCSS', 'PHP', 'MySQL'],
      links: {
        liveDemo: '#',
        sourceCode: 'https://github.com/hassanibnahmad?tab=repositories'
      }
    },
    {
      title: 'Car Rental Platform',
      description: 'A front-end car rental web app with a responsive UI for booking vehicles.',
      image: 'https://raw.githubusercontent.com/hassanibnahmad/CarRentalPlatform/main/public/preview.png',
      stack: ['React.js', 'TailwindCSS'],
      links: {
        liveDemo: '#',
        sourceCode: 'https://github.com/hassanibnahmad?tab=repositories'
      }
    },
    {
      title: ' Magic Landscape Tours',
      description: ' A professional tour agency website featuring destinationsand booking',
      image: 'https://raw.githubusercontent.com/hassanibnahmad/CarRentalPlatform/main/public/preview.png',
      stack: ['React.js', 'TailwindCSS', "php"],
      links: {
        liveDemo: 'https://magiclandscapetours.com',
        sourceCode: 'https://github.com/hassanibnahmad?tab=repositories'
      }
    },
  ];


  // Responsive: 1 card on mobile, 2 on md, 3 on lg+
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  React.useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop logic
  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get visible projects for current slide (infinite loop, always unique)
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      let idx = (current + i) % projects.length;
      if (idx < 0) idx += projects.length;
      visible.push(projects[idx]);
    }
    return visible;
  };

  return (
    <section id="projects" className="py-20 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore some of my recent work. Swipe or use arrows to navigate.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-slate-800/70 hover:bg-indigo-500/80 text-white rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Previous project"
          >
            &#8592;
          </button>
          <div className="w-full flex justify-center gap-6 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current + '-' + cardsToShow}
                className="flex w-full gap-6"
                initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {getVisibleProjects().map((project) => (
                  <div key={project.title} className="flex-1 min-w-0">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-slate-800/70 hover:bg-indigo-500/80 text-white rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Next project"
          >
            &#8594;
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-indigo-500' : 'bg-slate-600'}`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;