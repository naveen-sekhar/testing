import React from 'react';
import { Link } from 'react-router-dom';
import { experienceData } from '../data/mockData';
import { Briefcase, Calendar, MapPin, Award, Code, Building } from 'lucide-react';

const ExperiencePage = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'Research': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'Volunteer': return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Building practical expertise through hands-on experience in cybersecurity research, 
            internships, and community service initiatives.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-600 rounded-full z-10 hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-20">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                              <Briefcase className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {exp.title}
                              </h3>
                              <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <Award className="w-5 h-5 text-slate-500 mr-2" />
                          <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Code className="w-5 h-5 text-slate-500 mr-2" />
                          <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Technologies & Tools</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg text-sm border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Experience Summary</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Professional impact and achievements across various organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">2+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Years of Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">25+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Organizations Helped</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Security Issues Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-12">
            <Building className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready for New Opportunities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm actively seeking internships, entry-level positions, and collaborative opportunities 
              in cybersecurity and IoT security domains.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
            >
              <span>Let's Connect</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;