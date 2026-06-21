window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = (windowScroll / height) * 100;
    
    if(progressBar) {
        progressBar.style.width = scrolledPercentage + '%';
    }

    if (windowScroll > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active Section Link Tracker
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (windowScroll >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active');
        }
    });
});

// Mobile Layout Drawer Trigger Elements
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });
}