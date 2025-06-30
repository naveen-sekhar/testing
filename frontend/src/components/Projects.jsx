import React, { useState } from 'react';
import { projectsData } from '../data/mockData';
import { Github, ExternalLink, Code, Shield, Cpu, Zap, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'IoT Security': return Cpu;
      case 'Network Security': return Shield;
      case 'Blockchain Security': return Code;
      case 'Malware Analysis': return Zap;
      default: return Code;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the intersection of cybersecurity and IoT through innovative projects that address real-world security challenges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-600 hover:border-slate-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  {/* Project Header */}
                  <div className="p-6 border-b border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-sm text-gray-400">{project.category}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="p-6 border-b border-slate-700">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 border-b border-slate-700">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <ChevronRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="p-6">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  {hoveredProject === project.id && (
                    <div className="absolute top-4 right-4 p-2 bg-cyan-400/20 rounded-full animate-pulse">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-slate-900 px-8 py-4 rounded-lg border border-slate-700">
              <p className="text-gray-300 mb-4">Interested in seeing more of my work?</p>
              <a
                href="https://github.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;