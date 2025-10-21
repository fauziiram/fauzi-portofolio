export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'HR Team',
    position: 'PT Amerta Indah Otsuka',
    img: 'assets/review1.png',
    review:
      'The Recruitment App developed by Fauzi streamlined our entire hiring process. From candidate application to onboarding, everything became smoother and more transparent.',
  },
  {
    id: 2,
    name: 'IT Support Lead',
    position: 'Internal IT',
    img: 'assets/review2.png',
    review:
      'Fauzi’s Chatbot solution drastically reduced repetitive questions from employees. Internal communication is faster and more efficient now.',
  },
  {
    id: 3,
    name: 'Operations Manager',
    position: 'Office Operations',
    img: 'assets/review3.png',
    review:
      'The Workspace Plus project transformed our office environment. Randomized seating boosted cross-team collaboration.',
  },
  {
    id: 4,
    name: 'Communications Department',
    position: 'Corporate Communications',
    img: 'assets/review4.png',
    review:
      'The WhatsApp Bot integration saved us hours every week in sending announcements and confirmations. It’s now a vital part of our daily workflow.',
  },
  {
    id: 5,
    name: 'HR & Admin Division',
    position: 'PT Amerta Indah Otsuka',
    img: 'assets/review1.png',
    review:
      'Our canteen operations are now seamless — thanks to Fauzi’s RFID-based meal system integrated with catering vendors. Simple, efficient, and reliable.',
  },
  {
    id: 6,
    name: 'Security & Administration Team',
    position: 'Front Office',
    img: 'assets/review2.png',
    review:
      'The Front Desk System centralized multiple manual processes into one smart dashboard — visitor logs, parking, and packages are all tracked easily now.',
  },
  {
    id: 7,
    name: 'Procurement Department',
    position: 'Procurement',
    img: 'assets/review3.png',
    review:
      'The Auction Platform allowed vendors to submit bids easily and transparently, reducing manual work and human error.',
  },
  {
    id: 8,
    name: 'Continuous Improvement Team',
    position: 'CI/Kaizen',
    img: 'assets/review4.png',
    review:
      'IdeaBox motivated our employees to share improvement ideas. It’s now a cornerstone of our continuous improvement culture.',
  },
];

export const myProjects = [
  {
    title: 'Recruitment App',
    desc: 'Streamlined the recruitment process from candidate application to onboarding.',
    subdesc: 'Features: candidate tracking, interview scheduling, and hiring automation.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Chatbot + Knowledge Base',
    desc: 'AI-powered chatbot integrated with company knowledge base to handle employee inquiries efficiently.',
    subdesc: 'Built with NLP integrations and internal systems.',
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Workspace Plus',
    desc: 'Automated desk allocation system that randomizes employee seating daily to support free desk policy.',
    subdesc: 'Improved collaboration and space utilization across teams.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'WhatsApp Bot & Blast',
    desc: 'Automation for sending announcements and messages via WhatsApp to employees and vendors.',
    subdesc: 'Integrated with company systems for bulk messaging and confirmations.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Canteen Application',
    desc: 'Employee meal management using RFID and socket-based validation with vendor integrations and WhatsApp notifications.',
    subdesc: 'RFID-based flow with real-time validation.',
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Front Desk System',
    desc: 'Comprehensive front-office solution for visitors, parking, packages, transporters, project tracking, key borrowing, and vehicle management.',
    subdesc: 'Centralized dashboard replacing multiple manual processes.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Factory Visit Quiz (Web + Mobile)',
    desc: 'Interactive quiz platform for factory visitors with real-time updates using WebSocket technology.',
    subdesc: 'Supports both web and mobile with live leaderboards.',
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Online Auction System (Vendor Bidding)',
    desc: 'Web platform enabling vendors to place bids in real time during company procurement sessions.',
    subdesc: 'Improved transparency and reduced manual errors.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'IdeaBox (Continuous Improvement System)',
    desc: 'Encourages employee innovation through Kaizen submissions with review and approval workflow.',
    subdesc: 'Centralized idea submission and tracking.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Employee Management Center',
    desc: 'Centralized HR system managing new hires, promotions, transfers, and terminations.',
    subdesc: 'Improved HR workflows and data consistency.',
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer', path: '/assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'PT Amerta Indah Otsuka',
    pos: 'Software Engineer (Full-time)',
    duration: 'Oct 2022 - Present',
    title:
      'Developed and maintained multiple internal systems, automation tools, chatbots, and management dashboards to improve operations and productivity.',
    icon: '/assets/fauzi-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'PT Amerta Indah Otsuka',
    pos: 'Software Engineer Intern',
    duration: 'Mar 2022 - Aug 2022',
    title:
      'Assisted in developing internal HR and operational systems. Worked with databases, APIs, and responsive web designs to support company workflows.',
    icon: '/assets/fauzi-logo.png',
    animation: 'clapping',
  },
];
