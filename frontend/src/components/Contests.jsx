import React, { useState } from 'react';
import { contestsData } from '../data/mockData';
import { Trophy, Users, User, Medal, Star, ChevronRight, Target } from 'lucide-react';

const Contests = () => {
  const [expandedContest, setExpandedContest] = useState(null);

  const getPositionColor = (position) => {
    if (position.includes('1st') || position.includes('Gold')) {
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    } else if (position.includes('2nd') || position.includes('Silver')) {
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    } else if (position.includes('3rd') || position.includes('Bronze')) {
      return 'bg-amber-600/20 text-amber-400 border-amber-600/30';
    } else if (position.includes('Top')) {
      return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    }
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const getCategoryIcon = (category) => {
    return category === 'Team Competition' ? Users : User;
  };

  const toggleExpanded = (id) => {
    setExpandedContest(expandedContest === id ? null : id);
  };

  return (
    <section id="contests" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Competitions & Awards
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proving expertise through competitive cybersecurity challenges and earning recognition in prestigious competitions worldwide.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 mb-12">
          {contestsData.map((contest, index) => {
            const IconComponent = getCategoryIcon(contest.category);
            return (
              <div key={contest.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div 
                    className="p-6 cursor-pointer hover:bg-slate-800/30 transition-colors duration-300"
                    onClick={() => toggleExpanded(contest.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                            <Trophy className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {contest.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 mt-2">
                              <span className="text-cyan-400 font-medium">{contest.year}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPositionColor(contest.position)}`}>
                                {contest.position}
                              </span>
                              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                                <IconComponent className="w-4 h-4" />
                                <span>{contest.category}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {contest.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {contest.skills.slice(0, 4).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          {contest.skills.length > 4 && (
                            <span className="bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm">
                              +{contest.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        <ChevronRight 
                          className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                            expandedContest === contest.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedContest === contest.id && (
                    <div className="border-t border-slate-700 animate-in slide-in-from-top-2 duration-300">
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {contest.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-lg font-semibold text-cyan-400 mb-4">Skills Demonstrated</h4>
                        <div className="flex flex-wrap gap-3">
                          {contest.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competition Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '5+', label: 'Competitions Won', icon: Trophy },
            { number: '3', label: 'Top 3 Finishes', icon: Medal },
            { number: '50+', label: 'Challenges Solved', icon: Target },
            { number: '2', label: 'Team Leadership Roles', icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-slate-900 px-8 py-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Ready for New Challenges</h3>
              <p className="text-gray-300 mb-4">
                Always looking for opportunities to test and expand my cybersecurity skills in competitive environments.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Trophy className="w-5 h-5" />
                <span>Let's Collaborate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contests;