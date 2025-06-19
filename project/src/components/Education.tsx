import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Software Engineering',
      institution: 'Sri Lanka Technological Campus (SLTC)',
      period: '2021 - Present',
      status: '4th Year Undergraduate',
      location: 'Padukka, Sri Lanka',
      specialization: 'Artificial Intelligence & Machine Learning',
      description: 'Comprehensive software engineering program with focus on AI/ML, full-stack development, and modern software practices.',
      highlights: [
        'Specialization in AI & Machine Learning',
        'Research in Computer Vision applications',
        'Full-stack development projects',
        'DevOps and containerization experience'
      ],
      type: 'Undergraduate',
      color: 'from-blue-600 to-emerald-600'
    },
    {
      degree: 'Advanced Level (A/L)',
      institution: 'Ananda Balika Vidyalaya',
      period: '2018 - 2020',
      status: 'Completed',
      location: 'Colombo, Sri Lanka',
      specialization: 'Mathematics Stream',
      description: 'Advanced Level education in Mathematics stream, building strong analytical and problem-solving foundations.',
      highlights: [
        'Mathematics Stream',
        'Strong analytical foundation',
        'Problem-solving skills development'
      ],
      type: 'Secondary',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Academic journey focused on software engineering excellence and continuous learning
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-slate-300"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.type === 'Undergraduate' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {edu.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-semibold mb-3">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {edu.institution}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-slate-400" />
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {edu.specialization && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.specialization}
                      </span>
                    </div>
                  )}
                  
                  <p className="text-slate-700 leading-relaxed mb-6">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Highlights</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;