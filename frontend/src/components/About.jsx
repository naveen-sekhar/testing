import React from 'react';
import { aboutData } from '../data/mockData';
import { GraduationCap, Award, Code, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const skillIcons = {
    technical: Shield,
    programming: Code,
    tools: BookOpen,
    certifications: Award
  };

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {aboutData.bio}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </h3>
                <div className="space-y-6">
                  {aboutData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-cyan-400 pl-6 hover:border-blue-400 transition-colors duration-300">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-cyan-400 font-medium">{edu.school}</span>
                        <span className="text-gray-400">{edu.year}</span>
                        {edu.gpa && (
                          <span className="bg-slate-700 px-3 py-1 rounded-full text-sm text-cyan-400">
                            GPA: {edu.gpa}
                          </span>
                        )}
                        {edu.status && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant_courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            {Object.entries(aboutData.skills).map(([category, skills]) => {
              const IconComponent = skillIcons[category] || Code;
              return (
                <div key={category} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center capitalize">
                      <IconComponent className="w-5 h-5 mr-2 text-cyan-400" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="group/skill relative overflow-hidden bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-x-full group-hover/skill:translate-x-0 transition-transform duration-300"></div>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '3.8', label: 'GPA', suffix: '/4.0' },
            { number: '15+', label: 'Projects', suffix: '' },
            { number: '5+', label: 'Competitions', suffix: '' },
            { number: '50+', label: 'Vulnerabilities Found', suffix: '' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}<span className="text-xl text-gray-400">{stat.suffix}</span>
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;