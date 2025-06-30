import React, { useState } from 'react';
import { experienceData } from '../data/mockData';
import { Briefcase, Calendar, MapPin, ChevronRight, Award, Code } from 'lucide-react';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Research': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Volunteer': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const toggleExpanded = (id) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building practical expertise through hands-on experience in cybersecurity research, internships, and community service.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 hidden md:block"></div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-slate-900 border-4 border-cyan-400 rounded-full z-10 hidden md:block group-hover:border-blue-400 transition-colors duration-300">
                  <div className="absolute inset-1 bg-cyan-400 rounded-full group-hover:bg-blue-400 transition-colors duration-300 animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="md:ml-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden">
                      {/* Header */}
                      <div className="p-6 cursor-pointer" onClick={() => toggleExpanded(exp.id)}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                                <Briefcase className="w-5 h-5 text-cyan-400" />
                              </div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {exp.title}
                              </h3>
                            </div>
                            <div className="space-y-2">
                              <p className="text-lg font-semibold text-cyan-400">{exp.company}</p>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                                  {exp.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight 
                              className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                                expandedExp === exp.id ? 'rotate-90' : ''
                              }`} 
                            />
                          </div>
                        </div>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Expanded Content */}
                      {expandedExp === exp.id && (
                        <div className="border-t border-slate-700 animate-in slide-in-from-top-2 duration-300">
                          {/* Achievements */}
                          <div className="p-6 border-b border-slate-700">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                              <Award className="w-5 h-5 mr-2" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="p-6">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                              <Code className="w-5 h-5 mr-2" />
                              Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-center text-white mb-8">Experience Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-300">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300">Organizations Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Security Issues Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;