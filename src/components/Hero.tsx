import React from 'react';
import { ChevronDown, Download, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Professional Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Vayoni Gamage
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-700 mb-6 font-medium">
              Software Engineering Student & AI Research Enthusiast
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          </div>

          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              4th-year BSc (Hons) Software Engineering undergraduate at Sri Lanka Technological Campus, 
              specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Research Focus</h3>
                <p className="text-sm text-slate-600">AI, ML, Computer Vision</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Development</h3>
                <p className="text-sm text-slate-600">Flutter, React Native, Full-Stack</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Leadership</h3>
                <p className="text-sm text-slate-600">IEEE WIE Chairperson</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-600">
            <a href="mailto:vayonithathsarani2770@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail size={16} />
              <span className="text-sm">vayonithathsarani2770@gmail.com</span>
            </a>
            <a href="tel:+94705896939" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone size={16} />
              <span className="text-sm">+94 705 896 939</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">Sri Lanka</span>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <ExternalLink size={18} />
              View Projects
            </button>
            
            <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;