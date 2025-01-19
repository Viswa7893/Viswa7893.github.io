document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            } else {
                // Remove class when element is not visible for reverse animation
                entry.target.classList.remove('animate-visible');
            }
        });
    }, observerOptions);

    // Populate About section
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `
        <p>${portfolioData.about.greeting}</p>
        <p style="margin-top: 1em">
            ${portfolioData.about.description.replace('iOS and macOS Developer', '<span class="highlight">iOS and macOS Developer</span>')}
        </p>
    `;

    // Populate Skills section with animation
    const skillsList = document.getElementById('skills-list');
    portfolioData.skills.forEach((skill, index) => {
        const li = document.createElement('li');
        li.textContent = `${skill.category} : ${skill.items}`;
        li.style.transitionDelay = `${index * 0.1}s`; // Stagger animation
        li.classList.add('animate-section');
        skillsList.appendChild(li);
        animateOnScroll.observe(li);
    });
    
        // Populate Projects section with animation
    const projectsList = document.getElementById('projects-list');
    portfolioData.projects.forEach((project, index) => {
        const li = document.createElement('li');
        li.className = 'project-card animate-section';
        li.style.transitionDelay = `${index * 0.2}s`; // Stagger animation
        
        li.innerHTML = `
            <img src="${project.previewImage}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <ul class="project-highlights">
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                <div class="project-footer">
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="project-tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-repositories">
                    ${project.appstoreUrl.map(repo => `
                        <a href="${repo.url}" class="repo-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab ${repo.icon}"></i>
                            <span>${repo.name}</span>
                        </a>
                    `).join('')}
                </div>
                </div>
            </div>
        `;
        
        projectsList.appendChild(li);
        animateOnScroll.observe(li);
    });
    
    // Populate Experience section with animation
    const experienceContent = document.getElementById('experience-content');
    portfolioData.experience.forEach((job, index) => {
        const jobElement = document.createElement('div');
        jobElement.className = 'experience-item animate-section';
        jobElement.style.transitionDelay = `${index * 0.2}s`; // Stagger animation
        jobElement.innerHTML = `
            <div class="experience-date">${job.period}</div>
            <div class="job-title">${job.title}</div>
            <div class="company">${job.company}</div>
            <ul class="experience-details">
                ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
            <div class="tags">
                ${job.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        `;
        experienceContent.appendChild(jobElement);
        animateOnScroll.observe(jobElement);
    });

    // Populate Education section with animation
    const educationContent = document.getElementById('education-content');
    portfolioData.education.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item animate-section';
        eduElement.style.transitionDelay = `${index * 0.2}s`; // Stagger animation
        eduElement.innerHTML = `
            <div class="education-date">${edu.period}</div>
            <div class="education-degree">${edu.degree}</div>
            <div class="education-school">${edu.school}</div>
            ${edu.subjects ? `
                <div class="subjects">
                    ${edu.subjects.map(subject => `<span class="subject">${subject}</span>`).join('')}
                </div>
            ` : ''}
        `;
        educationContent.appendChild(eduElement);
        animateOnScroll.observe(eduElement);
    });

    // Populate Contact section with animation
    const contactContent = document.getElementById('contact-content');
    contactContent.innerHTML = `
        <div class="social-links animate-section">
            ${portfolioData.contact.social.map(social => `
                <a href="${social.url}" class="social-link ${social.class}" target="_blank" rel="noopener noreferrer">
                    <i class="fab ${social.icon}"></i>
                    <span>${social.platform}</span>
                </a>
            `).join('')}
        </div>
        <div class="contact-info animate-section">
            <p>${portfolioData.contact.message}</p>
            <a href="mailto:${portfolioData.contact.email}" class="email-link">
                <i class="fas fa-envelope"></i>
                ${portfolioData.contact.email}
            </a>
          <br></br>
           <a href="" class="phone-link">
                <i class="fas fa-phone"></i>
                ${portfolioData.contact.phoneNumber}
            </a>
        </div>
    `;

    // Observe contact section elements
    contactContent.querySelectorAll('.animate-section').forEach(element => {
        animateOnScroll.observe(element);
    });

    // Initialize section observers
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-section');
        animateOnScroll.observe(section);
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Function to update active nav link
    function updateActiveSection() {
        let currentSection = '';
        
        // Check if we're at the bottom of the page
        const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
        
        if (isAtBottom) {
            currentSection = 'contact';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200 && 
                    window.pageYOffset < sectionTop + sectionHeight - 200) {
                    currentSection = section.getAttribute('id');
                }
            });
        }

        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // // Navigation click handler with offset
    // navLinks.forEach(link => {
    //     link.addEventListener('click', (e) => {
    //         e.preventDefault();
            
    //         const targetId = link.getAttribute('href');
    //         const targetSection = document.querySelector(targetId);
            
    //         navLinks.forEach(a => a.classList.remove('active'));
    //         link.classList.add('active');
            
    //         const offset = 50;
    //         const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
            
    //         window.scrollTo({
    //             top: targetPosition,
    //             behavior: 'smooth'
    //         });
    //     });
    // });

        // Navigation click handler with offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Check if this is an external link (like resume)
            if (href.startsWith('http') || href.startsWith('https')) {
                // Let the default behavior happen for external links
                return;
            }
            
            // For internal navigation
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            navLinks.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            const offset = 50;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check for active section
    setTimeout(updateActiveSection, 100);
    
    // Footer animation on scroll
    const footer = document.querySelector('footer');
    if (footer) {
        animateOnScroll.observe(footer);
        footer.classList.add('animate-section');
        
        // Add dynamic year to copyright if needed
        const yearSpan = footer.querySelector('.current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
});