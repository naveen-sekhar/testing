import React, { useState } from 'react';
import { contactData } from '../data/mockData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink, MessageCircle, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactData.socialLinks.github,
      icon: Github,
      color: 'hover:text-purple-400 hover:shadow-purple-500/25'
    },
    {
      name: 'LinkedIn',
      url: contactData.socialLinks.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:shadow-blue-500/25'
    },
    {
      name: 'Twitter',
      url: contactData.socialLinks.twitter,
      icon: Twitter,
      color: 'hover:text-cyan-400 hover:shadow-cyan-500/25'
    },
    {
      name: 'Website',
      url: contactData.socialLinks.personal_website,
      icon: ExternalLink,
      color: 'hover:text-green-400 hover:shadow-green-500/25'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Let's Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href={`mailto:${contactData.email}`}
                        className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a 
                        href={`tel:${contactData.phone}`}
                        className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{contactData.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Availability</p>
                  <p className="text-cyan-400 font-medium">{contactData.availability}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow My Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-cyan-400" />
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-gray-400 text-center">
                  Prefer email? Reach out directly at{' '}
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {contactData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;