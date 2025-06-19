import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend & Mobile',
    backend: 'Backend & Database',
    tools: 'DevOps & Tools',
    other: 'AI/ML & Other'
  };

  const categoryIcons = {
    frontend: '📱',
    backend: '⚙️',
    tools: '🛠️',
    other: '🧠'
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-emerald-500 to-emerald-600';
    if (level >= 75) return 'from-blue-500 to-blue-600';
    if (level >= 65) return 'from-yellow-500 to-yellow-600';
    return 'from-slate-400 to-slate-500';
  };

  const getSkillLevel = (level: number) => {
    if (level >= 85) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 65) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across multiple domains of software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{categoryIcons[category as keyof typeof categoryIcons]}</div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {categories[category as keyof typeof categories]}
                </h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {getSkillLevel(skill.level)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
            Currently Learning & Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'GraphQL', 'Kubernetes', 'AWS', 'TensorFlow', 'PyTorch', 'Rust', 'Web3'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;