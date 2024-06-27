import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  rn,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  git,
  ml,
  dl,
  sm,
  ecil,
  cob,
  cbit,
  tc,
  confweb,
  tec,
  req,
  cosc,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: rn,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Deep Learning",
    icon: dl,
  },
];

const experiences = [
  {
    title: "Sandwich Diploma Trainee",
    company_name: "Electronics Corporation of India Ltd., ECIL, Hyderabad",
    icon: ecil,
    iconBg: "#383E56",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Implemented cost-effective solutions, saving 20% in operational expenses.",
      "Developed Software-Defined Computing Platform (SDCP) solutions, boosting productivity by 25%.",
      "Created a dynamic website showcasing ECIL's projects and services.",
      "Increased user engagement by 30% and lead generation by 25%.",
      "Enhanced data organization and presentation, improving overall user experience.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Chaitanya Bharathi Institute of Technology",
    icon: cbit,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Developed a dynamic conference website, increasing productivity by 30%.",
      "Enhanced user experience with comprehensive conference schedules and speaker profiles.",
      "Simplified abstract submission process, facilitating easier participation for hundreds.",
      "Implemented responsive design for seamless access across devices.",
      "Collaborated with faculty and organizers to ensure accurate and timely information delivery.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "CodesOnBytes",
    icon: cob,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Engaged in project-based internships to bridge the gap between classroom learning and real-world experience.",
      "Gained hands-on experience in full-stack development using JavaScript.",
      "Contributed to diverse web development projects, enhancing practical skills.",
      "Collaborated with team members to implement and refine web applications.",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company_name: "Slash Mark",
    icon: sm,
    iconBg: "#383E56",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Developing and maintaining full-stack web applications using the MERN stack.",
      "Collaborating with senior developers to implement new features and enhancements.",
      "Debugging and optimizing code to improve application performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working on real-world projects that enhance user experience and functionality.",
    ],
  },
  {
    title: "Rookie Developer",
    company_name: "TimeChain Labs",
    icon: tc,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Title: Rookie Developer in TimeChain Summer of Code 2024, 2nd Edition",
      "Focus: The TSoC'24 Rookie Phase is dedicated to leveling up blockchain skills.",
      "Duration: The program runs from 1st June to 30th September 2024.",
      "Goal: Enhancing blockchain knowledge and practical skills through a structured and immersive learning experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Conference Website",
    description:
      "Our dynamic conference website simplifies event management, offers detailed speaker and session information, facilitates abstract submissions, and encourages academic collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: confweb,
    dep_link: "https://confweb.netlify.app/",
    source_code_link: "https://github.com/AlleAkhil/Confweb",
  },
  {
    name: "Tecstasy 2k24",
    description:
      "Explore TECSTASY's hub for participating clubs, event coordinators, engaging activities, event posters, registration links, and updates on innovation and collaboration in technical fields.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: tec,
    dep_link: "https://tecstasy24.netlify.app/",
    source_code_link: "https://github.com/AlleAkhil/Tecstasy24",
  },
  {
    name: "COSC - OpenSys",
    description:
      "OpenSys: an online platform showcasing competitive events for CBIT's open-source community with event highlights, descriptions, registration info, and FAQs for engagement.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cosc,
    dep_link: "https://cbitosc.github.io/OpenSys-23/",
    source_code_link: "",
  },
  {
    name: "Requisition Management Systema",
    description:
      "Efficient Web-based Requisition Management System (W-RMS) using MVC (MySQL, HTML, PHP) for streamlined Guesthouse, Vehicle, and Canteen requisition processes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: req,
    dep_link: "",
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
