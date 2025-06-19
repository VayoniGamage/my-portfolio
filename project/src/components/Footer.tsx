import React from 'react';
import { Heart, Award, Users, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vayoni Gamage</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Software Engineering student passionate about AI, Machine Learning, 
              and innovative technology solutions. Always ready to collaborate on 
              impactful projects.
            </p>
            <div className="flex space-x-4 text-slate-300">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-purple-400" />
                <span className="text-sm">IEEE WIE Chairperson</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#volunteering" className="hover:text-white transition-colors">Volunteering</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:vayonithathsarani2770@gmail.com" className="hover:text-white transition-colors text-sm">
                  vayonithathsarani2770@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+94705896939" className="hover:text-white transition-colors text-sm">
                  +94 705 896 939
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and dedication to innovation</span>
            </div>
            
            <div className="text-slate-400 text-sm">
              © {currentYear} Vayoni Gamage. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}