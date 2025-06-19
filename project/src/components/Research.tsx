import React from 'react';
import { Brain, Search, Microscope, TrendingUp, Calendar, Users } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'Computer Vision & Image Processing',
      description: 'Developing advanced algorithms for medical image analysis and real-time object detection systems.',
      icon: <Brain className="w-6 h-6" />,
      projects: ['Non-contact Heart Beat Detection', 'Medical Image Segmentation'],
      status: 'Active',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Machine Learning Applications',
      description: 'Research in applying ML techniques to solve real-world problems in healthcare and education.',
      icon: <TrendingUp className="w-6 h-6" />,
      projects: ['Predictive Health Monitoring', 'Educational Analytics'],
      status: 'Active',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Mobile Health Technologies',
      description: 'Investigating mobile-based solutions for remote health monitoring and telemedicine.',
      icon: <Microscope className="w-6 h-6" />,
      projects: ['Remote Vital Signs Monitoring', 'Mobile Health Apps'],
      status: 'Planning',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const currentResearch = {
    title: 'Non-contact Heart Beat Detection System',
    description: 'Developing an innovative system that uses computer vision and deep learning to detect heart rate without physical contact. This research combines advanced image processing techniques with machine learning algorithms to monitor vital signs remotely.',
    duration: '2024 - Present',
    collaborators: 'SLTC Research Team',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
    objectives: [
      'Develop contactless vital sign monitoring system',
      'Implement real-time heart rate detection algorithms',
      'Validate accuracy against traditional methods',
      'Create user-friendly interface for healthcare applications'
    ]
  };

  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Research & Innovation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Exploring cutting-edge technologies in AI, machine learning, and computer vision to solve real-world challenges
          </p>
        </div>

        {/* Current Research Highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-8 h-8" />
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Current Research
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{currentResearch.title}</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">{currentResearch.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Duration: {currentResearch.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Collaborators: {currentResearch.collaborators}</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentResearch.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Research Objectives</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {currentResearch.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-slate-700 text-sm">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Research Areas of Interest</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className={`bg-gradient-to-r ${area.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {area.icon}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      area.status === 'Active' 
                        ? 'bg-emerald-500/20 text-emerald-100' 
                        : 'bg-yellow-500/20 text-yellow-100'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{area.title}</h4>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed">{area.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm mb-2">Related Projects</h5>
                    <div className="space-y-1">
                      {area.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Research Impact & Goals</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Innovation</h4>
              <p className="text-slate-600 text-sm">Developing novel AI solutions for healthcare and technology challenges</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Collaboration</h4>
              <p className="text-slate-600 text-sm">Working with academic and industry partners to advance research</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-800">Impact</h4>
              <p className="text-slate-600 text-sm">Creating solutions that benefit society and advance scientific knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;