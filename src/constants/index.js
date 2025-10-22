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
    name: 'Sarah Johnson',
    position: 'HR Specialist',
    img: 'assets/review1.png',
    review:
      'The recruitment system Fauzi built streamlined our hiring process end-to-end — from applications to onboarding. Clear, efficient, and transparent.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'IT Support Lead',
    img: 'assets/review2.png',
    review:
      'Fauzi`s chatbot and knowledge base reduced repetitive questions significantly. Internal communication is faster and more efficient now.',
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    position: 'Operations Manager',
    img: 'assets/review3.png',
    review:
      'The desk management system transformed our office setup. Smart seating rotation boosted cross‑team collaboration.',
  },
  {
    id: 4,
    name: 'David Park',
    position: 'Communications Lead',
    img: 'assets/review4.png',
    review:
      'The WhatsApp automation saved hours each week for announcements and confirmations. It`s now vital to our daily workflow.',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'HR & Admin Manager',
    img: 'assets/review1.png',
    review:
      'Canteen operations became seamless with the RFID-based meal system integrated with our catering vendors. Simple, efficient, reliable.',
  },
  {
    id: 6,
    name: 'Robert Wilson',
    position: 'Front Office Supervisor',
    img: 'assets/review2.png',
    review:
      'The front desk system centralized manual processes into one smart dashboard — visitors, parking, and packages are now tracked effortlessly.',
  },
  {
    id: 7,
    name: 'Jennifer Lee',
    position: 'Procurement Lead',
    img: 'assets/review3.png',
    review: 'The vendor bidding platform enabled transparent, real-time bids — reducing manual work and human error.',
  },
  {
    id: 8,
    name: 'Mark Anderson',
    position: 'CI/Kaizen Lead',
    img: 'assets/review4.png',
    review:
      'The idea management platform encouraged employees to submit improvements. It`s now core to our continuous improvement culture.',
  },
];

export const myProjects = [
  {
    slug: 'internal-recruitment-system',
    title: 'Internal Recruitment System',
    desc: 'Optimized the end-to-end recruitment process — from applications to onboarding.',
    subdesc: 'Features: candidate tracking, interview scheduling, approval workflows.',
    cover: 'https://picsum.photos/seed/recruit/1200/630',
    overview:
      'An internal hiring platform that centralizes candidate applications, interviews, and approvals into a simple, auditable flow.',
    highlights: [
      'Reduced manual coordination with automated interview scheduling',
      'Clear pipeline visibility for HR and hiring managers',
      'Role-based access with tracked approvals',
    ],
    body: [
      'The platform consolidates all recruitment tasks into one place. HR teams can track candidates, schedule interviews, and manage offers with greater clarity.',
      'The audit-friendly workflow improves compliance and reduces back-and-forth between teams, increasing hiring velocity.',
    ],
    gallery: [
      'https://picsum.photos/seed/recruit-1/960/540',
      'https://picsum.photos/seed/recruit-2/960/540',
      'https://picsum.photos/seed/recruit-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [],
  },
  {
    slug: 'chatbot-knowledge-base',
    title: 'Chatbot & Knowledge Base',
    desc: 'AI‑assisted chatbot with an internal knowledge base to resolve repetitive queries quickly.',
    subdesc: 'NLP integrations and internal connectors for automated responses.',
    cover: 'https://picsum.photos/seed/chatbot/1200/630',
    overview: 'Self‑service assistant that resolves common questions instantly and routes complex cases to humans.',
    highlights: [
      'Cuts repetitive tickets with structured answers',
      'Searchable knowledge base with feedback loop',
      'Secure integrations with internal services',
    ],
    body: [
      'Employees can quickly find answers without waiting for support. The assistant learns from usage and curates better responses over time.',
      'Admins can update articles, measure deflection, and spot gaps in documentation.',
    ],
    gallery: [
      'https://picsum.photos/seed/chatbot-1/960/540',
      'https://picsum.photos/seed/chatbot-2/960/540',
      'https://picsum.photos/seed/chatbot-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [],
  },
  {
    slug: 'desk-management-free-desk',
    title: 'Desk Management (Free Desk)',
    desc: 'Automated seating allocation supporting free‑desk policies and cross‑team collaboration.',
    subdesc: 'Improved space utilization and collaboration.',
    cover: 'https://picsum.photos/seed/desk/1200/630',
    overview: 'Smart seating rotation that improves collaboration and space utilization without manual coordination.',
    highlights: [
      'Automated daily seat assignments',
      'Fair distribution across teams and locations',
      'Simple opt‑out rules for exceptions',
    ],
    body: [
      'The rotation algorithm balances team proximity and variety, encouraging serendipitous collaboration.',
      'Admins can define rules and constraints to handle special cases while keeping the flow hands‑off.',
    ],
    gallery: [
      'https://picsum.photos/seed/desk-1/960/540',
      'https://picsum.photos/seed/desk-2/960/540',
      'https://picsum.photos/seed/desk-3/960/540',
    ],
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
    tags: [],
  },
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation (Blast & Bot)',
    desc: 'Automated announcements and messaging via WhatsApp for employees and vendors.',
    subdesc: 'Integrated with internal systems for bulk broadcasts and confirmations.',
    cover: 'https://picsum.photos/seed/whatsapp/1200/630',
    overview:
      'Reliable outbound messaging for announcements and confirmations, with opt‑in flows and delivery tracking.',
    highlights: [
      'Bulk messaging with templated content',
      'Two‑way confirmations and receipt tracking',
      'Integrates with internal systems and schedules',
    ],
    body: [
      'Automates repetitive communication at scale with clear audit logs and delivery insights.',
      'Reduces manual follow‑ups and ensures consistent information reaches the right audiences.',
    ],
    gallery: [
      'https://picsum.photos/seed/wa-1/960/540',
      'https://picsum.photos/seed/wa-2/960/540',
      'https://picsum.photos/seed/wa-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [],
  },
  {
    slug: 'rfid-canteen-system',
    title: 'RFID Canteen System',
    desc: 'Employee meal management using RFID with real‑time validation and WhatsApp notifications.',
    subdesc: 'RFID flow with real‑time socket validation.',
    cover: 'https://picsum.photos/seed/canteen/1200/630',
    overview: 'Frictionless canteen validation using RFID with real‑time checks and notifications.',
    highlights: [
      'Fast RFID validation at counters',
      'Vendor integrations for reconciliation',
      'Notifications for confirmations and exceptions',
    ],
    body: [
      'Minimizes queues and errors while providing accurate reporting for canteen operations.',
      'Real‑time sockets ensure up‑to‑date eligibility and reduce disputes.',
    ],
    gallery: [
      'https://picsum.photos/seed/canteen-1/960/540',
      'https://picsum.photos/seed/canteen-2/960/540',
      'https://picsum.photos/seed/canteen-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [],
  },
  {
    slug: 'front-desk-operations',
    title: 'Front Desk Operations',
    desc: 'Front‑office solution for visitors, parking, packages, transporters, project tracking, key borrowing, and vehicle management.',
    subdesc: 'Centralized dashboard replacing multiple manual processes.',
    cover: 'https://picsum.photos/seed/frontdesk/1200/630',
    overview: 'A single source of truth for front‑office tasks: visitors, parking, packages, transporters, and more.',
    highlights: [
      'Unified dashboard for multiple workflows',
      'Clear logs and printable passes',
      'Role‑based access and audit trails',
    ],
    body: [
      'Replaces spreadsheets and manual books with an integrated system that’s searchable and consistent.',
      'Reduces friction between teams by consolidating information.',
    ],
    gallery: [
      'https://picsum.photos/seed/fdesk-1/960/540',
      'https://picsum.photos/seed/fdesk-2/960/540',
      'https://picsum.photos/seed/fdesk-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [],
  },
  {
    slug: 'factory-visit-quiz',
    title: 'Factory Visit Quiz (Web & Mobile)',
    desc: 'Interactive quiz platform for factory visitors with real‑time updates.',
    subdesc: 'Supports web and mobile with live leaderboards.',
    cover: 'https://picsum.photos/seed/quiz/1200/630',
    overview: 'A fun, multi‑device quiz experience with real‑time leaderboards and admin controls.',
    highlights: [
      'Live results with WebSocket updates',
      'Mobile‑friendly UX for visitors',
      'Admin dashboard for questions & scoring',
    ],
    body: [
      'Designed for quick onboarding and participation during factory tours.',
      'Supports both individual play and team sessions with simple controls.',
    ],
    gallery: [
      'https://picsum.photos/seed/quiz-1/960/540',
      'https://picsum.photos/seed/quiz-2/960/540',
      'https://picsum.photos/seed/quiz-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [],
  },
  {
    slug: 'vendor-auction-platform',
    title: 'Vendor Auction Platform',
    desc: 'Real‑time vendor bidding platform for transparent procurement.',
    subdesc: 'Reduces manual work and human error.',
    cover: 'https://picsum.photos/seed/auction/1200/630',
    overview: 'Transparent, real‑time bidding with clear rules and audit‑ready history.',
    highlights: [
      'Time‑boxed rounds and auto‑extensions',
      'Real‑time leaderboards for bids',
      'Exportable results and logs',
    ],
    body: [
      'Modernizes procurement auctions with structured rounds and clear feedback for participants.',
      'Cuts manual errors and reduces reconciliation time.',
    ],
    gallery: [
      'https://picsum.photos/seed/auction-1/960/540',
      'https://picsum.photos/seed/auction-2/960/540',
      'https://picsum.photos/seed/auction-3/960/540',
    ],
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
    tags: [],
  },
  {
    slug: 'idea-management-kaizen',
    title: 'Idea Management (Kaizen)',
    desc: 'Encourages employee innovation through idea submissions with review and approval workflows.',
    subdesc: 'Centralized submission and tracking.',
    cover: 'https://picsum.photos/seed/ideas/1200/630',
    overview: 'A structured way to submit, review, and implement ideas that improve processes and culture.',
    highlights: [
      'Configurable stages and reviewers',
      'Transparent status and notifications',
      'Analytics for impact tracking',
    ],
    body: [
      'Encourages participation by making the process simple and transparent.',
      'Leaders can identify high‑impact ideas and recognize contributors.',
    ],
    gallery: [
      'https://picsum.photos/seed/ideas-1/960/540',
      'https://picsum.photos/seed/ideas-2/960/540',
      'https://picsum.photos/seed/ideas-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [],
  },
  {
    slug: 'employee-lifecycle-center',
    title: 'Employee Lifecycle Center',
    desc: 'Centralized HR system for managing onboarding, promotions, transfers, and terminations.',
    subdesc: 'Improves HR workflows and data consistency.',
    cover: 'https://picsum.photos/seed/hr/1200/630',
    overview: 'One place to manage the entire employee lifecycle with clear ownership and controls.',
    highlights: [
      'Structured requests and approvals',
      'Single source of truth for records',
      'Audit‑ready logs and notifications',
    ],
    body: [
      'Creates consistency across HR processes and reduces manual handoffs.',
      'Improves data quality and provides visibility across teams.',
    ],
    gallery: [
      'https://picsum.photos/seed/hr-1/960/540',
      'https://picsum.photos/seed/hr-2/960/540',
      'https://picsum.photos/seed/hr-3/960/540',
    ],
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [],
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
    duration: 'Oct 2022 – Present',
    title:
      'Develop and maintain internal systems, automations, chatbots, and management dashboards that improve operations and productivity.',
    icon: '/assets/company-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'PT Amerta Indah Otsuka',
    pos: 'Software Engineer Intern',
    duration: 'Mar 2022 – Aug 2022',
    title:
      'Supported development of internal HR and operations systems. Worked across databases, APIs, and responsive web design to enhance workflows.',
    icon: '/assets/company-logo.png',
    animation: 'clapping',
  },
];
