import React from 'react';
import { Shield, Cpu, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contests', id: 'contests' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Shield className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <Cpu className="w-4 h-4 text-blue-400 absolute -bottom-1 -right-1 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Cybersecurity & IoT Student passionate about securing digital infrastructure 
              and protecting tomorrow's connected world through innovative security solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a 
                href="https://linkedin.com/in/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:alex.johnson@email.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Highlight */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Expertise</h3>
            <ul className="space-y-2">
              {[
                'Cybersecurity',
                'IoT Security',
                'Penetration Testing',
                'Network Security',
                'Digital Forensics'
              ].map((skill) => (
                <li key={skill} className="text-gray-400 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of cybersecurity passion.</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-sm">Back to top</span>
              <div className="p-2 bg-slate-800 group-hover:bg-slate-700 rounded-lg transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;