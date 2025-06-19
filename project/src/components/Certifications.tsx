import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      platform: 'Coursera',
      date: '2024',
      status: 'Completed',
      description: 'Comprehensive UX design program covering user research, wireframing, prototyping, and usability testing.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Figma'],
      credentialUrl: '',
      featured: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'OCI Generative AI Professional',
      issuer: 'Oracle',
      platform: 'Oracle University',
      date: '2024',
      status: 'Completed',
      description: 'Advanced certification in Oracle Cloud Infrastructure Generative AI services and applications.',
      skills: ['Generative AI', 'Oracle Cloud', 'AI Services', 'Machine Learning'],
      credentialUrl: '',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      platform: 'ISC2',
      date: '2024',
      status: 'Completed',
      description: 'Entry-level cybersecurity certification covering security principles, network security, and risk management.',
      skills: ['Cybersecurity', 'Network Security', 'Risk Management', 'Security Principles'],
      credentialUrl: '',
      featured: true,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Programming in Python',
      issuer: 'University of Moratuwa (UOM)',
      platform: 'University of Moratuwa',
      date: '2023',
      status: 'Completed',
      description: 'Comprehensive Python programming course covering fundamentals to advanced concepts.',
      skills: ['Python Programming', 'Data Structures', 'Algorithms', 'Object-Oriented Programming'],
      credentialUrl: '',
      featured: false,
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCertifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-8 h-8 opacity-90" />
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-white/90 text-sm">{cert.issuer}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                    </div>
                    <div className="flex items-center text-emerald-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{cert.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-slate-800 text-sm mb-2">Skills Gained</h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {cert.credentialUrl && (
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        {otherCertifications.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Additional Certifications</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherCertifications.map((cert, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1">{cert.title}</h4>
                      <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.date}
                        </div>
                        <div className="flex items-center text-emerald-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          <span className="text-xs font-medium">{cert.status}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-3">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-white text-slate-600 text-xs rounded border">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="px-2 py-1 bg-white text-slate-600 text-xs rounded border">
                            +{cert.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certification Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Certification Summary</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">{certifications.length}</div>
                <div className="text-slate-600 text-sm">Total Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">{featuredCertifications.length}</div>
                <div className="text-slate-600 text-sm">Featured Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">
                  {new Set(certifications.flatMap(cert => cert.skills)).size}
                </div>
                <div className="text-slate-600 text-sm">Skills Acquired</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;