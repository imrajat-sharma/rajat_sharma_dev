export const portfolioData = {
  personal: {
    name: "Rajat Sharma",
    title: "Full Stack Engineer & GenAI Developer",
    shortRole: "GenAI & Full Stack Engineer",
    positioning: "Engineering high-performance web systems, real-time distributed applications, and autonomous GenAI agent architectures.",
    bioLead: "Hi, I'm Rajat Sharma — a passionate Full Stack and Generative AI engineer based in Gurugram, India.",
    bioDescription: "I specialize in building reliable, low-latency web platforms, practical LLM agent workflows, and intuitive developer tools. From designing real-time matching architectures to simulating operating system process scheduling algorithms, I focus on clean system design, modular code, and exceptional user experience.",
    location: "Gurugram, Haryana, India",
    status: "Open to High-Impact Opportunities & Select Projects",
    email: "rajatsharma.ts@gmail.com",
    github: "https://github.com/imrajat-sharma",
    linkedin: "https://www.linkedin.com/in/imrajat-sharma",
    twitter: "https://x.com/imrajat_sharma",
    avatarImage: "/images/avatar_master.webp",
    metrics: [
      { value: "16+", label: "Repositories" },
      { value: "5+", label: "Full-Stack Apps" },
      { value: "< 15ms", label: "Frame Latency" }
    ],
    highlights: [
      {
        title: "GenAI & Agentic AI",
        description: "Building LangChain pipelines, semantic vector retrieval (RAG), and autonomous function calling agents.",
        icon: "bot"
      },
      {
        title: "Systems & Performance",
        description: "Deep knowledge in concurrency, CPU process scheduling policies, memory caching, and sub-100ms response targets.",
        icon: "cpu"
      }
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      id: "frontend",
      badge: "UI / UX & Frameworks",
      items: [
        { name: "React", subtext: "Hooks, Context, State", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", subtext: "SSR, Server Actions, App Router", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", subtext: "Strict Type Safety & Generics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", subtext: "ES6+, Async, DOM APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", subtext: "Responsive Layouts & Themes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5 & CSS3", subtext: "Modern Standards & Flexbox/Grid", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    {
      category: "Backend & Systems",
      id: "backend",
      badge: "APIs & Runtimes",
      items: [
        { name: "Node.js", subtext: "Event Loop, Streams, Clusters", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", subtext: "REST APIs, Middleware, Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", subtext: "Scripting, Automation, Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", subtext: "Asynchronous OpenAPI Services", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "NestJS", subtext: "Enterprise Modular Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
        { name: "C & Algorithms", subtext: "Pointers, Memory, Tree Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
      ]
    },
    {
      category: "Generative AI & LLMs",
      id: "ai",
      badge: "Agents & Vector Search",
      items: [
        { name: "LangChain", subtext: "Chains, Tools, LCEL Pipelines", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "RAG Pipelines", subtext: "Vector Embeddings & Retrieval", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "LLM APIs", subtext: "OpenAI, Claude, Llama Tool Calling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" },
        { name: "Vector Databases", subtext: "pgvector, Qdrant, Pinecone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      category: "Databases & Cache",
      id: "databases",
      badge: "Storage & In-Memory",
      items: [
        { name: "MongoDB", subtext: "Document Store, Aggregations", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", subtext: "Relational Queries, Indexing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", subtext: "Pub/Sub, Caching, Session Store", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "MySQL", subtext: "ACID Transactions & Joins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      category: "DevOps & Tooling",
      id: "devops",
      badge: "Deploy & Versioning",
      items: [
        { name: "Docker", subtext: "Containers & Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git & GitHub", subtext: "Branching, PRs, Workflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", subtext: "Bash Scripting, Daemons, CLI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Vite", subtext: "Blazing Fast Bundling & HMR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
      ]
    }
  ],

  projects: [
    {
      id: "cpu-scheduler",
      title: "CPU Scheduler Visualizer",
      category: "systems",
      categoryLabel: "Operating Systems & Algorithms",
      featured: true,
      tagline: "Interactive OS process scheduling algorithm simulator with real-time Gantt execution timelines and algorithm benchmarks.",
      description: "A high-performance algorithmic simulation tool designed to visualize CPU process scheduling policies (FCFS, SJF Preemptive & Non-Preemptive, Round Robin, and Priority). It calculates live turn-around time, waiting time, CPU utilization, and context switch metrics with interactive step-by-step timeline scrubbing.",
      image: "/images/project_cpu_scheduler.webp",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Algorithms"],
      features: [
        "Interactive Gantt chart renderer displaying process execution slices in real time",
        "Supports FCFS, SJF (Preemptive/Non-preemptive), Round Robin, and Priority algorithms",
        "Live metric calculations for Average Waiting Time, Turnaround Time, and Throughput",
        "Step forward, pause, and speed adjustments for educational algorithm demonstrations"
      ],
      liveUrl: "https://cpu-scheduler-visualizer-amber.vercel.app/",
      githubUrl: "https://github.com/imrajat-sharma/cpu-scheduler-visualizer"
    },
    {
      id: "aether-rag",
      title: "Aether - GenAI & RAG Agent Orchestrator",
      category: "ai",
      categoryLabel: "Generative AI & LLMs",
      featured: true,
      tagline: "Production-grade autonomous AI agent system with semantic vector document search and LangChain orchestration.",
      description: "An intelligent generative AI workflow platform designed to connect proprietary knowledge bases to Large Language Models. Features semantic document chunking, cosine vector similarity lookup, multi-agent reasoning loops, and structured function calling.",
      image: "/images/project_genai_agent.webp",
      tech: ["Python", "LangChain", "FastAPI", "PostgreSQL pgvector", "TypeScript", "React"],
      features: [
        "Vector document indexing with hybrid keyword + semantic similarity retrieval",
        "Agentic tool-calling loop for autonomous research and contextual data extraction",
        "Token streaming console with real-time token cost and latency telemetry",
        "Structured output validation with Pydantic and JSON Schema enforcement"
      ],
      liveUrl: "https://github.com/imrajat-sharma/learn_genai",
      githubUrl: "https://github.com/imrajat-sharma/learn_genai"
    },
    {
      id: "skillswipe",
      title: "SkillSwipe - Professional Talent Discovery",
      category: "fullstack",
      categoryLabel: "Full-Stack Web Application",
      featured: true,
      tagline: "Swipe-driven professional networking and collaborator discovery platform for engineers, creators, and mentors.",
      description: "A fast, intuitive talent discovery application that re-imagines professional networking using a fluid swipe-based interface. Developers and designers can discover mentors, collaborators, and hackathon teammates based on verified technology stacks and geolocation.",
      image: "/images/project_skillswipe.webp",
      tech: ["React 18", "Node.js", "Express", "MongoDB", "Redis", "Tailwind CSS"],
      features: [
        "Gesture-based swipe discovery cards with touch drag and keyboard arrow shortcuts",
        "Real-time bidirectional match notification system powered by Redis caching",
        "Secure session authentication with Passport.js and bcrypt password hashing",
        "Comprehensive user profile builder with verified tech badges and portfolio links"
      ],
      liveUrl: "https://github.com/imrajat-sharma/skillswipe",
      githubUrl: "https://github.com/imrajat-sharma/skillswipe"
    },
    {
      id: "hospital-system",
      title: "Hospital Management System (HMS)",
      category: "fullstack",
      categoryLabel: "Healthcare & Backend Architecture",
      featured: false,
      tagline: "Web-based clinical EHR and hospital operations system designed for administrative efficiency and patient record tracking.",
      description: "A complete EHR solution streamlining patient admissions, outpatient scheduling, doctor assignments, and department billing. Built with role-based access control (Admin, Doctor, Patient) and optimized database queries.",
      image: "/images/project_hospital_mgmt.webp",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "REST API"],
      features: [
        "Role-based access control safeguarding medical records and administrative functions",
        "Automated bed occupancy tracking and doctor appointment scheduling",
        "Comprehensive reporting dashboard for patient admission statistics",
        "Validated schema transactions preventing double-booking of medical staff"
      ],
      liveUrl: "https://github.com/imrajat-sharma/hospital-management-backend",
      githubUrl: "https://github.com/imrajat-sharma/hospital-management-backend"
    },
    {
      id: "cvflight",
      title: "CVFlight / Joblentra",
      category: "fullstack",
      categoryLabel: "Career Acceleration Tool",
      featured: false,
      tagline: "ATS-optimized resume generator and career documents builder with real-time PDF compilation.",
      description: "A modern resume builder helping developers and professionals craft ATS-friendly, meticulously formatted resumes with instant real-time live preview, modular section arrangement, and PDF export.",
      image: "/images/project_cvflight.webp",
      tech: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Vite"],
      features: [
        "Real-time PDF rendering engine with custom styling themes",
        "ATS score checking heuristics to maximize interview callbacks",
        "Modular section reordering and export/import of profile JSON"
      ],
      liveUrl: "https://github.com/imrajat-sharma/cvflight",
      githubUrl: "https://github.com/imrajat-sharma/cvflight"
    }
  ],

  experience: [
    {
      role: "Full Stack & GenAI Engineer",
      organization: "Independent Technical Projects & Open Source",
      period: "2024 - Present",
      location: "Gurugram, India",
      bullets: [
        "Engineered scalable web applications and algorithmic visualizers including CPU Scheduler Visualizer and SkillSwipe.",
        "Built generative AI workflows leveraging LangChain, vector retrieval (RAG), and structured function calling.",
        "Implemented secure RESTful API backends with Node.js, Express, and MongoDB, optimizing indexing for sub-100ms response times.",
        "Authored modular, cleanly tested code with 100% strict TypeScript types and comprehensive documentation."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Python", "LangChain", "MongoDB", "Redis", "Docker"]
    },
    {
      role: "Open Source Contributor",
      organization: "Developer Tooling & JavaScript Community",
      period: "2024 - Present",
      location: "Remote",
      bullets: [
        "Published 16+ public repositories covering backend architectures, algorithmic simulators, and developer CLI utilities.",
        "Created the '30 Days of Node.js' challenge documenting deep architectural concepts from event loop mechanics to clustering.",
        "Shared reproducible setups for Docker containers and full-stack CI/CD workflows."
      ],
      technologies: ["Node.js", "Express", "Git", "GitHub Actions", "Docker", "REST APIs"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Gurugram University",
      period: "2025 - 2027",
      description: "Advanced studies focusing on distributed systems architecture, artificial intelligence, operating systems, and enterprise software engineering.",
      coursework: [
        "Distributed Systems Architecture",
        "Advanced Data Structures & Algorithms",
        "Artificial Intelligence & Machine Learning",
        "Cloud Computing & Virtualization",
        "Database System Internals"
      ]
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Gurugram University",
      period: "2022 - 2025",
      description: "Graduated with strong foundations in object-oriented programming, relational databases, web architecture, and discrete mathematics.",
      coursework: [
        "Data Structures in C/C++",
        "Object Oriented Programming (OOP)",
        "Web Technologies & JavaScript",
        "Operating System Concepts",
        "Database Management Systems (SQL)"
      ]
    },
    {
      degree: "Senior Secondary Education",
      institution: "GSS School",
      period: "2021 - 2022",
      description: "High school education with rigorous focus on Mathematics, Analytical Reasoning, and Computer Science fundamentals.",
      coursework: ["Advanced Mathematics", "Economics", "Computer Science"]
    }
  ],

  certifications: [
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-7bf5aceb-2e35-43e9-9863-b1bf2ff53f71/",
      icon: "react"
    },
    {
      title: "Agile Project Management",
      issuer: "HP-Life Global",
      url: "https://www.life-global.org/certificate/57326379-420a-40f1-9b79-660b1718e766",
      icon: "award"
    },
    {
      title: "NodeJS Masterclass: Real-World Backend Development",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-9caeea22-b7d8-4211-991a-c8a36ddd04a0/",
      icon: "server"
    },
    {
      title: "PostgreSQL - OSCALY Academy",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-4930407f-7f35-47b7-ad5f-794ba5b23e53/",
      icon: "database"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "The Cutting Edge School",
      url: "https://www.youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur",
      icon: "layout"
    },
    {
      title: "Python for Beginners",
      issuer: "ChaiCode",
      url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
      icon: "terminal"
    }
  ]
};
