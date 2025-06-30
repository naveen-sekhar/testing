import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Shield, Lock, Wifi } from 'lucide-react';

const Hero = () => {
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield className="absolute top-20 left-10 w-8 h-8 text-cyan-400/20 animate-bounce" style={{ animationDelay: '0s' }} />
        <Lock className="absolute top-40 right-20 w-6 h-6 text-blue-400/20 animate-bounce" style={{ animationDelay: '1s' }} />
        <Wifi className="absolute bottom-40 left-20 w-10 h-10 text-cyan-400/20 animate-bounce" style={{ animationDelay: '2s' }} />
        <Shield className="absolute bottom-20 right-10 w-7 h-7 text-blue-400/20 animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-slate-700 bg-slate-800 flex items-center justify-center">
              <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-400">
              {displayedText}
              <span className="animate-pulse text-blue-400">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about securing digital infrastructure and IoT ecosystems. 
            Dedicated to protecting tomorrow's connected world through innovative cybersecurity solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25">
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25">
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25">
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;