import React from 'react';
import { Briefcase, Award, Code, MapPin } from 'lucide-react';

const ProfessionalProfile = () => {
  const certifications = [
    { 
      name: 'MikroTik Certified Network Associate (MTCNA)', 
      date: 'November 2024',
      ongoing: false,
      icon: '/api/placeholder/100/100?text=MTCNA'
    },
    { 
      name: 'MikroTik Certified Routing Expert (MTCRE)', 
      date: 'In Progress',
      ongoing: true,
      icon: '/api/placeholder/100/100?text=MTCRE'
    },
    { 
      name: 'Juniper JNCIA (Planned)', 
      date: 'Upcoming',
      ongoing: true,
      icon: '/api/placeholder/100/100?text=JNCIA'
    },
    { 
      name: 'Juniper JNCIS-SP (Planned)', 
      date: 'Upcoming',
      ongoing: true,
      icon: '/api/placeholder/100/100?text=JNCIS-SP'
    },
    { 
      name: 'Zabbix 7 Application and Network Monitoring', 
      date: 'Recent',
      ongoing: false,
      icon: '/api/placeholder/100/100?text=Zabbix'
    },
    { 
      name: 'CompTIA A+', 
      date: '2019',
      ongoing: false,
      icon: '/api/placeholder/100/100?text=CompTIA'
    },
    { 
      name: 'Cyber Security Course', 
      date: 'Recent',
      ongoing: false,
      icon: '/api/placeholder/100/100?text=Cyber'
    },
    { 
      name: 'Flowgear Certified', 
      date: 'Recent',
      ongoing: false,
      icon: '/api/placeholder/100/100?text=Flowgear'
    }
  ];

  const skills = [
    'Voice over IP (VoIP)', 
    'Network Troubleshooting', 
    'Project Coordination', 
    'MySQL', 
    'ConnectWise', 
    'Jira'
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl rounded-2xl">
      <header className="text-center mb-10 bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <img 
            src="/api/placeholder/200/200?text=Erick+Leemans" 
            alt="Erick Leemans" 
            className="rounded-full border-4 border-blue-500 w-48 h-48 object-cover shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-800">Erick Leemans</h1>
        <p className="text-xl text-blue-600">Senior Network Engineer</p>
        <p className="text-md text-gray-600 flex items-center justify-center gap-2 mt-2">
          <MapPin className="inline-block" size={20} />
          Level-7 Wireless (Pty) Ltd, Centurion, Gauteng, South Africa
        </p>
      </header>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-200 pb-2 mb-4 flex items-center text-blue-700">
          <Briefcase className="mr-3 text-blue-500" /> Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A passionate technology professional with over five years of hands-on experience in IT and telecommunications. 
          Currently expanding my expertise through advanced network certifications, including the MikroTik Certified Routing Expert (MTCRE) 
          and preparing for Juniper JNCIA and JNCIS-SP. Specialising in innovative solutions for call centres, including OmniChannel 
          products and spam protection technologies.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-200 pb-2 mb-4 flex items-center text-blue-700">
            <Award className="mr-3 text-blue-500" /> Certifications
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-md text-center ${
                  cert.ongoing 
                  ? 'bg-yellow-50 border-2 border-yellow-200' 
                  : 'bg-blue-50'
                }`}
              >
                <img 
                  src={cert.icon} 
                  alt={cert.name} 
                  className="mx-auto mb-2 w-16 h-16 object-contain"
                />
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-200 pb-2 mb-4 flex items-center text-blue-700">
            <Code className="mr-3 text-blue-500" /> Key Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colours"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
