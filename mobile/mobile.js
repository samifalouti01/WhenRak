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

const menuBurger = document.getElementById('menu-burger');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

// Function to open the navbar
function openNavbar() {
    navbar.classList.add('show');
    overlay.classList.add('show');
}

// Function to close the navbar
function closeNavbar() {
    navbar.classList.remove('show');
    overlay.classList.remove('show');
}

// Toggle navbar on burger menu click
menuBurger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from triggering on the overlay
    if (!navbar.classList.contains('show')) {
        openNavbar();
    }
});

// Close navbar when clicking outside or on the overlay
overlay.addEventListener('click', closeNavbar);

// Prevent closing when clicking inside the navbar
navbar.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align to the top of the section
            });
        }
        
        // Optional: Close the navbar after clicking a link
        document.getElementById('navbar').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
    });
});
