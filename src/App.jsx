import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update title
    document.title = 'Hassan Ibn Ahmad - Web Developer & UX Enthusiast';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Hassan Ibn Ahmad. All rights reserved. Built with React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;