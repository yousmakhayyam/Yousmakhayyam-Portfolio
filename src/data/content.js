export const themes = {
  lavender: { name: 'Lavender', primary: '#8B85E8', secondary: '#6FB4EA', tertiary: '#7FD8C6', swatch: 'linear-gradient(135deg,#8B85E8,#6FB4EA)' },
  ocean: { name: 'Ocean', primary: '#4FA3D9', secondary: '#5FD6C9', tertiary: '#7EC8F2', swatch: 'linear-gradient(135deg,#4FA3D9,#5FD6C9)' },
  sunset: { name: 'Sunset', primary: '#E89A9C', secondary: '#F0B884', secondary2: '#B79CE8', tertiary: '#B79CE8', swatch: 'linear-gradient(135deg,#E89A9C,#F0B884)' },
  mint: { name: 'Mint', primary: '#6FD6B0', secondary: '#8FA8F0', tertiary: '#A6A1F0', swatch: 'linear-gradient(135deg,#6FD6B0,#8FA8F0)' },
}

export const techStack = [
  { group: 'Web & Programming', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Electron.js'] },
  { group: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST API', 'GraphQL'] },
  { group: 'Databases & Storage', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { group: 'Cloud & Infrastructure', items: ['AWS', 'Microsoft Azure', 'Kubernetes (RKE2)', 'Rancher', 'Terraform', 'Docker', 'Nginx'] },
  { group: 'GitOps & CI/CD', items: ['ArgoCD', 'GitHub Actions', 'Traefik', 'Helm', 'Vercel'] },
  { group: 'Observability', items: ['VictoriaMetrics', 'OpenTelemetry', 'Prometheus'] },
  { group: 'Tooling & Collaboration', items: ['Git', 'GitHub', 'PowerShell', 'Linux', 'Postman'] },
  { group: 'IDEs & Design', items: ['VS Code', 'Figma', 'Canva'] },
]

export const projects = [
  {
    title: 'Apporto Multi-Tenant GitOps Platform',
    desc: 'A self-service GitOps architecture across 30 Kubernetes clusters, giving tenants version bumps and automated onboarding without platform-team bottlenecks.',
    tech: ['ArgoCD', 'GitHub Actions', 'Kubernetes'],
    link: null,
    tag: 'Internal architecture',
    image: '/GitOps_architecture_diagram.jpeg',
  },
  {
    title: 'ArgoCD GitOps Stack on AWS RKE2',
    desc: "An end-to-end GitOps pipeline on a self-managed RKE2 cluster with Traefik NLB, Cert-Manager, Let's Encrypt TLS and continuous delivery.",
    tech: ['AWS', 'RKE2', 'ArgoCD'],
    link: 'https://github.com/yousmakhayyam/argoCD-demo',
    tag: 'Infrastructure',
    image: '/ArgoCD GitOps Stack on AWS RKE2.png',
  },
  {
    title: 'AWS Load Balancer Controller on RKE2',
    desc: 'Terraform-provisioned RKE2 cluster with AWS Load Balancer Controller, delivered through a two-stage GitHub Actions CI/CD pipeline.',
    tech: ['Terraform', 'AWS', 'GitHub Actions'],
    link: 'https://github.com/yousmakhayyam/aws-lb-rke2-deployment',
    tag: 'Infrastructure',
    image: '/AWS Load Balancer Controller on RKE2.png',
  },
  {
    title: 'Multi-Cloud RKE2 via Rancher',
    desc: 'Downstream RKE2 clusters across AWS and Azure, centrally managed through Rancher with cloud-native ingress and load balancing.',
    tech: ['Rancher', 'AWS', 'Azure'],
    link: null,
    tag: 'Internal architecture',
    image: '/Multi-Cloud RKE2 via Rancher.png',
  },
  {
    title: 'VictoriaMetrics HA + OpenTelemetry',
    desc: 'Highly-available VictoriaMetrics monitoring stack on Kubernetes, built from scratch on AWS via Terraform, with an OTel Collector pipeline for app log collection.',
    tech: ['VictoriaMetrics', 'OpenTelemetry', 'Terraform'],
    link: null,
    tag: 'Observability',
    image: '/Monitoring_dashboard_UI.jpeg',
  },
  {
    title: 'SkillLoop',
    desc: 'Final Year Project — a peer-to-peer skill-sharing platform with SkillCoins gamification, real-time chat & video calls, and skill verification. 93.75% automated test pass rate.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://github.com/yousmakhayyam',
    tag: 'Full Stack',
    image: '/skillloop.PNG',
  },
  {
    title: 'LuminaCloud',
    desc: 'A modern cloud-based digital library: upload, organize, and securely access a PDF collection from anywhere.',
    tech: ['React', 'Cloud Storage'],
    link: 'https://github.com/yousmakhayyam/LuminaCloud',
    tag: 'Full Stack',
    image: '/lumina-ss.png.PNG',
  },
  {
    title: 'E-Commerce Website',
    desc: 'A responsive e-commerce application with authentication, product management, shopping cart, and secure checkout.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yousmakhayyam/E-commerce-website',
    tag: 'Full Stack',
    image: '/e-commerce.PNG',
  },
  {
    title: 'AI Chatbot',
    desc: 'An AI-powered chatbot integrating modern AI APIs to automate customer interactions with intelligent conversational responses.',
    tech: ['React', 'AI APIs'],
    link: 'https://github.com/yousmakhayyam/Chatbot-project',
    tag: 'AI',
    image: '/chatbot-project.png',
  },
  {
    title: 'YouTube Sentiment Analysis Tool',
    desc: 'Analyzes YouTube video comments for sentiment, breaking results into positive, neutral, and negative categories.',
    tech: ['Python', 'NLP'],
    link: 'https://github.com/yousmakhayyam/Sentiment_Analysis',
    tag: 'AI',
    image: '/Sentiment_analyzer_dashboard.jpeg',
  },
  {
    title: 'Contact Saver',
    desc: 'A small DevOps-focused utility for saving and organizing contacts.',
    tech: ['DevOps'],
    link: 'https://github.com/yousmakhayyam/contact-saver-devops',
    tag: 'Utility',
    image: '/Contact Saver.png',
  },
]

export const experience = [
  { role: 'Cloud Engineer', org: 'PufferSoft', period: 'Feb 2025 – Present', desc: 'Designing and deploying cloud infrastructure on Azure & AWS via Terraform, GitHub Actions CI/CD, Kubernetes (RKE2), Traefik, SSL, and load balancers.' },
  { role: 'Cloud Intern', org: 'PufferSoft', period: 'Nov 2024 – Jan 2025', desc: 'Assisted with Azure resource provisioning, App Service deployments, and learned Infrastructure as Code fundamentals.' },
  { role: 'BS Software Engineering', org: 'The University of Faisalabad', period: '2022 – 2026', desc: 'Coursework in Data Structures, Database Systems, Cloud Computing. Final Year Project: SkillLoop.' },
]

export const profile = {
  name: 'Yousma Khayyam',
  title: 'Software Engineer | Cloud & DevOps Engineer',
  pitch: 'I build full-stack applications, automate cloud infrastructure, and engineer intelligent AI agents that turn ideas into real-world solutions',
  bio: "Full Stack Developer, DevOps Engineer, and Cloud Engineer with 1.5+ years of hands-on experience designing, developing, and deploying scalable web applications and cloud infrastructure. Currently Cloud Engineer at PufferSoft, designing GitOps and self-service platforms for multi-tenant, multi-cluster environments — also builds full-stack web apps and AI-powered automation on the side.",
  email: '[yousmakhayyam@gmail.com](mailto:yousmakhayyam@gmail.com)',
  github: 'https://github.com/yousmakhayyam',
  linkedin: '[https://www.linkedin.com/in/yousmak/](https://www.linkedin.com/in/yousmak/)',
}

