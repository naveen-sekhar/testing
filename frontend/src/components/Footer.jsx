import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contests', path: '/contests' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  Alex Johnson
                </span>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Cybersecurity & IoT
                </div>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
              Cybersecurity & IoT Student passionate about securing digital infrastructure 
              and protecting tomorrow's connected world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="https://linkedin.com/in/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a 
                href="mailto:alex.johnson@email.com"
                className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                alex.johnson@email.com
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                +1 (555) 123-4567
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Alex Johnson. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;