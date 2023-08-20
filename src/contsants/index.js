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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  user,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  docthus,
  bookinghero,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Website Security",
    icon: mobile,
  },
  {
    title: "Server Management",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: figma,
  },
  {
    name: "mysql",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Network Engineer and Developer",
    company_name: "DHTS",
    icon: user,
    iconBg: "#383E56",
    date: "September 2019 - November 2019",
    points: [
      "Installing LAN networks and maintenance.",
      "Installing security and alarm systems.",
      "Developing modules for web ERP solutions..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Network And Database Administrator",
    company_name: "Local Military Pharmacy",
    icon: user,
    iconBg: "#E6DEDD",
    date: "February 2020 - April 2021",
    points: [
      "Maintaining network stability real time.",
      "Configuring Cisco VPN to ensure private connection.",
      "Connecting the security alarm and surveillance to the network.",
      "Database administration.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Docthus",
    icon: user,
    iconBg: "#383E56",
    date: "May 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and Laravel.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bookinghero",
    icon: user,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Doing full stack development using Node.js & React.js.",
      "Leading a remote team of Web & Mobile developers & UI/UX designers.",
      "Creating new Platform (Paas).",
      "Doing code reviews.",
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
    name: "Docthus Meta",
    description:
      "Web-based platform that allows users to attend events virtually and connect with each other by Exhibiting or showcasing products/Services or attend aresentations or Workshops.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: docthus,
    source_code_link: "https://github.com/kabouyaimed",
  },
  {
    name: "Bookinghero",
    description:
      "Web application that enables users to search, book and manage their appointments for beauty and healt salons.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: bookinghero,
    source_code_link: "https://github.com/kabouyaimed",
  },
];

export { services, technologies, experiences, testimonials, projects };
