export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'data-science' | 'development' | 'devops' | 'all';
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  stats?: { stars?: number; forks?: number };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  highlights?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  coverImage: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const personalInfo = {
  name: "Ranjith Gumpili",
  firstName: "Ranjith",
  lastName: "Gumpili",
  title: "Data Science Student | Developer | DevOps Learner",
  roles: [
    "Data Science Enthusiast",
    "Java Backend Developer",
    "Python Developer",
    "DevOps Learner",
    "Problem Solver"
  ],
  bio: "A highly motivated Data Science student and software developer with a deep passion for writing clean, efficient code. Specializing in Java backend services, Python scripting, and machine learning, while actively exploring DevOps pipelines and cloud deployments. Committed to building scalable solutions and leveraging data to solve complex real-world problems.",
  detailedBio: "I am currently pursuing my studies in Data Science with a keen interest in bridging the gap between intelligence and infrastructure. My technical journey began with mastering object-oriented programming in Java and scripting in Python. Over time, I discovered the power of machine learning and the necessity of automation via DevOps. Today, I build backend systems, deploy containerized applications, and run analytical models, aiming to become a full-stack data & platform engineer.",
  email: "gumpiliranjith@gmail.com",
  phone: "+91 98765 43210", // Placeholder
  location: "Andhra Pradesh, India",
  github: "https://github.com/GumpiliRanjith",
  linkedin: "https://linkedin.com/in/ranjith-gumpili", // Placeholder
  twitter: "https://twitter.com/ranjith_gumpili", // Placeholder
  domain: "gumpiliranjith.site",
  resumeUrl: "/Ranjith_Gumpili_Resume.pdf"
};

export const skillsData = {
  categories: [
    {
      title: "Data Science & Python",
      skills: [
        { name: "Python Programming", level: 90 },
        { name: "Machine Learning (Scikit-learn)", level: 75 },
        { name: "Data Analysis (Pandas, NumPy)", level: 85 },
        { name: "Data Visualization (Matplotlib, Seaborn)", level: 80 },
        { name: "SQL & Relational Databases", level: 80 }
      ]
    },
    {
      title: "Software Development",
      skills: [
        { name: "Java (Core & OOPs)", level: 85 },
        { name: "Spring Boot & REST APIs", level: 70 },
        { name: "HTML5, CSS3, JavaScript", level: 75 },
        { name: "TypeScript & React.js", level: 65 },
        { name: "Data Structures & Algorithms", level: 80 }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker Containerization", level: 80 },
        { name: "Git & Version Control", level: 90 },
        { name: "Linux Bash Scripting", level: 75 },
        { name: "CI/CD (GitHub Actions)", level: 70 },
        { name: "AWS Cloud Basics", level: 60 }
      ]
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "data-ml-pipeline",
    title: "Predictive Analytics & ML Pipeline",
    description: "An end-to-end Python pipeline that ingests data, performs feature engineering, and trains classification models to predict user behavior.",
    longDescription: "Built with Scikit-learn, Pandas, and NumPy, this project handles raw dataset cleansing, statistical outlier removal, model training (Random Forests, Gradient Boosting), and outputs interactive graphs showing ROC-AUC metrics and feature importance. Integrated containerization for easy deployment.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Docker", "Matplotlib"],
    category: "data-science",
    githubUrl: "https://github.com/GumpiliRanjith/predictive-ml-pipeline",
    liveUrl: "#",
    image: "ml_pipeline_mockup",
    featured: true,
    stats: { stars: 12, forks: 4 }
  },
  {
    id: "spring-boot-inventory",
    title: "Secure RESTful Inventory API",
    description: "A robust Java Spring Boot backend for inventory management featuring JWT authentication, database migrations, and role-based access control.",
    longDescription: "Developed a secure and modular backend service. Implemented JPA/Hibernate mappings, Flyway migrations, PostgreSQL database, custom authentication filters, and comprehensive testing with JUnit. Leveraged Swagger/OpenAPI for API documentation.",
    tags: ["Java", "Spring Boot", "JWT Security", "PostgreSQL", "Swagger"],
    category: "development",
    githubUrl: "https://github.com/GumpiliRanjith/spring-inventory-api",
    liveUrl: "#",
    image: "inventory_api_mockup",
    featured: true,
    stats: { stars: 15, forks: 2 }
  },
  {
    id: "ci-cd-docker-pipeline",
    title: "Automated GitOps DevOps Setup",
    description: "A continuous integration and continuous deployment pipeline utilizing GitHub Actions to auto-build Docker images and deploy to AWS.",
    longDescription: "Set up full CI/CD configurations for a multi-container app. Runs unit tests, builds optimized multi-stage Docker images, pushes to Docker Hub, and triggers automated ssh deployments to EC2 instances using Docker Compose, complete with Slack notifications.",
    tags: ["Docker", "GitHub Actions", "Nginx", "Linux", "DevOps"],
    category: "devops",
    githubUrl: "https://github.com/GumpiliRanjith/devops-ci-cd-compose",
    liveUrl: "#",
    image: "devops_pipeline_mockup",
    featured: true,
    stats: { stars: 18, forks: 6 }
  },
  {
    id: "web-scraping-aggregator",
    title: "Real-time Job Postings Aggregator",
    description: "A Python-based scraping tool utilizing BeautifulSoup and Selenium to compile tech job descriptions and extract required skills.",
    longDescription: "Scrapes several public job boards concurrently, processes job description text using basic NLTK libraries, extracts frequently requested skills, and serves them in a clean local dashboard built with Streamlit.",
    tags: ["Python", "BeautifulSoup", "Selenium", "Streamlit", "NLTK"],
    category: "data-science",
    githubUrl: "https://github.com/GumpiliRanjith/job-skills-aggregator",
    liveUrl: "#",
    image: "scraping_dashboard_mockup",
    featured: false,
    stats: { stars: 8, forks: 1 }
  },
  {
    id: "java-chat-application",
    title: "Multi-threaded Socket Chat Server",
    description: "A lightweight Java desktop chat server supporting concurrent connections via threads, encryption, and basic user rooms.",
    longDescription: "Engineered a low-level network system using Java Socket API. Supports multiple clients, processes login commands, maintains active lists of users, encrypts messages symmetrically, and runs inside a multi-threaded daemon threadpool.",
    tags: ["Java", "Socket Programming", "Cryptography", "Multithreading"],
    category: "development",
    githubUrl: "https://github.com/GumpiliRanjith/java-socket-chat",
    liveUrl: "#",
    image: "chat_app_mockup",
    featured: false,
    stats: { stars: 9, forks: 3 }
  }
];

export const experienceData: Experience[] = [
  {
    id: "ml-intern",
    role: "Machine Learning Intern",
    company: "AI Innovation Labs (Virtual)",
    location: "Hyderabad, India (Remote)",
    period: "May 2025 - July 2025",
    description: [
      "Assisted in preprocessing large dataset collections for predictive customer churn models.",
      "Tuned hyperparameters for XGBoost and Random Forest algorithms, improving overall prediction accuracy by 5%.",
      "Collaborated with backend engineers to integrate Python inference scripts into REST endpoints."
    ],
    skills: ["Python", "Pandas", "Scikit-Learn", "Git", "REST APIs"]
  },
  {
    id: "java-dev-contributor",
    role: "Open Source Developer Contributor",
    company: "Developer Community",
    location: "Andhra Pradesh, India",
    period: "2024 - Present",
    description: [
      "Contributed bug fixes and unit test cases to community-driven Spring Boot templates.",
      "Optimized database indexing and queries in mock application schemas, reducing query response times.",
      "Wrote comprehensive README documentations and shell automation scripts for dev environment setup."
    ],
    skills: ["Java", "Spring Boot", "MySQL", "Shell Scripting", "JUnit"]
  }
];

export const educationData: Education[] = [
  {
    id: "btech-ds",
    degree: "Bachelor of Technology in Data Science",
    institution: "State Technological University",
    location: "Andhra Pradesh, India",
    period: "2023 - 2027 (Expected)",
    gpa: "8.5 / 10.0 (Current)",
    highlights: [
      "Specializing in Machine Learning, Statistical Inference, and Big Data Technologies.",
      "Active member of the Campus Coding & Technical Club.",
      "Won 2nd place in the College annual Hackathon."
    ]
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary Education (MPC)",
    institution: "Sri Chaitanya Junior College",
    location: "Andhra Pradesh, India",
    period: "2021 - 2023",
    gpa: "96.5%",
    highlights: [
      "Focused on Mathematics, Physics, and Chemistry.",
      "Secured top grade in Mathematics and computer applications."
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "hck-1",
    title: "Runner-Up in Annual Campus Hackathon",
    issuer: "State Tech University",
    date: "March 2025",
    description: "Co-developed an automated disaster-alerting API system within 36 hours utilizing Python, Docker, and Telegram bot triggers."
  },
  {
    id: "cert-java",
    title: "Java SE Programming Foundations Certificate",
    issuer: "Oracle Academy / Coursera",
    date: "November 2024",
    description: "Validated core object-oriented software engineering structures, memory management, exception interfaces, and file I/O operations."
  },
  {
    id: "cert-docker",
    title: "Docker Certified Associate Course",
    issuer: "KodeKloud",
    date: "January 2025",
    description: "Completed comprehensive training on Docker networking, volumes, multi-stage builds, and deployment security patterns."
  }
];

export const servicesData: Service[] = [
  {
    id: "backend-dev",
    title: "Backend API Engineering",
    description: "Creating highly robust, type-safe RESTful web services in Java (Spring Boot) and Python (Flask/FastAPI) built to scale, featuring secure database design.",
    icon: "database",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JWT"]
  },
  {
    id: "data-analysis",
    title: "Data Analysis & ML Models",
    description: "Engineering data ingestion pipelines, cleaning dirty datasets, compiling metrics, and training predictive models using Python tools.",
    icon: "bar-chart-2",
    skills: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "SQL"]
  },
  {
    id: "devops-docker",
    title: "DevOps & Containerization",
    description: "Packaging legacy and modern codebases into isolated Docker environments, automating workflows through CI/CD, and deploying applications.",
    icon: "terminal",
    skills: ["Docker", "GitHub Actions", "Linux Shell", "AWS", "Nginx"]
  }
];

export const testimonialsData = [
  {
    name: "Alex Johnson",
    role: "Project Coordinator",
    company: "AI Innovation Labs",
    quote: "Ranjith proved to be an invaluable asset during his virtual internship. His understanding of Python scripting and data processing helped accelerate our workflow significantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Kiran Kumar",
    role: "Senior Developer / Community Lead",
    company: "Dev Community",
    quote: "Ranjith's contributions to our open-source templates were high quality. He writes clean, self-documented code and is very proactive at learning DevOps workflows.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const blogsData: Blog[] = [
  {
    id: "docker-guide",
    title: "Demystifying Docker Containerization: A Beginner's DevOps Blueprint",
    excerpt: "Learn how to wrap your application, configure volumes, manage port exposures, and write multi-stage Dockerfiles for optimized builds.",
    category: "DevOps",
    date: "May 15, 2026",
    readTime: "6 min read",
    slug: "demystifying-docker-containerization",
    coverImage: "docker_cover",
    tags: ["Docker", "Containers", "DevOps", "Automation"]
  },
  {
    id: "pandas-pipelines",
    title: "Building Production-Ready Data Cleaning Pipelines with Pandas",
    excerpt: "A deep dive into writing efficient, structured Python scripts using Pandas to preprocess dirty datasets for machine learning models.",
    category: "Data Science",
    date: "April 22, 2026",
    readTime: "8 min read",
    slug: "pandas-data-cleaning-pipelines",
    coverImage: "pandas_cover",
    tags: ["Python", "Pandas", "Data Science", "Machine Learning"]
  },
  {
    id: "spring-security-jwt",
    title: "Securing Spring Boot APIs Using JSON Web Tokens (JWT)",
    excerpt: "Step-by-step walkthrough for configuring Spring Security, custom filters, JWT encoders, and setting up role-based endpoint authorization.",
    category: "Software Development",
    date: "March 10, 2026",
    readTime: "10 min read",
    slug: "securing-spring-boot-jwt",
    coverImage: "spring_cover",
    tags: ["Java", "Spring Boot", "Security", "JWT", "REST APIs"]
  }
];
