// ========================================
// Elite Decor - GSAP Animations & Interactions
// ========================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ========================================
// Navigation
// ========================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// Hero Section Animations
// ========================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .to('.hero-text', {
        opacity: 1,
        duration: 0.1
    })
    .from('.title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, '-=0.5')
    .from('.hero-text .btn', {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, '-=0.5')
    .to('.hero-image', {
        opacity: 1,
        duration: 0.1
    }, '-=0.5')
    .from('.hero-image img', {
        scale: 1.2,
        opacity: 0,
        duration: 1.2
    }, '-=0.5')
    .from('.brush-stroke', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.8')
    .to('.hero-services', {
        opacity: 1,
        duration: 0.1
    }, '-=0.3')
    .from('.service-icon', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    }, '-=0.3');

// ========================================
// Section Title Animations
// ========================================
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.from(subtitle, {
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
});

// ========================================
// Services Section Animations
// ========================================
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// ========================================
// About Section Animations
// ========================================
const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image');

gsap.from('.about-tag', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    x: -50,
    opacity: 0,
    duration: 0.8
});

gsap.from('.about-title', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
});

gsap.from('.about-description', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.4
});

gsap.from('.about-content .btn', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5
});

gsap.to('.about-image', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    duration: 0.8
});

gsap.from('.about-image img', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    scale: 1.1,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

gsap.from('.brush-stroke-2', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
});

// ========================================
// Stats Counter Animation
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));

    ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        onEnter: () => {
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                ease: 'power2.out',
                snap: { innerHTML: 1 },
                onUpdate: function() {
                    stat.innerHTML = Math.floor(stat.innerHTML);
                }
            });
        },
        once: true
    });
});

gsap.from('.stat', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
});

// ========================================
// Before & After Slider
// ========================================
const beforeAfterContainers = document.querySelectorAll('.before-after-container');

beforeAfterContainers.forEach((container, index) => {
    // Animate on scroll
    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15
    });

    // Before/After Slider Functionality
    const wrapper = container.querySelector('.before-after-wrapper');
    const afterImage = container.querySelector('.after-image');
    const sliderHandle = container.querySelector('.slider-handle');

    let isDragging = false;

    const updateSlider = (e) => {
        if (!isDragging) return;

        const rect = wrapper.getBoundingClientRect();
        let x = e.clientX - rect.left;

        // Clamp x between 0 and wrapper width
        x = Math.max(0, Math.min(x, rect.width));

        const percentage = (x / rect.width) * 100;

        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        sliderHandle.style.left = `${percentage}%`;
    };

    const startDrag = (e) => {
        isDragging = true;
        e.preventDefault();
    };

    const stopDrag = () => {
        isDragging = false;
    };

    sliderHandle.addEventListener('mousedown', startDrag);
    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e);
    });

    document.addEventListener('mousemove', updateSlider);
    document.addEventListener('mouseup', stopDrag);

    // Touch events for mobile
    sliderHandle.addEventListener('touchstart', startDrag);
    wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        updateSlider({ clientX: touch.clientX });
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            updateSlider({ clientX: touch.clientX });
        }
    });
    document.addEventListener('touchend', stopDrag);
});

// ========================================
// Reviews Section
// ========================================
const reviewCards = document.querySelectorAll('.review-card');

reviewCards.forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1
    });
});

// Reviews Slider
const reviewsTrack = document.querySelector('.reviews-track');
const sliderDotsContainer = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentSlide = 0;
let slidesPerView = 3;
let totalSlides = reviewCards.length;

// Update slides per view based on screen size
const updateSlidesPerView = () => {
    if (window.innerWidth <= 768) {
        slidesPerView = 1;
    } else if (window.innerWidth <= 1024) {
        slidesPerView = 2;
    } else {
        slidesPerView = 3;
    }

    // Create dots
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    sliderDotsContainer.innerHTML = '';

    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        sliderDotsContainer.appendChild(dot);
    }

    goToSlide(0);
};

const goToSlide = (index) => {
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    currentSlide = Math.max(0, Math.min(index, totalDots - 1));

    const slideWidth = reviewCards[0].offsetWidth + 30; // card width + gap
    const offset = currentSlide * slidesPerView * slideWidth;

    gsap.to(reviewsTrack, {
        x: -offset,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Update dots
    document.querySelectorAll('.slider-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

// Initialize and handle resize
updateSlidesPerView();
window.addEventListener('resize', updateSlidesPerView);

// Auto-play slider
let autoPlayInterval = setInterval(() => {
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    if (currentSlide < totalDots - 1) {
        goToSlide(currentSlide + 1);
    } else {
        goToSlide(0);
    }
}, 5000);

// Pause on hover
reviewsTrack.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
reviewsTrack.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        const totalDots = Math.ceil(totalSlides / slidesPerView);
        if (currentSlide < totalDots - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    }, 5000);
});

// ========================================
// Contact Section Animations
// ========================================
gsap.to('.contact-form-container', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.to('.contact-info-container', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Animate button
    gsap.to(btn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            btn.textContent = 'Sending...';
        }
    });

    // Form will submit naturally to FormSubmit.co
    // The service will handle the email and redirect back
});

// ========================================
// Trusted By Section Animation
// ========================================
gsap.from('.trusted-label', {
    scrollTrigger: {
        trigger: '.trusted-by',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -30,
    duration: 0.6
});

gsap.from('.logo-text', {
    scrollTrigger: {
        trigger: '.trusted-by',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1
});

// ========================================
// Footer Animation
// ========================================
gsap.from('.footer-col', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
});

// ========================================
// Parallax Effects
// ========================================
gsap.to('.brush-stroke', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 100,
    ease: 'none'
});

gsap.to('.brush-stroke-2', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: 50,
    ease: 'none'
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: offsetTop, autoKill: false },
                ease: 'power3.inOut'
            });
        }
    });
});

// ========================================
// Magnetic Button Effect
// ========================================
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// Service Card Hover Effects
// ========================================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.service-image img'), {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.service-image img'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ========================================
// Text Reveal Animation for Headings
// ========================================
const splitText = (element) => {
    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        element.appendChild(span);
    });

    return element.querySelectorAll('span');
};

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    // Refresh ScrollTrigger after load
    ScrollTrigger.refresh();
});

// ========================================
// Scroll Progress Indicator
// ========================================
const createScrollProgress = () => {
    const progress = document.createElement('div');
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #E5B94E, #C9A043);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progress.style.width = `${scrolled}%`;
    });
};

createScrollProgress();

// ========================================
// Cursor Effects (Optional - Desktop Only)
// ========================================
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #E5B94E;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.15s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .review-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 2,
                opacity: 0.5,
                duration: 0.3
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
        });
    });
}

console.log('Elite Decor website loaded successfully!');
