import { NextResponse } from "next/server";

export async function GET() {
  const resumeText = `
SABIR ESSAAD
Computer Science & Networks Engineering Student | Full Stack Developer
Email: sabiressaad24@gmail.com | Marrakech, Morocco
GitHub: https://github.com/sabiressaad | LinkedIn: https://linkedin.com/in/sabiressaad/

EDUCATION
Preparatory Cycle & Engineering Cycle in Computer Science and Networks
Ecole Marocaine des Sciences de l'Ingenieur (EMSI)
- Engineering cycle: 2023 - present
- Preparatory cycle: 2021 - 2023
- Relevant courses: advanced programming, network administration, web development, databases, DevOps, cloud computing, artificial intelligence

Generative & Agentic AI Training Program | GenAIOT (8 months)
- 4 months of theory: 2 months common core, 2 months agentic AI.
- 4 months in-company project internship at Fusion AI.

EXPERIENCE
AI Engineering Intern - Enterprise Project | Fusion AI (4 months)
- In-company project internship completed as part of the GenAIOT training program.

AI & Full Stack Developer Intern | XAI (01/08/2025 - 30/09/2025)
- Smart Real Estate Platform: web application to visualize and manage real estate properties, integrating interactive 3D models.
- Technologies: Angular, Three.js, Java, Spring Boot, PostgreSQL, Python, Docker

Full Stack & Machine Learning Developer Intern (PFA) | Norsys (01/07/2025 - 29/08/2025)
- Smart HR Solution: intelligent HR platform integrating AI to automate and optimize recruitment processes.
- Technologies: Python, Django, React, MySQL, Docker, Machine Learning

Full Stack Developer Intern (PFA) | RIDA ANIS (01/07/2025 - 31/07/2025)
- Stock management system: web application with authentication and access rights management.
- Technologies: PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, XAMPP, UML

ACADEMIC PROJECTS
EmotionLearn (PFA) - Emotion detection for education
- Platform that lets teachers adapt their teaching to students' emotions in real time.
- Technologies: React, FastAPI (Python), MongoDB, WebSockets

Banking Management System
- Secure banking application with account management, transactions, and JWT authentication.
- Technologies: Angular, Spring Boot, PostgreSQL, JWT

MediCare - Teleconsultation Application
- Remote medical consultation with appointment booking, secure video conferencing, and medical record follow-up.
- Technologies: React Native, Spring Boot/JEE, Docker, Kubernetes, CI/CD

Medical Clinic Management System
- Web platform for patients, appointments, and medical records, with analytics dashboards and real-time notifications.
- Technologies: React, Laravel, MySQL, REST API

MobiCode - AI-Powered Mobile Code Generation and Optimization
- Tool generating native Android code (Java) from text prompts, with automatic optimization using NLP models.
- Technologies: Java, Android Studio, Python, NLP, Transformers, OpenAI API

TECHNICAL SKILLS
- Web: HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Angular, Laravel, Spring Boot
- Mobile: React Native, Android Studio, Java Mobile
- Programming: Python, Java, C, C++, C#, PHP
- DevOps & Cloud: Docker, Kubernetes, CI/CD, Git, GitHub
- Databases: MySQL, MongoDB, PostgreSQL, Oracle, SQL Server
- Other: MERN Stack, Django, .NET, REST API, WebSockets, Hadoop, Power BI
- AI/ML: OpenCV, TensorFlow, Computer Vision, Deep Learning

SOFT SKILLS
Stress management, adaptability, teamwork, problem solving, fast learning

LANGUAGES
Arabic: native | French: fluent | English: intermediate

CERTIFICATES
- Meta Developer Certificates (Front-End & Back-End)
- Introduction to Docker
- PSM I / Google Data Analytics

INTERESTS
Chess, volunteering (JLM), technology watch, hackathons and programming challenges
`;

  return new NextResponse(resumeText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'inline; filename="Sabir_Essaad_CV.txt"',
    },
  });
}
