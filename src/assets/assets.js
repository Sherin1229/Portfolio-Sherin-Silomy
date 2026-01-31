import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPencilRuler, FaLayerGroup, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaFigma, FaAndroid } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-gold'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and user-friendly web interfaces.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing server-side logic and CRUD-based applications.',
    tags: ['Java', 'PHP', 'Node.js', 'Express.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and managing relational and NoSQL databases.',
    tags: ['MySQL', 'MongoDB']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building native and cross-platform mobile applications.',
    tags: ['Kotlin', 'Flutter', 'Android Studio']
  },
  {
    title: 'Full Stack Development',
    icon: FaLayerGroup,
    description: 'Building full stack web applications using MERN stack.',
    tags: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Core programming languages I use for software development.',
    tags: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Kotlin']
  },
  {
    title: 'UI / UX & Design',
    icon: FaPencilRuler,
    description: 'Designing application interfaces and user experiences.',
    tags: ['Figma', 'UI/UX Design']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Tools and platforms I use in my development workflow.',
    tags: ['Git', 'GitHub', 'Android Studio']
  }
];



export const projects = [
  {
    title: "SKM Construction Website",
    description:
      "A construction company website with project registration functionality. My contribution included the homepage design and CRUD operations for project registration.",
    image: projectImg5,
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: FaDatabase },
    ],
    demo: "#",
    code: "#",
    type: "Group Project",
    role: "Homepage design & Project registration CRUD",
  },
  {
    title: "Online Gaming Management System",
    description:
      "A web-based gaming management system with player handling features. My role focused on implementing CRUD operations for report management.",
    image: projectImg4,
    tech: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "CSS", icon: FaCss3Alt },
      { name: "MySQL", icon: FaDatabase },
    ],
    demo: "#",
    code: "#",
    type: "Group Project",
    role: "Report management CRUD",
  },
  {
    title: "Pet Care & Adoption Management System",
    description:
      "A full stack MERN application for pet listing and adoption management. My responsibility was implementing pet listing functionality with CRUD operations.",
    image: projectImg2,
    tech: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "Express.js", icon: FaServer },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: FaCss3Alt },
    ],
    demo: "#",
    code: "#",
    type: "Group Project",
    role: "Pet listing & CRUD operations",
  },
  {
    title: "Mobile App UI – Figma",
    description:
      "A mobile application UI designed using Figma, focusing on clean layout, usability, and modern design principles.",
    image: projectImg1,
    tech: [
      { name: "Figma", icon: FaFigma },
      { name: "UI/UX Design", icon: FaPencilRuler },
    ],
    demo: "#",
    code: "#",
    type: "Individual Project",
    role: "UI/UX Design",
  },
  {
    title: "Android App – UI/UX Implementation",
    description:
      "An Android application developed in Android Studio focusing on UI/UX implementation and layout design.",
    image: projectImg6,
    tech: [
      { name: "Kotlin", icon: FaAndroid },
      { name: "Android Studio", icon: FaTools },
    ],
    demo: "#",
    code: "#",
    type: "Individual Project",
    role: "UI/UX implementation",
  },
  {
    title: "Wellness Tracker App with CRUD",
    description:
      "A mobile application developed to track fitness and wellness-related activities with a clean and user-friendly interface and CRUD operations.",
    image: projectImg3,
    tech: [{ name: "Kotlin", icon: FaAndroid }],
    demo: "#",
    code: "#",
    type: "Individual Project",
    role: "Mobile app development",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase my projects, technical skills, and experience with responsive design and dark/light mode support.",
    image: projectImg4,
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: FaCss3Alt },
      { name: "Framer Motion", icon: FaPaintBrush },
    ],
    demo: "#",
    code: "#",
    type: "Individual Project",
    role: "Design and full development",
  },
];


export const workData = [
  {
    role: "Java Full Stack Training",
    company: "SLIIT Workshops",
    duration: "2024 - Present",
    description: "Completed full-stack Java training covering front-end, backend, and database integration.",
    color: "gold"
  }
];