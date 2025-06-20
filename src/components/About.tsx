import React from 'react';
import { GraduationCap, Award, Users, BookOpen, Brain, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const education = {
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Sri Lanka Technological Campus (SLTC)',
    year: '4th Year Undergraduate',
    gpa: 'Specializing in AI & Machine Learning'
  };

  const certifications = [
    'Google UX Design Professional Certificate',
    'OCI Generative AI Professional',
    'Certified in Cybersecurity (CC) - ISC2',
    'Programming in Python - UOM'
  ];

  const leadership = [
    {
      title: 'Chairperson',
      organization: 'IEEE WIE Student Branch - SLTC',
      period: '2024-2025'
    },
    {
      title: 'Program Vice Chairperson',
      organization: 'IEEE LETs Talk',
      period: '2025-2026'
    },
    {
      title: 'IEEE WIE Day Ambassador',
      organization: 'IEEE WIE',
      period: '2024'
    }
  ];

  const expertise = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: 'Artificial Intelligence & ML',
      description: 'Research and development in machine learning, deep learning, and computer vision applications'
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-600" />,
      title: 'Mobile & Web Development',
      description: 'Full-stack development using Flutter, React Native, Node.js, and modern frameworks'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: 'DevOps & Cloud',
      description: 'Containerization with Docker, CI/CD pipelines, and cloud deployment strategies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate software engineering student with a focus on AI research and innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education & Background */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Education
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-800 mb-2">{education.degree}</h4>
                <p className="text-slate-600 mb-1">{education.institution}</p>
                <p className="text-sm text-slate-500">{education.year} • {education.gpa}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-600" />
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Professional Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership & Profile */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Vayoni Gamage" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Vayoni Gamage</h4>
              <p className="text-slate-600 text-sm">Software Engineering Student</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-600" />
                Leadership Roles
              </h3>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg">
                    <h4 className="font-semibold text-slate-800 text-sm">{role.title}</h4>
                    <p className="text-slate-600 text-sm">{role.organization}</p>
                    <p className="text-slate-500 text-xs mt-1">{role.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-slate-800 mb-3">Research Interests</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Computer Vision & Image Processing</li>
                <li>• Machine Learning Applications</li>
                <li>• Mobile Health Technologies</li>
                <li>• DevOps & Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;