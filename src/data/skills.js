import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'

export const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: FiCode,
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: FiServer,
    skills: ['Node.js', 'REST APIs', 'Authentication (Basics)'],
  },
  {
    key: 'databases',
    title: 'Databases',
    icon: FiDatabase,
    skills: ['MySQL', 'PostgreSQL (Basics)'],
  },
  {
    key: 'tools',
    title: 'Tools',
    icon: FiTool,
    skills: ['Git & GitHub', 'Vite', 'VS Code', 'Figma (Basics)'],
  },
]

