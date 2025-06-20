import React from 'react';
import { Users, Calendar, Heart } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteeringRoles = [
    {
      organization: 'IEEE WIE Student Branch Affinity Group of Sri Lanka Technological Campus',
      roles: [
        { title: 'Chairperson', period: '2024-2025', current: true },
        { title: 'Project Co-Chairperson - InspiHER{Tech} V2.0', period: '2024' },
        { title: 'Sub-Committee Head - Editorial Team', period: '2024' },
        { title: 'Project Secretary - ConnectED', period: '2024' },
        { title: 'Logistics Team Member - DevNexa', period: '2024' }
      ],
      category: 'IEEE WIE',
      color: 'from-purple-500 to-pink-500'
    },
    {
      organization: 'IEEE Young Professionals Sri Lanka',
      roles: [
        { title: 'Program Vice Chairperson - IEEE LETs Talk', period: '2025-2026', current: true },
        { title: 'Program Coordinator - IEEE LETs Talk', period: '2024-2025' },
        { title: 'Finance Team Co-Lead - Colombo South Region -IEEE INSL', period: '2023-2024' }
      ],
      category: 'IEEE YP',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      organization: 'IEEE Computer Society',
      roles: [
        { title: 'Secretary Team Member - Tech-X Sri Lanka', period: 'November 2023' },
        { title: 'Project Secretary - IdeaniX Generation 01', period: '2023' },
        { title: 'Project Secretary - Docker Session', period: '2023' }
      ],
      category: 'IEEE CS',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Volunteering & Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Active involvement in IEEE organizations, driving innovation and community engagement in technology
          </p>
        </div>

        {/* Volunteering Roles */}
        <div className="grid lg:grid-cols-1 gap-8">
          {volunteeringRoles.map((org, orgIndex) => (
            <div key={orgIndex} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className={`bg-gradient-to-r ${org.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{org.organization}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {org.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {org.roles.length} Role{org.roles.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <Users className="w-8 h-8 opacity-80" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {org.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          {role.title}
                          {role.current && (
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </h4>
                        <div className="flex items-center text-slate-600 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {role.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                {volunteeringRoles.reduce((total, org) => total + org.roles.length, 0)}
              </div>
              <div className="text-slate-600 text-sm">Total Roles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600">
                {volunteeringRoles.reduce((total, org) => total + org.roles.filter(role => role.current).length, 0)}
              </div>
              <div className="text-slate-600 text-sm">Current Positions</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">
                {volunteeringRoles.length}
              </div>
              <div className="text-slate-600 text-sm">Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;