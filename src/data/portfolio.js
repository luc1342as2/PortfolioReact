
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
    { name: 'Git', level: 85 },
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
  {
    name: 'Go Fish Game 🎣',
    image: `${BASE}images/project-go-fish.png`,
    github: 'https://github.com/luc1342as2/GoFishGame.git',
    demo: `${BASE}images/GoFish-Game.mp4`,
    skills: ['Java', 'JavaFX', 'OOP'],
    description: 'A classic card game built with JavaFX. I learned to design clean game logic and manage state across multiple players.',
    year: 2025,
  },
  {
    name: 'Italian Quiz 🇮🇹❓',
    image: `${BASE}images/project-italian-quiz.png`,
    github: 'https://github.com/luc1342as2/quiz',
    demo: 'https://luc1342as2.github.io/quiz/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive quiz to test Italian vocabulary. Solves the need for a fun, accessible way to practice language skills.',
    year: 2022,
  },
  {
    name: 'Zombie Infestation 🧟‍♂️',
    image: `${BASE}images/project-zombie.png`,
    github: 'https://github.com/luc1342as2/zombie.git',
    demo: `${BASE}images/zombie.mp4`,
    skills: ['C#', 'Game logic'],
    description: 'A survival game built in C#. Sharpened my understanding of game loops, collision detection, and player mechanics.',
    year: 2023,
  },
  {
    name: 'Pizzeria / Restaurant 🍕',
    image: `${BASE}images/project-pizza-order.png`,
    github: 'https://github.com/luc1342as2/Pizzeria-Restaurant',
    demo: 'https://luc1342as2.github.io/Pizzeria-Restaurant/',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    description: 'A modern pizza ordering app with menu browsing, customization, and cart management.',
    year: 2024,
    featured: true,
    featuredDescription: 'A full-featured React restaurant app where users can browse a menu, customize pizzas with toppings and sizes, add drinks and sides to their cart, and simulate an order flow. The app mirrors real-world e-commerce patterns: state management for cart items, filtering and search, and a clean checkout experience.',
    challenges: 'Keeping cart state consistent across components was tricky. I used React Context to share cart data globally and implemented a custom hook for cart operations. Handling dynamic pricing (size multipliers, extra toppings) required careful state updates.',
  },
  {
    name: 'Calculator 🧮',
    image: `${BASE}images/project-calculator.png`,
    github: 'https://github.com/luc1342as2/Calculator_1',
    demo: 'https://luc1342as2.github.io/Calculator_1/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'A functional calculator with basic arithmetic. Great practice for DOM manipulation and event handling.',
    year: 2023,
  },
  {
    name: 'CrazyView 🎬',
    image: `${BASE}images/project-crazyview.png`,
    github: 'https://github.com/luc1342as2/CrazyView',
    demo: 'https://luc1342as2.github.io/CrazyView/',
    skills: ['React.js', 'Vite', 'CSS'],
    description: 'A full-featured Netflix clone built with React.js that recreates the look and feel of a modern streaming platform interface.',
    year: 2025,
    featured: true,
    featuredDescription: 'A Netflix clone with landing page, sign-in/sign-up forms, plan and payment flow, profile selection, and responsive content browse UI. Demonstrates key user flows and common UI patterns seen in real-world streaming apps.',
    challenges: 'Recreating the Netflix experience required careful attention to layout, responsive design, and user flow. Balancing authenticity with clean, maintainable React components was a key focus. Implementing the plan selection and profile picker flows involved thoughtful state management.',
  },
  {
    name: 'Password Generator 🔐',
    image: `${BASE}images/project-password-generator.png`,
    github: 'https://github.com/luc1342as2/RandomPasswordGenerator',
    demo: 'https://luc1342as2.github.io/RandomPasswordGenerator/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Generates secure random passwords with customizable length and character types.',
    year: 2023,
  },
  {
    name: 'Car Rental 🚗',
    image: `${BASE}images/project-car-rental.png`,
    github: 'https://github.com/luc1342as2/NoleggioAuto',
    demo: 'https://luc1342as2.github.io/NoleggioAuto/index.html',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    description: 'A car rental booking app with vehicle selection and availability.',
    year: 2024,
    featured: true,
    featuredDescription: 'A car rental platform where users can browse vehicles, filter by type and availability, and complete a booking flow. Demonstrates React component composition, form handling, and structuring a multi-step user flow.',
    challenges: 'Managing date selection and availability logic was complex. I built a simple date-range picker and filtered available cars based on booking dates. Making the UI responsive and intuitive for mobile users required several layout iterations.',
  },
  {
    name: 'To-Do List ✅',
    image: `${BASE}images/project-todo-list.png`,
    github: 'https://github.com/luc1342as2/to-do-list',
    demo: 'https://luc1342as2.github.io/to-do-list/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'A task manager with add, complete, and delete. Reinforced CRUD patterns and local storage for persistence.',
    year: 2022,
  },
  {
    name: 'Track Expenses 💸📊',
    image: `${BASE}images/project-expenses.png`,
    github: 'https://github.com/luc1342as2/expensesTracker',
    demo: 'https://luc1342as2.github.io/expensesTracker/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Track income and expenses with visual summaries. Helped me practice data manipulation and chart rendering.',
    year: 2022,
  },
  {
    name: 'PLC Website ⚙️',
    image: `${BASE}images/project-plc-automation.png`,
    github: 'https://github.com/luc1342as2/PLCWebsite',
    demo: 'https://luc1342as2.github.io/PLCWebsite/',
    skills: ['React.js', 'Vite', 'PLC Roadmap'],
    description: 'A learning roadmap for PLC programming. Combines my automation background with web development to help others start.',
    year: 2025,
  },
  {
    name: 'Paint Request 🎨',
    image: `${BASE}images/project-paint-request.png`,
    github: 'https://github.com/luc1342as2/Paint_Request',
    demo: 'https://luc1342as2.github.io/Paint_Request/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'A paint request form for tracking orders. Practical project for form design and validation.',
    year: 2022,
  },
];

const web3formsKey = typeof import.meta !== 'undefined' && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY;

export const contact = {
  email: 'ghiglilucas@gmail.com',
  subtitle: 'Get in Touch',
  // Web3Forms Access Key - from https://app.web3forms.com (submissions go to ghiglilucas@gmail.com)
  web3formsAccessKey: web3formsKey || 'eebff2a5-2e84-41bc-8b31-d1b0469a7370',
};

export const articles = [
  {
    id: 'getting-started-plc',
    title: 'Getting Started with PLC Programming',
    excerpt: 'A roadmap for beginners. Ties into the PLC Website project—practical steps to start your automation journey.',
    category: 'PLC & Automation',
    featured: true,
    date: '2024-11-15',
    content: `PLC (Programmable Logic Controller) programming opens doors to industrial automation, manufacturing, and control systems. If you're coming from software development like I did, the shift from writing code for computers to writing logic for machines can feel unfamiliar—but the problem-solving mindset transfers well.

Start with the fundamentals: understand inputs (sensors, switches) and outputs (motors, valves, indicators). Learn the basics of ladder logic—its visual, relay-based representation makes it intuitive once you grasp the concept of rungs and contacts. Online resources, simulators, and low-cost hardware like Arduino or Raspberry Pi can provide hands-on practice before touching industrial equipment.

My PLC Website project offers a structured roadmap: from electrical basics and I/O wiring through ladder logic, HMI design, and SCADA integration. Pair that roadmap with practical projects—even simple ones like controlling a conveyor or sequencing lights—and you'll build confidence quickly. The industrial automation field values hands-on experience, so focus on applying what you learn in real or simulated environments.`,
  },
  {
    id: 'security-basics-web-dev',
    title: 'Security Basics Every Web Developer Should Know',
    excerpt: 'XSS, CSRF, input validation, and secure defaults. Practical security for front-end and full-stack developers.',
    category: 'Cybersecurity',
    featured: true,
    date: '2024-10-22',
    content: `Security in web development is not optional—it's foundational. Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) remain among the most common vulnerabilities. XSS occurs when unvalidated user input is rendered as HTML or JavaScript, allowing attackers to inject malicious scripts. Mitigate this by escaping output, using Content Security Policy (CSP), and avoiding innerHTML with user data. For React developers, JSX escaping helps, but be cautious with dangerouslySetInnerHTML.

CSRF exploits trust between a user's browser and your server. Use anti-CSRF tokens, SameSite cookies, and verify the Origin header. Input validation—both client-side and server-side—is critical. Never trust client-side validation alone. Validate length, type, format, and business rules on the server. Use parameterized queries or ORMs to prevent SQL injection.

Apply secure defaults: HTTPS everywhere, strong password policies, least-privilege access, and proper session management. Keep dependencies updated and scan for known vulnerabilities. Security is a practice, not a feature you add at the end.`,
  },
  {
    id: 'plc-apprentice-lessons',
    title: 'What I Learned as a PLC Programmer Apprentice',
    excerpt: 'Real lessons from my first months in industrial automation. Unique, personal, and current.',
    category: 'PLC & Automation',
    featured: true,
    date: '2024-12-01',
    content: `Transitioning from computer programming to PLC programming has been eye-opening. In software, a bug might cause a feature to fail; in industrial automation, it can affect safety, production, and equipment. The stakes are higher, and the debugging process is different—often involving physical wiring, I/O states, and timing diagrams rather than stack traces.

I've learned that documentation and clear naming matter even more in PLC projects. When you're troubleshooting at 2 a.m. or handing off to a colleague, well-structured logic and comments save hours. Commissioning taught me the value of systematic testing: verify each function in isolation before integrating, and always have a rollback plan.

The electrical and mechanical side took time to absorb. Understanding how sensors, actuators, and control panels interact improved my programming—I write better logic when I know what's happening in the field. My advice: ask questions, shadow experienced engineers, and treat every project as a learning opportunity.`,
  },
  {
    id: 'ladder-vs-structured',
    title: 'Ladder Logic vs Structured Text',
    excerpt: 'When to use each and their trade-offs. A comparison for PLC programmers choosing the right approach.',
    category: 'PLC & Automation',
    date: '2024-09-10',
    content: `Ladder Logic (LAD) and Structured Text (ST) are two dominant languages in PLC programming. Ladder logic mimics electrical relay diagrams—rungs, contacts, coils—and is familiar to electricians and technicians. It excels at discrete logic, interlocks, and sequences. Its visual nature makes it easy to trace signal flow and troubleshoot.

Structured Text resembles Pascal or C. It supports loops, conditionals, functions, and complex math. Use ST when you need algorithms, data handling, or calculations that would be verbose or difficult in ladder. Many modern PLCs support both; you can mix them in the same project.

Choose based on the task and team. For straightforward on/off control or when maintenance staff will read the code, ladder often wins. For complex math, state machines, or when programmers from a software background are involved, ST may be more efficient. Hybrid approaches are common: ladder for safety interlocks, ST for process logic.`,
  },
  {
    id: 'common-mistakes-automation',
    title: 'Common Mistakes in Industrial Automation Projects',
    excerpt: 'Tips from commissioning and debugging. What to avoid when building control systems.',
    category: 'PLC & Automation',
    date: '2024-08-18',
    content: `Underspecifying safety requirements is a critical mistake. Safety interlocks, emergency stops, and fail-safe behavior must be designed in from the start—not added during commissioning. Document and test every safety function rigorously.

Poor documentation and naming cause long-term pain. Use consistent naming conventions, comment non-obvious logic, and maintain up-to-date drawings. Future you (or the next engineer) will thank you. Another common issue: ignoring timing and scan cycles. PLCs execute in loops; race conditions and timing-dependent logic can behave differently in production than in simulation.

Skipping systematic testing leads to costly surprises. Test each subsystem, then integrate. Simulate failure modes. Plan for commissioning time—it always takes longer than expected. Finally, communicate with stakeholders. Misaligned expectations between programming, electrical, and operations teams cause rework and delays.`,
  },
  {
    id: 'plc-and-it',
    title: 'PLC and IT: How They Work Together',
    excerpt: 'Connecting industrial automation and IT/cybersecurity. Convergence in modern manufacturing.',
    category: 'PLC & Automation',
    date: '2024-07-05',
    content: `Modern manufacturing is increasingly connected. PLCs, HMIs, and SCADA systems now sit on networks that interface with enterprise IT, cloud platforms, and remote monitoring. This convergence creates opportunities—predictive maintenance, data analytics, remote support—and risks.

OT (Operational Technology) and IT have different priorities. OT focuses on availability and safety; IT on security and compliance. Securing industrial networks requires understanding both. Segment OT from IT where possible. Use firewalls, VLANs, and access controls. Apply patches cautiously—industrial systems often run legacy software with limited update paths.

As someone with experience in both programming and cybersecurity, I see the value of security-minded automation. Design for least privilege, audit access, and consider threats when connecting systems. The IEC 62443 standard provides a framework for industrial cybersecurity. Collaboration between automation and IT teams is essential for secure, efficient operations.`,
  },
  {
    id: 'pentest-to-secure-dev',
    title: 'From Penetration Testing to Secure Development',
    excerpt: 'Using my Pentest+/Security+ mindset in development work. Building security in from the start.',
    category: 'Cybersecurity',
    date: '2024-06-20',
    content: `Penetration testing teaches you to think like an attacker. That mindset is invaluable when building software. Instead of patching vulnerabilities after the fact, apply offensive thinking during design and development.

Threat modeling early in the project helps identify risks before they become code. Ask: what assets are valuable? Who might attack? What's the attack surface? Use frameworks like STRIDE or simple brainstorming. Design controls accordingly.

Secure coding practices—input validation, output encoding, authentication, authorization—should be part of your development workflow. Code reviews with a security lens catch issues before they reach production. Automated tools (SAST, dependency scanning) complement but don't replace human judgment.

Certifications like CompTIA Pentest+ and Security+ provide structure and vocabulary. They don't replace hands-on practice, but they help you speak the language and understand the landscape. Apply that knowledge every time you write code.`,
  },
  {
    id: 'security-checklist',
    title: 'Simple Security Checklist for Small Projects',
    excerpt: 'Practical steps for hobby and school projects. Security without overkill.',
    category: 'Cybersecurity',
    date: '2024-05-12',
    content: `Small projects don't need enterprise security, but they shouldn't be careless. A few simple practices go a long way.

Authentication: If you have login, use strong password hashing (bcrypt, Argon2). Never store plaintext passwords. Consider OAuth for third-party sign-in to avoid password handling.

Input and output: Validate and sanitize all user input. Escape output when rendering HTML. Use parameterized queries for databases. This prevents XSS, SQL injection, and injection attacks.

HTTPS: Use TLS everywhere. Free certificates from Let's Encrypt make this easy. Sensitive data in transit over HTTP is a red flag.

Dependencies: Keep packages updated. Run npm audit or similar. Remove unused dependencies. A small codebase is easier to secure.

For hobby and school projects, this checklist covers the basics. As projects grow, add session management, rate limiting, and more robust access controls. Start simple, but start secure.`,
  },
  {
    id: 'why-ethical-hacking',
    title: 'Why I Care About Ethical Hacking',
    excerpt: 'How I approach security and responsible disclosure. The mindset behind defensive thinking.',
    category: 'Cybersecurity',
    date: '2024-04-08',
    content: `Ethical hacking is about finding vulnerabilities before malicious actors do. It's a defensive discipline—understanding how systems break so we can build them better. I approach it with responsibility and integrity.

Responsible disclosure matters. When you find a vulnerability, report it to the vendor or maintainer privately. Give them time to fix before public disclosure. Rushing to publish can put users at risk. Follow coordinated disclosure practices.

The goal is improvement, not exposure. Ethical hackers help organizations harden defenses. Certifications like CompTIA Pentest+ and ethical hacking courses provide methodologies and legal frameworks. Stay within scope, obtain authorization, and document findings clearly.

This mindset influences how I write code and design systems. I think about edge cases, failure modes, and unintended access. Security isn't adversarial—it's collaborative. We're all building a safer digital world.`,
  },
  {
    id: 'react-vs-vanilla',
    title: 'React vs Vanilla JavaScript: When to Use What',
    excerpt: 'Lessons from building Pizzeria, Car Rental, and other projects. Choosing the right tool.',
    category: 'Web Development',
    date: '2024-03-25',
    content: `React and vanilla JavaScript solve different problems. Vanilla JS is ideal for small, static pages, simple interactions, or when you want minimal dependencies. No build step, no framework overhead. For a calculator, a single form, or a landing page, vanilla can be the right choice.

React excels when you have repeated UI patterns, shared state, or complex interactions. Building the Pizzeria and Car Rental apps, I needed components (menu items, cart items, vehicle cards), state that flows between views, and a structured way to manage updates. React's component model and declarative UI made that manageable.

Consider your project size, team familiarity, and maintenance expectations. If the project might grow, React's structure pays off. If it's a one-off or learning exercise, vanilla reinforces fundamentals. I've used both; each has its place. The key is matching the tool to the problem.`,
  },
  {
    id: 'building-portfolio',
    title: 'Building a Portfolio: What I Learned',
    excerpt: 'My own process and decisions. Reflecting on building this site.',
    category: 'Web Development',
    date: '2025-06-01',
    content: `Building this portfolio taught me as much about process as about code. Planning sections, curating content, and iterating on design took more time than I expected. Start with a clear structure: what do you want visitors to learn about you? What's the primary action—contact, view projects, download resume?

I chose React for consistency with my other projects and for component reusability. Separating data (portfolio.js) from presentation made updates easy. Performance matters: lazy loading images, minimizing bundle size, and ensuring fast load times improve the experience.

Design decisions—color palette, typography, spacing—shape the impression you give. I aimed for professional, clean, and accessible. Getting feedback from others helped; what's obvious to you may not be to visitors. A portfolio is never truly "done"—it evolves with your work.`,
  },
  {
    id: 'state-management',
    title: 'State Management Choices: Context vs Props',
    excerpt: 'Lessons from cart and state work in React. When to lift state and when to use Context.',
    category: 'Web Development',
    date: '2024-01-20',
    content: `React's state model is flexible but can get messy as apps grow. Props are the default: pass data down, lift state up when siblings need to share. For shallow trees, this works well. For deep trees or widely shared state, prop drilling becomes tedious.

Context provides a way to share values without passing props through every level. I used it for the cart in the Pizzeria app—any component could add items or read the cart without prop chains. Context is not a replacement for props; it's for values that many components need.

When to use each: Use props for component-specific data and clear data flow. Use Context for theme, auth, or app-wide state like a shopping cart. Avoid putting volatile, frequently changing state in Context—it can cause unnecessary re-renders. For complex state, consider useReducer or a dedicated state library.`,
  },
  {
    id: 'jquery-to-react',
    title: 'Moving from jQuery to React',
    excerpt: 'For developers with legacy front-end experience. A practical migration perspective.',
    category: 'Web Development',
    date: '2023-12-10',
    content: `jQuery dominated front-end development for years. Many codebases and developers still use it. Moving to React requires a shift in mindset: from imperative DOM manipulation to declarative components.

In jQuery, you select elements and mutate them. In React, you describe the UI as a function of state; React handles updates. Event handlers, data binding, and DOM updates all work differently. Instead of \`$('#cart').append(item)\`, you update state and let React re-render.

Migration strategies: Start new features in React within an existing app (micro-frontends or gradual adoption). Or rebuild from scratch for smaller projects. Learn React's lifecycle, hooks, and component model. The investment pays off for maintainability and performance. Your jQuery experience—understanding the DOM, events, and async—still applies; the patterns change.`,
  },
  {
    id: 'college-to-plc',
    title: 'College to Industry: First Steps in PLC',
    excerpt: 'Transition from Sheridan to industrial automation. What surprised me and what helped.',
    category: 'Career & Learning',
    date: '2024-11-01',
    content: `Graduating from Sheridan's Computer Programming program, I had a strong software foundation. The transition to PLC programming meant learning a new domain: electrical systems, industrial equipment, and control logic. What surprised me was how much of the problem-solving mindset transferred.

College taught me to break problems down, debug systematically, and document clearly. Those skills apply directly. What I had to learn: ladder logic syntax, I/O addressing, wiring basics, and the physical side of automation. Hands-on experience was irreplaceable—theory alone wasn't enough.

Connecting with experienced engineers and asking questions accelerated my learning. Internships and apprenticeships provide that exposure. If you're in school, seek projects or co-ops in automation. The industry values people who can bridge software and industrial systems.`,
  },
  {
    id: 'balancing-careers',
    title: 'How I Balance Web Dev, PLC, and Cybersecurity',
    excerpt: 'My multi-path career. Juggling different technical domains.',
    category: 'Career & Learning',
    date: '2024-10-05',
    content: `My career spans web development, PLC programming, and cybersecurity. It's not a traditional path, but it's increasingly relevant. Industries need people who understand both software and physical systems, and security touches everything.

I prioritize depth in my current role—PLC programming—while maintaining skills in web dev and security through side projects and certifications. Overlap helps: security in industrial systems, web interfaces for HMIs, automation concepts in software. The domains inform each other.

Time management is key. Focus on one primary area for work, use others for learning and projects. Certifications (CompTIA, Udemy) provide structure. Don't spread yourself too thin—build core expertise, then expand. A diverse skill set is an asset when you can demonstrate competence in each area.`,
  },
  {
    id: 'certifications-helped',
    title: 'Certifications That Helped Me',
    excerpt: 'CompTIA, Udemy, and more. What I learned and how they shaped my path.',
    category: 'Career & Learning',
    date: '2024-09-15',
    content: `Certifications have been valuable for structure and credibility. CompTIA Security+ gave me a baseline in security concepts and vocabulary. Pentest+ deepened my understanding of offensive security and how to think like an attacker. Both inform how I approach development and automation.

Udemy courses in PLC programming (From Wire to PLC, PLC Ladder Diagram, PLC Fundamentals) provided practical, project-based learning. They complemented my computer programming background with industrial-specific knowledge. Certificates from platforms like TryHackMe added hands-on security practice.

Certifications aren't a substitute for experience, but they signal commitment and provide a curriculum. Choose based on your goals: security certifications for dev-sec-ops or application security; PLC courses for automation. Pair them with projects and real-world application to maximize value.`,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'project', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];
