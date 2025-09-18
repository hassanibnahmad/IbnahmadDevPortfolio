import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["React.js & Vue.js", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
      
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and efficient database management.",
      features: ["RESTful APIs", "Database Design", "Authentication Systems", "Server Configuration"],
      
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Solutions",
      description: "Complete web applications from concept to deployment with ongoing maintenance.",
      features: ["End-to-end Development", "Database Integration", "Deployment & Hosting", "Maintenance & Support"],
      
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality.",
      features: ["Wireframing & Prototyping", "User Interface Design", "User Experience Research", "Design Systems"],
      
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native-like performance.",
      features: ["React Native", "Progressive Web Apps", "Mobile-first Design", "App Store Deployment"],
      
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience.",
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "SEO Improvements"],
      
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">My Services</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your digital vision to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/212612345678" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 inline-block text-center"
              >
                Get Free Quote
              </a>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;