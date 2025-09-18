import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import SkillBar from './SkillBar';

const About: React.FC = () => {
  const skills = [
    { name: "Front-end Development", level: "95%" },
    { name: "UI/UX Design", level: "85%" },
    { name: "Back-end Development", level: "80%" },
    { name: "Mobile App Development", level: "45%" }
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Node.js",
    "TailwindCSS", "Figma", "PHP", "CodeIgniter 4"
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-3xl font-bold text-slate-100 mb-6">
              Web Developer & UX Enthusiast
            </h3>
            
            <div className="space-y-4 text-slate-300 text-lg mb-8">
              <p>I craft digital experiences that blend creativity with technical precision.</p>
              <p>I'm Hassan, a passionate web developer with over 5 years of experience creating modern, responsive web applications.</p>
              <p>I specialize in front-end development with a focus on creating intuitive user experiences that marry form and function.</p>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-indigo-400" />
                <span className="text-slate-300">5+ years experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-slate-300">Agadir, Morocco</span>
              </div>
            </div>

            
          </div>

          {/* Right Column - Skills & Tech */}
          <div>
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-slate-100 mb-8">Skills</h4>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-slate-100 mb-6">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;