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
  ericsson,
  scb,
  aia,
  hitachi,
  opencrm,
  threejs,
  hackerrank,
  hackerrank_sql,
  microsoft,
  azure_devops,
  azure_developer,
  azure_solution_architect,
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
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Development Manager",
    company_name: "Standard Chartered Bank",
    icon: scb,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Work with an agile team to design, develop, test and maintain applications.",
      "Design, develop and Unit test applications in accordance with established standards.",
      "Participate in the peer-reviews of solution designs and related code.",
      "Contribute to design and implementation of application integration solution.",
    ],
  },
  {
    title: "Solution Architect",
    company_name: "AIA digital+",
    icon: aia,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jun 2023",
    points: [
      "Design, review, and manage system architecture for the applications in cloud environment.",
      "Design and help to develop outstanding web application with cloud technology from concept to launch.",
      "Provide high availability for the services and applications in cloud environment.",
      "Perform technical assessments of critical applications for improving the functional and performance requirements.",
    ],
  },
  {
    title: "Senior Java Developer",
    company_name: "Ericsson",
    icon: ericsson,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Nov 2020",
    points: [
      "Application architecture design, division of Microservice for solutions that scale to the customers' business requirements.",
      "Leads the technical delivery sessions in a way that maintains an unyielding focus on quality.",
      "Leads the team to apply DevOps practices and implement test automation across all.",
      "Responsible for resolution of the most technically challenging issues and resolved these in a timely and precise manner.",
    ],
  },
  {
    title: "Senior Fullstack Developer",
    company_name: "Hitachi",
    icon: hitachi,
    iconBg: "#383E56",
    date: "Sep 2008 - Aug 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const certifications = [
  {
    title: "Azure Developer Associate",
    organization: "Microsoft",
    icon: microsoft,
    image: azure_developer,
    link: "https://learn.microsoft.com/en-us/users/98174984/credentials/certification/azure-developer",
  },
  {
    title: "Azure DevOps Engineer Expert",
    organization: "Hacker Rank",
    icon: microsoft,
    image: azure_devops,
    link: "https://learn.microsoft.com/en-us/users/98174984/credentials/certification/devops-engineer",
  },
  {
    title: "Azure Solution Architect",
    organization: "Microsoft",
    icon: microsoft,
    image: azure_solution_architect,
    link: "https://learn.microsoft.com/en-us/users/98174984/credentials/certification/azure-solutions-architect",
  },
  {
    title: "SQL (Advanced)",
    organization: "Hacker Rank",
    icon: hackerrank,
    image: hackerrank_sql,
    link: "https://www.hackerrank.com/certificates/3768ce0a7973",
  },
];

const projects = [
  {
    name: "Open CRM",
    description:
      "A complete CRM (Customer Relationship Management) example project. It provides a set of tools and features to manage customer data, track interactions, and streamline business processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: opencrm,
    source_code_link: "https://github.com/kevinleungdev/OpenCRM",
  },
  {
    name: "Open CRM",
    description:
      "A complete CRM (Customer Relationship Management) example project. It provides a set of tools and features to manage customer data, track interactions, and streamline business processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: opencrm,
    source_code_link: "https://github.com/kevinleungdev/OpenCRM",
  },
  {
    name: "Open CRM",
    description:
      "A complete CRM (Customer Relationship Management) example project. It provides a set of tools and features to manage customer data, track interactions, and streamline business processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: opencrm,
    source_code_link: "https://github.com/kevinleungdev/OpenCRM",
  },
];

export { services, technologies, experiences, certifications, projects };
