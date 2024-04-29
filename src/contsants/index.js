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
  slack,
  gmail,
  linkedin,
  assafwa,
  camper,
  realEstate,
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
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: backend,
  },
  {
    title: "Web Security",
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
    title: "Junior Developer",
    company_name: "DHTS",
    icon: user,
    iconBg: "#383E56",
    date: "September 2019 - January 2020",
    points: [
      "Developed and maintained static and dynamic websites, ensuring seamless user experience and functionality across various browsers and devices.",
      "Collaborated with cross-functional teams to gather and analyze requirements, ensuring alignment with project objectives and client expectations.",
      "Utilized version control systems such as Git to manage code repositories and track changes, facilitating collaboration and code management within the team.",
      "Actively engaged in learning and professional development activities, staying updated on latest web development trends and technologies.",
      "Demonstrated strong problem-solving skills and attention to detail in identifying and resolving technical challenges during website development and maintenance.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Local Pharmaceuticals",
    icon: user,
    iconBg: "#E6DEDD",
    date: "February 2020 - April 2021",
    points: [
      "Managed and maintained company's network infrastructure.",
      "Implemented security protocols and firewall configurations to safeguard the network.",
      "Troubleshot network issues, identified bottlenecks, and optimized network performance.",
      "Optimized and managed database access.",
      "Performed root cause analysis for more than 10 issues to identify errors.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Docthus",
    icon: user,
    iconBg: "#383E56",
    date: "January 2022 - September 2022",
    points: [
      "Spearheaded the development of an online virtual events platform, catering to a diverse audience and achieving a 50% increase in event attendance.",
      "Collaborated with cross-functional teams including developers, designers, marketers, and sales representatives, ensuring alignment of objectives.",
      "Implemented and optimized APIs to enhance platform functionality, resulting in a 40% increase in data retrieval speed and a 25% decrease in latency.",
      "Developed scalable and flexible architecture to accommodate future growth and feature expansion, ensuring long-term sustainability of the platform.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Bookinghero ApS",
    icon: user,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Developed a SaaS platform from inception to deployment, achieving a 30% increase in user engagement within the first six months.",
      "Led a diverse team of developers and designers, fostering collaboration and achieving a 20% improvement in project delivery time.",
      "Implemented highly secure API architectures, reducing security vulnerabilities by 90% and ensuring compliance with industry standards.",
      "Conducted code reviews and implemented best practices, leading to a 30% decrease in bugs.",
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
    link: "https://meta-docthus-private.vercel.app/",
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
    link: "https://bookinghero.io/",
  },
  {
    name: "Real Estate Homes",
    description:
      "A SEO friendly fully responsive landing page for real estate businesses with a performance score of 99% on all screen sizes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://real-estate-eosin-three.vercel.app/",
  },
  {
    name: "Campers Guide",
    description:
      "A SEO friendly responsive landing page with a performance score of 99% on all screen sizes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: camper,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://hilink-campers-guide.vercel.app/",
  },
  {
    name: "Assafwa School Management",
    description:
      "Web application that helps private and public schools manage their shcedules, students and everything related to their stablishment.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: assafwa,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://app.assafwaschool.com/login",
  },
  {
    name: "Gmail Clone",
    description: "A Front-End clone of the famous web platfrom Gmail.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://clone-pr-bd2af.web.app/",
  },
  {
    name: "Linkedin Clone",
    description: "A Front-End clone of the famous web platfrom Linkedin.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://linkdin-clone-pr.web.app/",
  },
  {
    name: "Slack Clone",
    description: "A Front-End clone of the famous web platfrom Slack.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: slack,
    source_code_link: "https://github.com/kabouyaimed",
    link: "https://slack-clone-pr-e298e.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
