import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="aspect-video bg-slate-700 flex items-center justify-center">
        <img 
          src={`https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
  <h3 className="text-xl font-semibold text-slate-100 mb-1">{project.title}</h3>
  <p className="text-slate-400 text-xs mb-3 leading-snug">{project.description}</p>

  <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span 
              key={tech}
              className="bg-slate-700 text-indigo-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col space-y-2">
          <p className="text-slate-300 text-sm mb-2 leading-relaxed">{project.description}</p>
          <div className="flex space-x-4">
            {project.links.liveDemo !== '#' && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
            <a
              href={project.links.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
            >
              <Github size={16} />
              <span className="text-sm">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;