// ===================================
// CUSTOM CURSOR
// ===================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    
    requestAnimationFrame(animateCursor);
}

if (window.innerWidth > 768) {
    animateCursor();
}

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .magnetic');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// ===================================
// SCROLL PROGRESS BAR
// ===================================
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.transform = `scaleX(${scrollPercentage / 100})`;
});

// ===================================
// NAVIGATION
// ===================================
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip for external links
        if (href.startsWith('http')) return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        navLinksContainer.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// ===================================
// PARTICLE SYSTEM
// ===================================
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(0, 217, 255, ${Math.random() * 0.5 + 0.2})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
}

// ===================================
// TYPING ANIMATION
// ===================================
const typingText = document.querySelector('.typing-text');
const titles = [
    'iOS Developer',
    'macOS Developer',
    'Swift Expert',
    'SwiftUI Enthusiast',
    'Problem Solver'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeTitle() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeTitle, typingSpeed);
}

typeTitle();

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 100);
        }
    });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('.section, .stat-card, .skill-card, .timeline-item, .project-card, .framework-card').forEach(el => {
    fadeInObserver.observe(el);
});

// ===================================
// COUNTER ANIMATION
// ===================================
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ===================================
// MAGNETIC BUTTON EFFECT
// ===================================
const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// POPULATE CONTENT FROM DATA
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // About section
    const aboutDescription = document.getElementById('about-description');
    if (aboutDescription && portfolioData.about) {
        aboutDescription.textContent = portfolioData.about.description;
    }
    
    // Skills section
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && portfolioData.skills) {
        portfolioData.skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card fade-in';
            skillCard.innerHTML = `
                <h3 class="skill-category">${skill.category}</h3>
                <p class="skill-items">${skill.items}</p>
            `;
            skillsContainer.appendChild(skillCard);
            fadeInObserver.observe(skillCard);
        });
    }
    
    // Experience section
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer && portfolioData.experience) {
        portfolioData.experience.forEach(job => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item fade-in';
            timelineItem.innerHTML = `
                <div class="experience-date">${job.period}</div>
                <h3 class="job-title">${job.title}</h3>
                <p class="company">${job.company}</p>
                <ul class="experience-details">
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
                <div class="tags">
                    ${job.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            `;
            experienceContainer.appendChild(timelineItem);
            fadeInObserver.observe(timelineItem);
        });
    }
    
    // Projects section
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && portfolioData.projects) {
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.innerHTML = `
                <img src="${project.previewImage}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
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
            projectsContainer.appendChild(projectCard);
            fadeInObserver.observe(projectCard);
        });
    }
    
    // Frameworks section
    const frameworksContainer = document.getElementById('frameworks-container');
    if (frameworksContainer && portfolioData.frameworks) {
        portfolioData.frameworks.forEach(framework => {
            const frameworkCard = document.createElement('div');
            frameworkCard.className = 'framework-card fade-in';
            frameworkCard.innerHTML = `
                <img src="${framework.previewImage}" alt="${framework.name}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${framework.name}</h3>
                    <p class="project-description">${framework.description}</p>
                    <div class="project-footer">
                        <div class="project-repositories">
                            <a href="${framework.url}" class="repo-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                <span>View on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            frameworksContainer.appendChild(frameworkCard);
            fadeInObserver.observe(frameworkCard);
        });
    }
});

// ===================================
// PARALLAX EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.float-element');
    
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 2;
        el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// ===================================
// PREVENT FLASH ON LOAD
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add initial opacity to body in CSS
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

console.log('%c🚀 Portfolio Loaded Successfully!', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cBuilt with passion by Durga Viswanadh Nemala', 'font-size: 14px; color: #7B2FFF;');