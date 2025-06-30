// Mock data for the portfolio

export const personalInfo = {
  name: "Alex Johnson",
  title: "Cybersecurity & IoT Student",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
  website: "https://alexjohnson.dev"
};

export const aboutData = {
  bio: "I'm a dedicated Cybersecurity and Internet of Things student with a passion for securing digital infrastructure and connected devices. My journey in technology began with a fascination for how things work, which evolved into a deep commitment to protecting the digital world from emerging threats.",
  education: [
    {
      degree: "Bachelor of Science in Cybersecurity",
      school: "University of California, Berkeley",
      year: "2022 - 2026",
      gpa: "3.8/4.0",
      relevant_courses: ["Network Security", "Cryptography", "Digital Forensics", "Ethical Hacking"]
    },
    {
      degree: "IoT Security Specialization",
      school: "Stanford Online",
      year: "2024",
      status: "Completed",
      relevant_courses: ["IoT Architecture", "Device Security", "Edge Computing Security"]
    }
  ],
  skills: {
    technical: [
      "Penetration Testing", "Network Security", "Malware Analysis", "Digital Forensics",
      "IoT Security", "Cloud Security", "Incident Response", "Risk Assessment"
    ],
    programming: [
      "Python", "C/C++", "Java", "JavaScript", "PowerShell", "Bash", "SQL"
    ],
    tools: [
      "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Kali Linux", "SIEM Tools",
      "Docker", "Kubernetes", "AWS Security", "Splunk"
    ],
    certifications: [
      "CompTIA Security+ (In Progress)",
      "CEH - Certified Ethical Hacker (Planned 2025)",
      "CISSP Associate (Planned 2026)"
    ]
  }
};

export const projectsData = [
  {
    id: 1,
    title: "IoT Home Security System",
    description: "Developed a comprehensive IoT security system with real-time monitoring, intrusion detection, and automated response capabilities. Implemented end-to-end encryption and secure device authentication.",
    technologies: ["Python", "Raspberry Pi", "MQTT", "TLS/SSL", "Firebase", "React"],
    features: [
      "Real-time threat detection",
      "Encrypted communication protocols",
      "Mobile app integration",
      "Machine learning anomaly detection"
    ],
    github: "https://github.com/alexjohnson/iot-security-system",
    demo: "https://iot-security-demo.com",
    image: "/api/placeholder/600/400",
    status: "Completed",
    category: "IoT Security"
  },
  {
    id: 2,
    title: "Network Vulnerability Scanner",
    description: "Built an advanced network vulnerability scanner that identifies security weaknesses, misconfigurations, and potential entry points in corporate networks.",
    technologies: ["Python", "Nmap", "Scapy", "Django", "PostgreSQL", "Docker"],
    features: [
      "Automated vulnerability assessment",
      "Custom exploit detection",
      "Detailed reporting system",
      "Integration with SIEM platforms"
    ],
    github: "https://github.com/alexjohnson/vuln-scanner",
    demo: "https://vulnscan-demo.com",
    image: "/api/placeholder/600/400",
    status: "Completed",
    category: "Network Security"
  },
  {
    id: 3,
    title: "Blockchain Security Audit Tool",
    description: "Created a smart contract security analysis tool that automatically detects common vulnerabilities in Ethereum smart contracts and provides remediation suggestions.",
    technologies: ["Solidity", "Node.js", "Web3.js", "React", "Mythril", "Slither"],
    features: [
      "Automated smart contract analysis",
      "Vulnerability pattern recognition",
      "Gas optimization suggestions",
      "Compliance checking"
    ],
    github: "https://github.com/alexjohnson/blockchain-audit",
    demo: "https://blockchain-audit-demo.com",
    image: "/api/placeholder/600/400",
    status: "In Progress",
    category: "Blockchain Security"
  },
  {
    id: 4,
    title: "AI-Powered Malware Detector",
    description: "Developed a machine learning model for detecting and classifying malware using behavioral analysis and static code features.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB", "Docker"],
    features: [
      "Real-time malware detection",
      "Behavioral analysis engine",
      "API for integration",
      "Continuous learning capability"
    ],
    github: "https://github.com/alexjohnson/ai-malware-detector",
    demo: "https://malware-detector-demo.com",
    image: "/api/placeholder/600/400",
    status: "Completed",
    category: "Malware Analysis"
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Cybersecurity Intern",
    company: "TechSecure Solutions",
    location: "San Francisco, CA",
    duration: "June 2024 - August 2024",
    type: "Internship",
    description: "Worked on penetration testing and vulnerability assessment projects for enterprise clients.",
    achievements: [
      "Conducted security assessments for 15+ client networks",
      "Identified and reported 50+ critical vulnerabilities",
      "Developed automated testing scripts that reduced assessment time by 40%",
      "Presented findings to C-level executives"
    ],
    technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nessus", "Python"]
  },
  {
    id: 2,
    title: "Research Assistant - IoT Security Lab",
    company: "UC Berkeley",
    location: "Berkeley, CA",
    duration: "September 2023 - Present",
    type: "Research",
    description: "Conducting research on IoT device security and developing novel attack detection methods.",
    achievements: [
      "Co-authored 2 research papers on IoT security",
      "Developed new firmware analysis techniques",
      "Led a team of 5 undergraduate researchers",
      "Presented research at IEEE Security Conference"
    ],
    technologies: ["Python", "C", "ARM Assembly", "Ghidra", "IDA Pro"]
  },
  {
    id: 3,
    title: "IT Security Volunteer",
    company: "Local Non-Profit Organization",
    location: "Berkeley, CA",
    duration: "January 2023 - Present",
    type: "Volunteer",
    description: "Providing cybersecurity consulting and training for local non-profit organizations.",
    achievements: [
      "Improved security posture for 10+ organizations",
      "Conducted cybersecurity awareness training",
      "Implemented secure backup and recovery systems",
      "Developed security policies and procedures"
    ],
    technologies: ["Microsoft 365", "Google Workspace", "Antivirus Solutions", "Backup Systems"]
  }
];

export const contestsData = [
  {
    id: 1,
    name: "National Cyber League (NCL)",
    year: "2024",
    position: "Top 10%",
    category: "Individual Competition",
    description: "Competed in a comprehensive cybersecurity challenge covering various domains including cryptography, web security, and digital forensics.",
    achievements: [
      "Ranked in top 10% nationally",
      "Scored 850/1000 points",
      "Specialized in cryptography and network security challenges"
    ],
    skills: ["Cryptography", "Web Security", "Digital Forensics", "Network Analysis"]
  },
  {
    id: 2,
    name: "CyberPatriot National Finals",
    year: "2024",
    position: "3rd Place",
    category: "Team Competition",
    description: "Led a team of 5 in the nation's premier high school cybersecurity competition, focusing on system hardening and network defense.",
    achievements: [
      "Led team to 3rd place nationally",
      "Managed Windows and Linux system hardening",
      "Implemented network security policies",
      "Mentored junior team members"
    ],
    skills: ["System Administration", "Network Defense", "Policy Implementation", "Team Leadership"]
  },
  {
    id: 3,
    name: "DEF CON CTF Qualifier",
    year: "2024",
    position: "Top 50",
    category: "Team Competition",
    description: "Participated in one of the world's most challenging cybersecurity competitions with focus on binary exploitation and reverse engineering.",
    achievements: [
      "Qualified for DEF CON finals",
      "Specialized in reverse engineering challenges",
      "Collaborated with international team members",
      "Solved 15+ complex challenges"
    ],
    skills: ["Binary Exploitation", "Reverse Engineering", "Assembly Language", "Debugging"]
  },
  {
    id: 4,
    name: "IoT Security Challenge",
    year: "2023",
    position: "1st Place",
    category: "Individual Competition",
    description: "Won first place in a specialized IoT security competition focusing on device exploitation and secure firmware development.",
    achievements: [
      "First place winner",
      "Discovered novel IoT vulnerabilities",
      "Developed secure firmware patches",
      "Presented findings to industry professionals"
    ],
    skills: ["IoT Security", "Firmware Analysis", "Hardware Hacking", "Vulnerability Research"]
  },
  {
    id: 5,
    name: "Regional Cybersecurity Olympiad",
    year: "2023",
    position: "Gold Medal",
    category: "Individual Competition",
    description: "Earned gold medal in regional cybersecurity competition covering incident response and malware analysis.",
    achievements: [
      "Gold medal recipient",
      "Perfect score in malware analysis section",
      "Led incident response simulation",
      "Mentored other participants"
    ],
    skills: ["Incident Response", "Malware Analysis", "Digital Forensics", "Risk Assessment"]
  }
];

export const contactData = {
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: "Available for internships and entry-level positions",
  socialLinks: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson_sec",
    personal_website: "https://alexjohnson.dev"
  }
};