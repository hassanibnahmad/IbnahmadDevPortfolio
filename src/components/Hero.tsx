import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 75% 75%, #9333ea 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
              <img 
                src="src/assets/profile.jpg"
                alt="Hassan Ibn Ahmad" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 animate-fade-in">
            Hassan Ibn Ahmad
          </h1>
          
          <div className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold mb-8">
            Web Developer & UX Enthusiast
          </div>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend creativity with technical precision. 
            Specializing in modern web development with 5+ years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href="https://github.com/hassanibnahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Github className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-ibnahmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="mailto:hassanibnahmad6@gmail.com"
              className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-slate-400 hover:text-indigo-400 transition-colors duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;