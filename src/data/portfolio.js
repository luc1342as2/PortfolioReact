
const BASE = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env.BASE_URL || '') : '';

export const hero = {
  name: 'Lucas Ghigli',
  roles: [
    'PLC Programmer',
    'Cyber Security Analyst',
    'Web Developer',
    'IT Specialist',
  ],
  bio: `I am a Computer Science graduate from Sheridan College, with a strong interest in software development and industrial automation. I am currently working as a PLC Programmer Apprentice, gaining hands-on experience in PLC programming, industrial automation, and control systems.

I focus on building reliable, efficient, and scalable solutions, with a solid foundation in problem-solving, teamwork, and clear communication. I am committed to continuous learning and taking on new technical challenges.`,
  cvLinks: [
    { label: 'Cover Letter', href: `${BASE}Cover-Letter.pdf` },
    { label: 'Resume', href: `${BASE}Resume.pdf` },
    { label: 'Computer Programming', href: `${BASE}corsisheridan.pdf` },
  ],
};

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/lucas.ghigli', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/official_luc1342as/', icon: 'instagram' },
  { name: 'GitHub', href: 'https://github.com/luc1342as2', icon: 'github' },
];

export const about = {
  title: 'About Myself',
  subtitle: 'Computer Engineering / Computer Programming',
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'PLC Programmer / Automation Apprentice',
        company: '',
        location: '',
        period: 'July 2025 – Present',
        bullets: [
          'Gaining hands-on experience in PLC logic development, electrical wiring, and HMI configuration in industrial automation environments.',
          'Learning and applying PLC programming fundamentals and industrial automation principles, leveraging computer programming knowledge acquired in Canada.',
          'Assisting senior automation engineers with programming, debugging, testing, and commissioning of control systems.',
          'Working with industrial components and control panels to ensure efficient, reliable, and safe system operation.',
        ],
        skills: ['PLC programming', 'Ladder logic', 'HMI configuration', 'Electrical wiring', 'Industrial automation', 'Control systems', 'Debugging', 'Commissioning'],
      },
      {
        role: 'Electrician / Automation Apprentice',
        company: 'Savory Electric LTD',
        location: 'Brantford, Ontario, Canada',
        period: 'Feb 2025 – June 2025',
        bullets: [
          'Assisted in the set-up and debug of automation software during commissioning of a new confectionery production line.',
          'Assisted in the installation and maintenance of electrical systems in industrial settings.',
          'Supported senior electricians in troubleshooting electrical issues and performing repairs.',
          'Ensured adherence to safety protocols and regulations to maintain a safe working environment.',
        ],
        skills: ['Industrial automation', 'Electrical systems', 'Commissioning', 'Troubleshooting', 'Safety compliance', 'Production line systems'],
      },
      {
        role: 'Sales Representative',
        company: 'TRACE PPC',
        location: 'Toronto, Ontario, Canada',
        period: 'November 2023 – May 2024',
        bullets: [
          'Developed strong customer engagement skills and managed sales leads effectively.',
          'Maintained detailed records and adhered to high standards of customer interaction.',
        ],
        skills: ['Customer engagement', 'Sales leads', 'Record keeping', 'Client communication'],
      },
      {
        role: 'Customer Service Representative',
        company: 'TRACE PPC',
        location: 'Toronto, Ontario, Canada',
        period: 'March 2023 – July 2023',
        bullets: [
          'Handled high volumes of customer interactions with attention to accuracy and professionalism.',
        ],
        skills: ['Customer service', 'Accuracy', 'Professional communication'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        credential: 'Ontario College Diploma — Computer Programming (2020 – 2024)',
        school: 'Sheridan College',
        location: 'Oakville, Ontario, Canada',
      },
      {
        credential: 'High School Diploma (2016 – 2020)',
        school: "King's Christian Collegiate",
        location: 'Oakville, Ontario, Canada',
      },
    ],
  },
  story: `I am a Computer Programming graduate who builds clean, functional websites and applications with a focus on user experience. I have a strong interest in cybersecurity and apply a security-minded approach to my work. I am currently working as a PLC Programmer Apprentice to gain experience and knowledge in automation. I combine technical skills with creativity and clear communication to deliver reliable solutions and collaborate effectively on every project.`,
  image: `${BASE}images/image2.png`,
};

export const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 75 },
    { name: 'Angular.js', level: 65 },
    { name: 'jQuery', level: 70 },
  ],
  backend: [
    { name: 'SQL', level: 85 },
    { name: 'C', level: 85 },
    { name: 'C#', level: 70 },
    { name: 'Java', level: 65 },
    { name: 'JavaScript', level: 85 },
    { name: 'Git', level: 75 },
  ],
};

export const certificates = [
  {
    title: 'From Wire to PLC',
    image: `${BASE}images/cert-from-wire-to-plc.png`,
    url: 'https://www.udemy.com/certificate/UC-c531a9e9-3359-46b1-baaa-83b7e37a3391/',
    skills: ['PLC Programming', 'Ladder Logic', 'Industrial Automation'],
  },
  {
    title: 'PLC Ladder Diagram',
    image: `${BASE}images/cert-plc-ladder.png`,
    url: 'https://www.udemy.com/certificate/UC-a5acf0ca-10b4-43c6-b630-3af64c23c523/',
    skills: ['Ladder Diagrams', 'PLC Troubleshooting', 'Control Circuits'],
  },
  {
    title: 'PLC Fundamentals',
    image: `${BASE}images/cert-plc-fundamentals.png`,
    url: 'https://www.udemy.com/certificate/UC-85560172-d30e-4c56-83b2-6b33a0e2f4fa/',
    skills: ['PLC Basics', 'I/O Configuration', 'Automation Concepts'],
  },
  {
    title: 'Angular',
    image: `${BASE}images/cert-angular.png`,
    url: 'https://www.udemy.com/certificate/UC-e35e77ed-edb7-4335-8f6b-9bcab1fb56a1/',
    skills: ['Angular', 'TypeScript', 'SPA Architecture'],
  },
  {
    title: 'React',
    image: `${BASE}images/cert-react.png`,
    url: 'https://www.udemy.com/certificate/UC-c553fcb9-1672-4982-9da1-3a77c7dbe54a/',
    skills: ['React', 'JavaScript', 'Component Design'],
  },
  {
    title: 'Ethical Hacking',
    image: `${BASE}images/cert-ethical-hacking.png`,
    url: 'https://www.udemy.com/certificate/UC-d23d101f-c0bc-4203-bfd9-a47ee9f58b4b/',
    skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Network Security'],
  },
  {
    title: 'CompTIA Pentest+',
    image: `${BASE}images/cert-comptia-pentest.png`,
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-DLRLHMYDSX.png',
    skills: ['Penetration Testing', 'Red Teaming', 'Offensive Security'],
  },
  {
    title: 'CompTIA Security+',
    image: `${BASE}images/cert-comptia-security.png`,
    url: 'https://www.udemy.com/certificate/UC-0e01b68b-b42a-4450-aed4-2bb89d973393/',
    skills: ['Security Fundamentals', 'Risk Management', 'Network Security'],
  },
];

export const projects = [
  { name: 'Go Fish Game 🎣', image: `${BASE}images/project-go-fish.png`, github: 'https://github.com/luc1342as2/GoFishGame.git', demo: `${BASE}images/GoFish-Game.mp4`, skills: ['Java', 'JavaFX', 'OOP'] },
  { name: 'Italian Quiz 🇮🇹❓', image: `${BASE}images/project-italian-quiz.png`, github: 'https://github.com/luc1342as2/quiz', demo: 'https://luc1342as2.github.io/quiz/', skills: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Zombie Infestation 🧟‍♂️', image: `${BASE}images/project-zombie.png`, github: 'https://github.com/luc1342as2/zombie.git', demo: `${BASE}images/zombie.mp4`, skills: ['C#', 'Game logic'] },
  { name: 'Pizzeria / Restaurant 🍕', image: `${BASE}images/project-pizza-order.png`, github: 'https://github.com/luc1342as2/Pizzeria-Restaurant', demo: 'https://luc1342as2.github.io/Pizzeria-Restaurant/', skills: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { name: 'Calculator 🧮', image: `${BASE}images/project-calculator.png`, github: 'https://github.com/luc1342as2/Calculator_1', demo: 'https://luc1342as2.github.io/Calculator_1/', skills: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Password Generator 🔐', image: `${BASE}images/project-password-generator.png`, github: 'https://github.com/luc1342as2/RandomPasswordGenerator', demo: 'https://luc1342as2.github.io/RandomPasswordGenerator/', skills: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Car Rental 🚗', image: `${BASE}images/project-car-rental.png`, github: 'https://github.com/luc1342as2/NoleggioAuto', demo: 'https://luc1342as2.github.io/NoleggioAuto/index.html', skills: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { name: 'To-Do List ✅', image: `${BASE}images/project-todo-list.png`, github: 'https://github.com/luc1342as2/to-do-list', demo: 'https://luc1342as2.github.io/to-do-list/', skills: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Track Expenses 💸📊', image: `${BASE}images/project-expenses.png`, github: 'https://github.com/luc1342as2/expensesTracker', demo: 'https://luc1342as2.github.io/expensesTracker/', skills: ['HTML', 'CSS', 'JavaScript'] },
  {
    name: 'PLC Website ⚙️',
    image: `${BASE}images/project-plc-automation.png`,
    github: 'https://github.com/luc1342as2/PLCWebsite',
    demo: 'https://luc1342as2.github.io/PLCWebsite/',
    skills: ['React.js', 'Vite', 'PLC Roadmap'],
  },
  {
    name: 'Cinema History 🎬',
    image: `${BASE}images/project-cinema-history.png`,
    github: 'https://github.com/luc1342as2/CinemaVisits',
    demo: 'https://luc1342as2.github.io/CinemaVisits/',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Paint Request 🎨',
    image: `${BASE}images/project-paint-request.png`,
    github: 'https://github.com/luc1342as2/Paint_Request',
    demo: 'https://luc1342as2.github.io/Paint_Request/',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
];

const web3formsKey = typeof import.meta !== 'undefined' && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY;

export const contact = {
  email: 'ghiglilucas@gmail.com',
  subtitle: 'Get in Touch',
  // Web3Forms Access Key - from https://app.web3forms.com (submissions go to ghiglilucas@gmail.com)
  web3formsAccessKey: web3formsKey || 'eebff2a5-2e84-41bc-8b31-d1b0469a7370',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
