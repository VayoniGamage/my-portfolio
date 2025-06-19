import { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Non-contact Heart Beat Detection System',
    description: 'Research project using machine learning, computer vision, and deep learning for contactless vital sign monitoring',
    longDescription: 'Developing an innovative research project that leverages machine learning algorithms, computer vision techniques, and deep learning models to detect heart rate without physical contact. This cutting-edge system uses advanced image processing and AI to monitor vital signs remotely, with applications in healthcare and wellness monitoring.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'OpenCV', 'TensorFlow'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: true
  },
  {
    id: '2',
    title: 'Scalable Web Application - Containerized & CI/CD',
    description: 'Full-stack web application deployed with Docker containerization and automated CI/CD pipeline',
    longDescription: 'Built a scalable web application focused on Sri Lankan context, implementing modern DevOps practices including Docker containerization, NGINX load balancing, and Minikube orchestration. Features automated CI/CD pipeline for seamless deployment and version control integration.',
    technologies: ['Docker', 'CI/CD', 'NGINX', 'Minikube', 'HTML/CSS/JS', 'Git', 'DevOps'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: true
  },
  {
    id: '3',
    title: 'Todo App - Full Stack',
    description: 'Modern todo application with Node.js backend, React Native frontend, and MongoDB database',
    longDescription: 'Comprehensive task management application featuring a robust Node.js backend API, intuitive React Native mobile interface, and MongoDB database. Includes user authentication, real-time updates, task categorization, and cross-platform compatibility.',
    technologies: ['Node.js', 'React Native', 'MongoDB', 'Postman', 'REST API', 'JavaScript'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: true
  },
  {
    id: '4',
    title: 'Learning Management System',
    description: 'Comprehensive educational platform built with React Native for mobile learning',
    longDescription: 'Full-featured learning management system designed for mobile-first education. Includes course management, student progress tracking, assignment submission, interactive quizzes, and real-time communication between instructors and students.',
    technologies: ['React Native', 'JavaScript', 'Mobile Development', 'Education Tech'],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: false
  },
  {
    id: '5',
    title: 'GPA Calculator Mobile App',
    description: 'Flutter-based mobile application for academic GPA calculation and tracking',
    longDescription: 'User-friendly mobile application built with Flutter for calculating and tracking academic GPA. Features semester-wise grade input, credit hour management, cumulative GPA calculation, and academic progress visualization.',
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'Academic Tools'],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: false
  },
  {
    id: '6',
    title: 'NIC Decoder Mobile Application',
    description: 'Flutter app for decoding Sri Lankan National Identity Card information',
    longDescription: 'Specialized mobile application that decodes Sri Lankan National Identity Card numbers to extract personal information such as birth date, gender, and district. Built with Flutter for cross-platform compatibility and user-friendly interface.',
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'Data Processing'],
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: false
  },
  {
    id: '7',
    title: 'Time Table Scheduling Application',
    description: 'React Native app with MongoDB for academic schedule management',
    longDescription: 'Comprehensive scheduling application for academic institutions, featuring automated timetable generation, conflict resolution, resource allocation, and real-time updates. Built with React Native for mobile accessibility and MongoDB for data management.',
    technologies: ['React Native', 'MongoDB', 'Scheduling Algorithms', 'Mobile Development'],
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: false
  },
  {
    id: '8',
    title: 'Attendance Management System',
    description: 'React Native application for digital attendance tracking and management',
    longDescription: 'Digital attendance management system with features for student check-in/check-out, attendance analytics, reporting, and administrative controls. Designed for educational institutions with mobile-first approach.',
    technologies: ['React Native', 'Mobile Development', 'Database Management', 'Analytics'],
    image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '',
    githubUrl: '',
    featured: false
  }
];

export const skills: Skill[] = [
  // Mobile Development
  { name: 'Flutter', level: 90, category: 'frontend' },
  { name: 'React Native', level: 85, category: 'frontend' },
  { name: 'Dart', level: 85, category: 'frontend' },
  
  // Frontend Technologies
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 80, category: 'frontend' },
  { name: 'UI/UX Design', level: 75, category: 'frontend' },
  
  // Backend & Database
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'MySQL', level: 70, category: 'backend' },
  { name: 'REST APIs', level: 80, category: 'backend' },
  
  // AI & Data Science
  { name: 'Python', level: 85, category: 'other' },
  { name: 'Machine Learning', level: 80, category: 'other' },
  { name: 'Deep Learning', level: 75, category: 'other' },
  { name: 'Computer Vision', level: 70, category: 'other' },
  { name: 'TensorFlow', level: 70, category: 'other' },
  
  // DevOps & Tools
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'CI/CD', level: 70, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'NGINX', level: 65, category: 'tools' },
  { name: 'Postman', level: 80, category: 'tools' },
  
  // Other Skills
  { name: 'Project Management', level: 80, category: 'other' },
  { name: 'Data Structures (C)', level: 75, category: 'other' }
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/vayoni-gamage', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/vayonigamage', icon: 'Github' },
  { name: 'Email', url: 'mailto:vayonithathsarani2770@gmail.com', icon: 'Mail' },
  { name: 'Phone', url: 'tel:+94705896939', icon: 'Phone' }
];