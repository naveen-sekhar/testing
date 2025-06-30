import React from 'react';
import { contestsData } from '../data/mockData';
import { Trophy, Users, User, Medal, Star, Target, Calendar, Award } from 'lucide-react';

const ContestsPage = () => {
  const getPositionColor = (position) => {
    if (position.includes('1st') || position.includes('Gold')) {
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
    } else if (position.includes('2nd') || position.includes('Silver')) {
      return 'bg-gray-100 dark:bg-gray-800/30 text-gray-600 dark:text-gray-400';
    } else if (position.includes('3rd') || position.includes('Bronze')) {
      return 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400';
    } else if (position.includes('Top')) {
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
    }
    return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
  };

  const getCategoryIcon = (category) => {
    return category === 'Team Competition' ? Users : User;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Competitions & Awards
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Demonstrating expertise through competitive cybersecurity challenges and earning recognition 
            in prestigious competitions worldwide.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {contestsData.map((contest, index) => {
              const IconComponent = getCategoryIcon(contest.category);
              return (
                <div key={contest.id} className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="p-8 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {contest.name}
                            </h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{contest.year}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-sm">
                                <IconComponent className="w-4 h-4" />
                                <span>{contest.category}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {contest.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${getPositionColor(contest.position)}`}>
                          {contest.position}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Achievements */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Target className="w-5 h-5 text-slate-500 mr-2" />
                          <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {contest.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <Star className="w-4 h-4 text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Award className="w-5 h-5 text-slate-500 mr-2" />
                          <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Skills Demonstrated</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {contest.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
                            >
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competition Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Competition Statistics</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Performance metrics across cybersecurity competitions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Competitions Won', icon: Trophy },
              { number: '3', label: 'Top 3 Finishes', icon: Medal },
              { number: '50+', label: 'Challenges Solved', icon: Target },
              { number: '2', label: 'Team Leadership Roles', icon: Users }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                        <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</div>
                    <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-12">
            <Trophy className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready for New Challenges
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Always looking for opportunities to test and expand my cybersecurity skills 
              in competitive environments and collaborative projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
            >
              <Trophy className="w-5 h-5 mr-2" />
              <span>Let's Collaborate</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContestsPage;