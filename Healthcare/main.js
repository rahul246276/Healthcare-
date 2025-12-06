// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Navbar scroll effect - Fixed
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Throttle scroll event for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleNavbarScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    handleNavbarScroll();

    // Simple hover effects only - no scroll animations

    // Testimonials Carousel
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.testimonial-slide').length;

    if (testimonialsCarousel && testimonialPrev && testimonialNext) {
        function updateCarousel() {
            testimonialsCarousel.scrollTo({
                left: currentSlide * testimonialsCarousel.offsetWidth,
                behavior: 'smooth'
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        testimonialNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });

        testimonialPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        // Auto-scroll (optional)
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 5000);

        // Touch/swipe support
        let startX = 0;
        let scrollLeft = 0;
        let isDown = false;

        testimonialsCarousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialsCarousel.offsetLeft;
            scrollLeft = testimonialsCarousel.scrollLeft;
        });

        testimonialsCarousel.addEventListener('mouseleave', () => {
            isDown = false;
        });

        testimonialsCarousel.addEventListener('mouseup', () => {
            isDown = false;
        });

        testimonialsCarousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsCarousel.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsCarousel.scrollLeft = scrollLeft - walk;
        });
    }
});

// Appointment form specific validation
function validateAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    if (!form) return;

    const dateInput = form.querySelector('#appointmentDate');
    const timeInput = form.querySelector('#appointmentTime');
    
    if (dateInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success alert-dismissible fade show mt-3';
        successMessage.innerHTML = `
            <strong>Success!</strong> Your appointment request has been submitted. We will contact you shortly to confirm.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        form.appendChild(successMessage);
        form.reset();
        form.classList.remove('was-validated');
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Contact form handler
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (form.checkValidity()) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success alert-dismissible fade show mt-3';
            successMessage.innerHTML = `
                <strong>Thank you!</strong> Your message has been sent. We will get back to you soon.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            
            form.appendChild(successMessage);
            form.reset();
            form.classList.remove('was-validated');
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Newsletter form handler
function validateNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('.newsletter-input').value;
        
        if (email) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success alert-dismissible fade show mt-3';
            successMessage.innerHTML = `
                <strong>Thank you!</strong> You've been successfully subscribed to our newsletter.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            
            this.appendChild(successMessage);
            this.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Initialize form validations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    validateAppointmentForm();
    validateContactForm();
    validateNewsletterForm();
});

