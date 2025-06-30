import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Award, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Cybersecurity Specialist',
    'IoT Security Expert', 
    'Network Security Analyst',
    'Penetration Tester'
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentIndex];
      
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, titles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-lg">
                <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Alex Johnson
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-400">
                {displayedText}
                <span className="animate-pulse text-slate-400 dark:text-slate-500">|</span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Dedicated cybersecurity and IoT student with a passion for securing digital infrastructure 
              and protecting tomorrow's connected world through innovative security solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://github.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="https://linkedin.com/in/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="mailto:alex.johnson@email.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Explore</span>
            <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized expertise across multiple cybersecurity domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Network security, penetration testing, and vulnerability assessment with hands-on experience.',
                link: '/projects'
              },
              {
                icon: Code,
                title: 'IoT Security',
                description: 'Securing connected devices and IoT ecosystems through innovative security solutions.',
                link: '/projects'
              },
              {
                icon: Award,
                title: 'Competitions',
                description: 'Top rankings in national cybersecurity competitions including NCL, CyberPatriot, and DEF CON.',
                link: '/contests'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;