import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Award, Users, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const iconMap: Record<string, React.ElementType> = {
    Github,
    Linkedin,
    Mail,
    Phone
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      label: 'Email',
      value: 'vayonithathsarani2770@gmail.com',
      href: 'mailto:vayonithathsarani2770@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-600" />,
      label: 'Phone',
      value: '+94 705 896 939',
      href: 'tel:+94705896939'
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      label: 'Location',
      value: 'Sri Lanka',
      href: null
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-4 h-4 text-purple-600" />,
      title: 'IEEE WIE Chairperson',
      organization: 'SLTC Student Branch',
      period: '2024-2025'
    },
    {
      icon: <Users className="w-4 h-4 text-blue-600" />,
      title: 'Program Vice Chairperson',
      organization: 'IEEE LETs Talk',
      period: '2025-2026'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or discussing innovative AI/ML projects? 
            I'd love to connect and explore possibilities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                    <div className="flex-shrink-0 p-2 bg-slate-50 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 text-sm">{info.label}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Roles */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                Current Leadership Roles
              </h4>
              <div className="space-y-3">
                {achievements.map((role, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 p-1">
                      {role.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 text-sm">{role.title}</h5>
                      <p className="text-slate-600 text-xs">{role.organization}</p>
                      <p className="text-slate-500 text-xs">{role.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = iconMap[link.icon];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-300"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;