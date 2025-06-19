import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = [
    {
      title: 'Intern',
      company: 'Hatton National Bank - Padukka Branch',
      period: 'December 2020 - December 2021',
      location: 'Padukka, Sri Lanka',
      description: 'Gained practical experience in banking operations, customer service, and financial processes during a comprehensive internship program.',
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Building practical experience through internships and professional engagements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-200"></div>
              
              <div className="flex items-start space-x-6 pb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;