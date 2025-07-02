const portfolioData = {
    personal: {
        name: 'Aleyna Alemdar',
        title: 'Computer Engineer',
        subtitle: 'Computer Engineering graduate with 2+ years of professional software development experience acquired alongside academic studies',
        description: 'Currently developing AI transportation optimization solutions in collaboration with Turkish Aerospace Industries and TUBITAK. Skilled in embedded systems, full-stack development and machine learning',
        location: 'Ankara, Turkey',
        email: 'aleyna.alemdar@tedu.edu.tr',
        phone: '+90 530 591 92 69',
        github: 'https://github.com/aleynaalemdar',
        linkedin: 'https://www.linkedin.com/in/aleynaalemdar/',
        website: 'https://aleynaalemdar.github.io/'
    },
    
    skills: [
        {
            icon: 'fas fa-robot',
            title: 'AI & Machine Learning',
            description: 'LSTM, Prophet, Genetic Algorithm, YOLO, OpenCV, Fastai, Hugging Face Spaces, Gradio'
        },
        {
            icon: 'fas fa-code',
            title: 'Programming Languages',
            description: 'Java, C#, Python, C, JavaScript, Dart, SQL'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'Full-Stack Development',
            description: 'React, Flutter, REST API, HTML/CSS, WordPress, Java Swing'
        },
        {
            icon: 'fas fa-microchip',
            title: 'Embedded & Database Systems',
            description: 'LabVIEW, MySQL, MongoDB, Raspberry Pi, Git, Unity, Blender, R, RStudio'
        }
    ],
    
    experience: [
        {
            period: 'February 2024 - June 2025',
            title: 'Candidate Software Engineer',
            company: 'NanoMagnetics Instruments',
            description: `• Designed GUI-based embedded system interfaces using Python<br>
                         • Implemented responsive UIs with multithreading and asynchronous programming<br>
                         • Configured and managed Linux-based environments on Raspberry Pi for software deployment<br>
                         • Debugged and troubleshot hardware-software integration issues in embedded systems<br>
                         • Designed software compatible with embedded firmware, ensuring seamless communication and integration`
        },
        {
            period: 'August 2023 - September 2024',
            title: 'Front-End Developer',
            company: 'TED University',
            description: `• Contributed as a part-time Front-End Developer for TEDUApp, the official student developed application catering to the needs of TED University students<br>
                         • Used Flutter-Dart to create user-friendly mobile app interfaces, made the user experience better and solved security vulnerabilities<br>
                         • <a href="https://apps.apple.com/tr/app/tedu-app/id6443412280" target="_blank" style="color: var(--color-accent-light);">View TEDUApp on App Store</a>`
        },
        {
            period: 'November 2023 - February 2024',
            title: 'Software Engineer Intern',
            company: 'NanoMagnetics Instruments',
            description: `• Developed and optimized database structures using SQL and MongoDB<br>
                         • Designed and implemented applications in C# and Python, enhancing operational efficiency<br>
                         • Integrated software systems with LabVIEW for data acquisition and analysis`
        },
        {
            period: 'August - September 2023',
            title: 'Game Developer Intern',
            company: 'Momend Game',
            description: `• Developed three games during the internship period, showcasing a versatile skill set and commitment to game development<br>
                         • Implemented and optimized game mechanics, graphics using Unity, C# and Blender resulting in enhanced gameplay experiences<br>
                         • Participated in the testing process to ensure the company's game provided a seamless user experience`
        },
        {
            period: 'December 2022 - March 2023',
            title: 'Web Development Intern',
            company: 'EkoDoku Sustainable Life Cooperative',
            description: `• Created a website for the company using WordPress, HTML and CSS which helped the organization establish an online presence and reach a wider audience`
        }
    ],
    
    education: {
        university: 'TED University',
        degree: 'Bachelor of Science, Major in Computer Engineering',
        period: '2021 - 2025',
        gpa: '2.97 / 4.00',
        language: '100% English education',
        secondaryField: 'Applied Data Analysis',
        coursework: ['Object Oriented Programming', 'Database Systems', 'Embedded Systems', 'Software Engineering', 'Artificial Intelligence', 'Data Structures', 'Algorithm Analysis', 'Computer Networks', 'Operating Systems', 'Computer Organization', 'Statistical Inference Methods with Applications', 'Python for Data Science', 'Digital Image Processing','Statistical Learning', 'Exploratory Data Analysis', 'Introduction to Deep Learning',]
    },
    
    projects: [
        {
            icon: 'fas fa-brain',
            title: 'TAI AND TUBITAK - Scheduling Optimization with Artificial Intelligence',
            description: 'Developing an AI-driven public transport scheduler with LSTM, Prophet, and Genetic Algorithms, in collaboration with TAI and TÜBİTAK. Building a cross-platform web and mobile interface in React, and implementing a RESTful API to connect the AI engine with the user-facing applications.',
            technologies: ['LSTM', 'Prophet', 'Genetic Algorithm', 'React', 'REST API'],
            period: 'November 2024 - Present',
        },
        {
            icon: 'fas fa-eye',
            title: 'Image Classification Project - Cifar-10-Fitune',
            description: 'Developed and fine-tuned a CIFAR-10 image classification model using Fastai and ResNet18, deployed it with Gradio on Hugging Face Spaces.',
            technologies: ['Fastai', 'Hugging Face Spaces', 'Gradio', 'ResNet18'],
            period: 'March - July 2024',
            links: [{ label: 'Try Model', url: 'https://huggingface.co/spaces/Aleynaalemdar/cifar-10-fitune' }]
        },
        {
            icon: 'fas fa-car',
            title: 'TEKNOFEST - Artificial Intelligence in Transportation Competition',
            description: 'Participated in TEKNOFEST Competition and built an image detection algorithm using YOLO and OPENCV.',
            technologies: ['YOLO', 'OpenCV', 'Python', 'Computer Vision'],
            period: 'March - July 2024',
            links: [{ label: 'Competition Info', url: 'https://teknofest.org/en/competitions/competition/43' }]
        },
        {
            icon: 'fas fa-gamepad',
            title: 'Game Projects - Sweetville Delights & Merge Chief & The Last Fruit Bender',
            description: 'Created 3D assets and environment using Blender, implemented game logic in Unity and optimized performance for smooth gameplay.',
            technologies: ['C#', 'Unity', 'Blender', '3D Modeling'],
            period: 'July 2023',
            links: [{ label: 'Play Games', url: 'https://aleynaalemdar.itch.io/' }]
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Application - WorldWander',
            description: 'Developed a mobile application using Flutter and Dart. The app offers a seamless user experience for exploring various travel destinations around the world.',
            technologies: ['Flutter', 'Dart', 'Mobile Development'],
            period: 'June - July 2023',
        },
        {
            icon: 'fas fa-globe',
            title: 'My Personal Web Development Project',
            description: 'Developed a personal website using HTML, CSS and JavaScript. Improved understanding of front-end web development and gained experience using version control with Git.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
            period: 'May 2023',
            links: [{ label: 'Visit Website', url: 'https://aleynaalemdar.github.io/' }]
        },
        {
            icon: 'fas fa-database',
            title: 'Database Project - TravelWander',
            description: 'Developed a dynamic Java application for travel Turkey and integrated with MySQL database, the app enabled users to save, update and delete personal information. It also offered insights into cities, providing details retrieved from the database.',
            technologies: ['Java', 'Java Swing', 'MySQL', 'SQL'],
            period: 'April - June 2023',
            links: [
                { label: 'Source Code', url: 'https://github.com/aleynaalemdar/TravelWander' },
                { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=_SCdW6YVOs4' }
            ]
        },
        {
            icon: 'fas fa-trophy',
            title: 'Global Game Jam Project - Make Java Great Again!',
            description: 'Developed a Java-based game in 48 hours with two team members as part of the Global Game Jam, our goal was to create an engaging game that showcased the versatility and power of the Java language.',
            technologies: ['Java', 'Java Swing', 'Game Development'],
            period: 'February 2023',
            links: [
                { label: 'Source Code', url: 'https://github.com/aleynaalemdar/Make_Java_Great_Again' },
                { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=WWGPPHXyAvI' }
            ]
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'Game Developer Candidate - The Game Circle Incubation and Acceleration Program',
            description: 'Selected for a game development program, contributed to all aspects of game development, including designing game mechanics, created compelling level designs and tested game assets to ensure they meet high standards of quality.',
            technologies: ['Unity', 'Blender', 'Game Design'],
            period: 'March - May 2023',
        }
    ],
    
    certificates: [
        { icon: 'fas fa-language', title: 'IELTS Academic Score: 7.0', issuer: 'British Council', date: '2024', link: '#' },
        { icon: 'fas fa-chart-line', title: 'Exploratory Data Analysis', issuer: 'Coursera', date: 'April 2025', link: 'https://coursera.org/share/863705d670795b42c0b1a214b74d9f6e' },
        { icon: 'fas fa-robot', title: 'Supervised Learning with scikit-learn', issuer: 'DataCamp', date: 'October 2024', link: '#' },
        { icon: 'fab fa-python', title: 'Intermediate Python', issuer: 'DataCamp', date: 'October 2024', link: '#' },
        { icon: 'fab fa-python', title: 'Introduction to Python', issuer: 'DataCamp', date: 'October 2024', link: '#' },
        { icon: 'fas fa-code', title: 'Software Engineering: Implementation and Testing', issuer: 'Coursera', date: 'May 2024', link: 'https://www.coursera.org/account/accomplishments/verify/SVGFCCTQ3JR8' },
        { icon: 'fas fa-project-diagram', title: 'Software Engineering: Software Design and Project Management', issuer: 'Coursera', date: 'May 2024', link: 'https://www.coursera.org/account/accomplishments/verify/SW52LVHEZ62Q' },
        { icon: 'fas fa-sitemap', title: 'Software Engineering: Modeling Software Systems using UML', issuer: 'Coursera', date: 'April 2024', link: 'https://www.coursera.org/account/accomplishments/verify/MC7RB2GP2LL9' },
        { icon: 'fas fa-chart-bar', title: 'Fitting Statistical Models to Data with Python', issuer: 'Coursera', date: 'January 2024', link: 'https://www.coursera.org/account/accomplishments/verify/ANKVY5JFBLH6' },
        { icon: 'fas fa-chart-area', title: 'Inferential Statistical Analysis with Python', issuer: 'Coursera', date: 'December 2023', link: 'https://www.coursera.org/account/accomplishments/verify/HXU6DU3WSL5H' },
        { icon: 'fas fa-chart-pie', title: 'Understanding and Visualizing Data with Python', issuer: 'Coursera', date: 'November 2023', link: 'https://www.coursera.org/account/accomplishments/verify/PNZ6E7ZQPFXP' },
        { icon: 'fas fa-users', title: 'Bootcamp 2023: User Experience and Usability Training', issuer: 'TÜBİTAK BILGEM YTE', date: 'October 2023', link: '#' },
        { icon: 'fas fa-server', title: 'Bootcamp 2023: Microservice Architectures Training', issuer: 'TÜBİTAK BILGEM YTE', date: 'October 2023', link: '#' },
        { icon: 'fas fa-pencil-ruler', title: 'Bootcamp 2023: Mock-Up Figma Training', issuer: 'TÜBİTAK BILGEM YTE', date: 'October 2023', link: '#' },
        { icon: 'fas fa-calculator', title: 'Financial Accounting Fundamentals', issuer: 'Coursera', date: 'June 2023', link: 'https://www.coursera.org/account/accomplishments/certificate/2CMQKLTFP4UW' },
        { icon: 'fas fa-brain', title: 'First Step to Artificial Intelligence', issuer: 'Global AI Hub', date: 'February 2023', link: '#' },
        { icon: 'fas fa-gamepad', title: 'Global Game Jam Participation', issuer: 'Global Game Jam', date: 'February 2023', link: 'https://credsverse.com/credentials/45cc415b-c728-441c-bf0a-b7c2f1bd3591' },
        { icon: 'fas fa-code', title: 'TEDU Welcome to Software Development Path', issuer: 'Patika.dev', date: 'January 2023', link: 'https://app.patika.dev/certificates/ea81aee0' },
        { icon: 'fab fa-java', title: '(42 Hours) Complete Java Developer Course From Scratch', issuer: 'Udemy', date: 'January 2023', link: 'https://www.udemy.com/certificate/UC-2745730f-f6bf-43a7-bc20-0412735bd441/' },
    ],
    
    languages: [
        { language: 'Turkish', level: 'Native Language' },
        { language: 'English', level: 'Advanced & IELTS Academic Score: 7.0 (2024)' },
        { language: 'German', level: 'Intermediate' }
    ],
    
    skillsDetailed: {
        proficient: ['Java', 'C#', 'Python', 'Object Oriented Programming', 'Embedded Systems', 'Raspberry Pi', 'Qt Designer' ,'LabVIEW' ],
        familiar: ['C', 'Linux', 'React', 'REST API', 'SQL', 'YOLO', 'OpenCV', 'LSTM', 'Prophet', 'Genetic Algorithm', 'Fastai', 'Hugging Face Spaces', 'Gradio', 'MySQL', 'MongoDB', 'Java Swing', 'Git', 'WordPress', 'HTML/CSS', 'JavaScript', 'Flutter', 'Dart', 'Blender', 'Unity', 'R', 'RStudio']
    }
    }

// App Class 
class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.navItems = null;
        this.sections = null;
    }

    init() {
        this.createNavigation();
        this.createSections();
        this.bindEvents();
        this.initAnimations();
        
        console.log('🚀 Portfolio initialized successfully with complete CV data!');
    }

    createNavigation() {
        const nav = document.getElementById('navigation');
        const navItems = [
            { id: 'home', icon: 'fas fa-home' },
            { id: 'about', icon: 'fas fa-user' },
            { id: 'experience', icon: 'fas fa-briefcase' },
            { id: 'education', icon: 'fas fa-graduation-cap' },
            { id: 'projects', icon: 'fas fa-code' },
            { id: 'certificates', icon: 'fas fa-certificate' },
            { id: 'contact', icon: 'fas fa-envelope' }
        ];

        nav.innerHTML = navItems.map((item, index) => `
            <div class="nav-item ${index === 0 ? 'active' : ''}" data-section="${item.id}">
                <i class="${item.icon}"></i>
            </div>
        `).join('');
    }

    createSections() {
        const mainContent = document.getElementById('mainContent');
        
        const sections = [
            this.createHomeSection(),
            this.createAboutSection(),
            this.createExperienceSection(),
            this.createEducationSection(),
            this.createProjectsSection(),
            this.createCertificatesSection(),
            this.createContactSection()
        ];

        mainContent.innerHTML = sections.join('');
    }

    createHomeSection() {
        const { name, title, subtitle, description } = portfolioData.personal;
        return `
            <section class="page-section active" id="home">
                <div class="hero-container">
                    <div class="hero-content">
                        <h1>${name}</h1>
                        <p class="subtitle">${title}</p>
                        <p class="description">${subtitle}. ${description}</p>
                        <div style="display: flex; gap: 20px; margin-top: 30px; flex-wrap: wrap;">
                            <a href="Aleyna_Alemdar_CV.pdf" target="_blank" class="modern-btn">
                                <i class="fas fa-download"></i>
                                    Download CV
                            </a>
                            <a href="#contact" class="modern-btn" style="background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border);">
                                <i class="fas fa-envelope"></i>
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="hero-avatar">
                            <img src="images/profile.jpeg" alt="Aleyna Alemdar" class="profile-image">
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    createAboutSection() {
        const skills = portfolioData.skills;
        const { proficient, familiar } = portfolioData.skillsDetailed;
        
        return `
            <section class="page-section" id="about">
                <div class="section-header">
                    <h2>About Me</h2>
                    <p>Passionate about creating innovative solutions through technology</p>
                </div>
                
                <div class="about-grid">
                    <div class="about-text">
                        <h3>Professional Summary</h3>
                        <p>${portfolioData.personal.subtitle}. ${portfolioData.personal.description}</p>
                        <p>Demonstrated hands-on experience through projects involving mobile apps, AI models, databases, and hardware-software integration. Quick to learn and focused on building reliable, efficient solutions.</p>
                        <a href="#projects" class="modern-btn" style="margin-top: 20px;">
                            <i class="fas fa-rocket"></i>
                            View My Projects
                        </a>
                    </div>
                    <div class="about-text">
                        <h3>Technical Skills</h3>
                        <div style="margin: 20px 0;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px;">Proficient:</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                                ${proficient.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px;">Familiar:</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${familiar.map(tech => `<span class="tech-tag" style="background: var(--secondary-gradient);">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div style="margin-top: 20px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px;">Languages:</h4>
                            ${portfolioData.languages.map(lang => 
                                `<p style="color: var(--color-text-muted); margin-bottom: 5px;"><strong>${lang.language}:</strong> ${lang.level}</p>`
                            ).join('')}
                        </div>
                    </div>
                </div>

                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-card glass-card">
                            <div class="icon">
                                <i class="${skill.icon}"></i>
                            </div>
                            <h4>${skill.title}</h4>
                            <p>${skill.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    createExperienceSection() {
        const experience = portfolioData.experience;
        return `
            <section class="page-section" id="experience">
                <div class="section-header">
                    <h2>Professional Experience</h2>
                    <p>2+ years of professional software development across multiple technologies</p>
                </div>

                <div class="timeline-container">
                    <div class="timeline-line"></div>
                    ${experience.map(exp => `
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="timeline-date">${exp.period}</div>
                                <h3 class="timeline-title">${exp.title}</h3>
                                <p class="timeline-company">${exp.company}</p>
                                <div class="timeline-description">${exp.description}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    createEducationSection() {
        const edu = portfolioData.education;
        return `
            <section class="page-section" id="education">
                <div class="section-header">
                    <h2>Education</h2>
                    <p>Academic foundation building technical expertise and analytical thinking</p>
                </div>

                <div class="education-card glass-card">
                    <div class="education-icon">
                        <i class="fas fa-university"></i>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 10px; color: var(--color-accent-light);">${edu.university}</h3>
                    <h4 style="font-size: 1.3rem; margin-bottom: 15px; color: var(--color-text-muted);">${edu.degree}</h4>
                    <div style="display: flex; justify-content: center; gap: 30px; margin: 20px 0; flex-wrap: wrap;">
                        <div style="text-align: center;"><strong style="color: var(--color-accent-light);">Duration:</strong><p style="color: var(--color-text-muted);">${edu.period}</p></div>
                        <div style="text-align: center;"><strong style="color: var(--color-accent-light);">GPA:</strong><p style="color: var(--color-text-muted);">${edu.gpa}</p></div>
                        <div style="text-align: center;"><strong style="color: var(--color-accent-light);">Language:</strong><p style="color: var(--color-text-muted);">${edu.language}</p></div>
                    </div>
                    <div style="margin-top: 25px;">
                        <h5 style="color: var(--color-accent-light); margin-bottom: 10px;">Secondary Field:</h5>
                        <p style="color: var(--color-text-muted);">${edu.secondaryField}</p>
                    </div>
                    <div style="margin-top: 25px;">
                        <h5 style="color: var(--color-accent-light); margin-bottom: 15px;">Key Coursework:</h5>
                        <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                            ${edu.coursework.map(course => `<span class="tech-tag">${course}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
    createProjectsSection() {
        const projects = portfolioData.projects;
        return `
            <section class="page-section" id="projects">
                <div class="section-header">
                    <h2>Projects</h2>
                    <p>Comprehensive portfolio spanning AI, web development, mobile apps, and game development</p>
                </div>

                <div class="projects-grid">
                    ${projects.map(project => `
                        <div class="project-card">
                            <div class="project-image">
                                <i class="${project.icon}"></i>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">${project.title}</h3>
                                ${project.period ? `<p style="color: var(--color-accent-light); font-size: 0.9rem; margin-bottom: 10px; font-weight: 600;">${project.period}</p>` : ''}
                                <p class="project-description">${project.description}</p>
                                <div class="tech-stack">
                                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                                ${project.links && project.links.length > 0 ? `
                                    <div class="project-links">
                                        ${project.links.map(link => `
                                            <a href="${link.url}" class="project-link" target="_blank">
                                                <i class="fas fa-external-link-alt"></i> ${link.label}
                                            </a>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }


    createCertificatesSection() {
        const certificates = portfolioData.certificates;
        return `
            <section class="page-section" id="certificates">
                <div class="section-header">
                    <h2>Certifications & Achievements</h2>
                    <p>Continuous learning and professional development - ${certificates.length} certificates earned</p>
                </div>

                <div class="certificates-grid">
                    ${certificates.map(cert => `
                        <div class="certificate-card">
                            <div class="certificate-header">
                                <div class="certificate-icon">
                                    <i class="${cert.icon}"></i>
                                </div>
                                <div>
                                    <h4 class="certificate-title">${cert.title}</h4>
                                    <p class="certificate-issuer">${cert.issuer}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                                <div class="certificate-date">${cert.date}</div>
                                ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" style="color: var(--color-accent-light); text-decoration: none; font-size: 0.9rem;"><i class="fas fa-external-link-alt"></i> View</a>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    createContactSection() {
        const { location, email, phone, github, linkedin, website } = portfolioData.personal;
        return `
            <section class="page-section" id="contact">
                <div class="section-header">
                    <h2>Let's Connect</h2>
                    <p>Ready to collaborate on innovative projects and explore new opportunities</p>
                </div>

                <div class="contact-grid">
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                            <div><h4 style="margin-bottom: 5px; color: var(--color-accent-light);">Email</h4><p style="color: var(--color-text-muted);">${email}</p></div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-phone"></i></div>
                            <div><h4 style="margin-bottom: 5px; color: var(--color-accent-light);">Phone</h4><p style="color: var(--color-text-muted);">${phone}</p></div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-globe"></i></div>
                            <div><h4 style="margin-bottom: 5px; color: var(--color-accent-light);">Languages</h4><p style="color: var(--color-text-muted);">Turkish (Native), English (Advanced - IELTS 7.0), German (Intermediate)</p></div>
                        </div>
                        
                        <div class="social-links">
                            <a href="${github}" class="social-link" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                            <a href="${linkedin}" class="social-link" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                            <a href="${website}" class="social-link" target="_blank" title="Personal Website"><i class="fas fa-globe"></i></a>
                        </div>
                    </div>

                    <div class="glass-card">
                        <h3 style="color: var(--color-accent-light); margin-bottom: 25px; text-align: center;">Professional Summary</h3>
                        
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-rocket"></i> Current Focus
                            </h4>
                            <p style="color: var(--color-text-muted); line-height: 1.6;">
                                Developing AI transportation optimization solutions with Turkish Aerospace Industries and TÜBİTAK
                            </p>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-graduation-cap"></i> Academic Status
                            </h4>
                            <p style="color: var(--color-text-muted); line-height: 1.6;">
                                Final year Computer Engineering student at TED University with focus on Applied Data Analysis
                            </p>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-briefcase"></i> Experience
                            </h4>
                            <p style="color: var(--color-text-muted); line-height: 1.6;">
                                2+ years professional software development experience across multiple companies
                            </p>
                        </div>

                        <div style="margin-bottom: 30px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 15px;">Core Expertise</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${['AI/ML', 'Python', 'Java', 'C#', 'Embedded Systems'].map(tech => 
                                    `<span class="tech-tag">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--color-accent-light); margin-bottom: 10px;">Achievement Highlights</h4>
                            <ul style="color: var(--color-text-muted); line-height: 1.6; margin-left: 20px;">
                                <li>${portfolioData.certificates.length} Professional Certifications</li>
                                <li>IELTS Academic Score: 7.0</li>
                                <li>Active collaboration with TAI & TÜBİTAK</li>
                                <li>TEKNOFEST Competition Participant</li>
                            </ul>
                        </div>

                        <div style="text-align: center;">
                            <a href="Aleyna_Alemdar_CV.pdf" target="_blank" class="modern-btn">
                                <i class="fas fa-download"></i>
                                    Download Complete CV
                            </a>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 60px; text-align: center; padding: 30px; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 20px;">
                    <h4 style="color: var(--color-accent-light); margin-bottom: 15px;">References</h4>
                    <p style="color: var(--color-text-muted);">References are available upon request</p>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // Navigation
        this.navItems = document.querySelectorAll('.nav-item');
        this.sections = document.querySelectorAll('.page-section');

        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetSection = item.dataset.section;
                this.navigateToSection(targetSection);
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                if (targetId && document.getElementById(targetId)) {
                    this.navigateToSection(targetId);
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const currentActiveNav = document.querySelector('.nav-item.active');
            const currentIndex = Array.from(this.navItems).indexOf(currentActiveNav);
            
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % this.navItems.length;
                this.navItems[nextIndex].click();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + this.navItems.length) % this.navItems.length;
                this.navItems[prevIndex].click();
            }
        });
    }

    navigateToSection(sectionId) {
        // Update navigation
        this.navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update sections
        this.sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');

        this.currentSection = sectionId;
        
        // Update page title
        const titles = {
            home: 'Aleyna Alemdar - Computer Engineer',
            about: 'About - Aleyna Alemdar',
            experience: 'Experience - Aleyna Alemdar',
            education: 'Education - Aleyna Alemdar',
            projects: 'Projects - Aleyna Alemdar',
            certificates: 'Certificates - Aleyna Alemdar',
            contact: 'Contact - Aleyna Alemdar'
        };
        document.title = titles[sectionId] || 'Aleyna Alemdar - Portfolio';
    }

    initAnimations() {
        // Loading animation
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
        }, 1500);

        // Scroll indicator
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scrollIndicator').style.transform = `scaleX(${Math.min(scrolled, 100)}%)`;
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Observe elements for animation
        document.querySelectorAll('.glass-card, .project-card, .certificate-card, .timeline-item').forEach(el => {
            observer.observe(el);
        });

        // Typing effect for hero title
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-content h1');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                this.typeWriter(heroTitle, originalText, 80);
            }
        }, 2000);

        // Add magnetic effect to buttons
        document.querySelectorAll('.modern-btn').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });

        // Add tilt effect to cards
        document.querySelectorAll('.glass-card, .project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
});

// Make app available globally for debugging
window.PortfolioApp = PortfolioApp;
