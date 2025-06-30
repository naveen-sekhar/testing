import React from 'react';
import { aboutData } from '../data/mockData';
import { GraduationCap, Award, Code, Shield, BookOpen, User, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  const skillCategories = [
    { name: 'Technical Skills', icon: Shield, skills: aboutData.skills.technical },
    { name: 'Programming', icon: Code, skills: aboutData.skills.programming },
    { name: 'Tools & Technologies', icon: BookOpen, skills: aboutData.skills.tools },
    { name: 'Certifications', icon: Award, skills: aboutData.skills.certifications }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Passionate cybersecurity and IoT student dedicated to securing digital infrastructure 
            and building innovative solutions for tomorrow's connected world.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm mr-4">
                <User className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {aboutData.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Academic foundation in cybersecurity and IoT technologies
            </p>
          </div>

          <div className="grid gap-6">
            {aboutData.education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl mr-4">
                      <GraduationCap className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                      <Calendar className="w-4 h-4 text-slate-500 mr-2" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{edu.year}</span>
                    </div>
                    {edu.gpa && (
                      <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    )}
                    {edu.status && (
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {edu.status}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant_courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Technical competencies across cybersecurity and IoT domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.name} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm mr-4">
                      <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200"
                      >
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3.8', label: 'GPA', suffix: '/4.0' },
              { number: '15+', label: 'Projects', suffix: '' },
              { number: '5+', label: 'Competitions', suffix: '' },
              { number: '50+', label: 'Vulnerabilities Found', suffix: '' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.number}<span className="text-xl text-slate-500 dark:text-slate-400">{stat.suffix}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;