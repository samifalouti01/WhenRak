function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// the scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn-mobile');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.querySelectorAll('.footer-links-mobile a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, 
                behavior: 'smooth' 
            });
        }
    });
});

window.addEventListener('load', () => {
    const defaultLink = document.getElementById('default-focus');
    const navLinks = document.querySelectorAll('.nav ul li a');

    if (defaultLink) {
        defaultLink.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            navLinks.forEach(navLink => navLink.classList.remove('active'));

            link.classList.add('active');
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});