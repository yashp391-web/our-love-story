// script.js

// Interactive navigation between tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function showTab(index) {
    contents.forEach(content => content.classList.remove('active')); 
    tabs.forEach(tab => tab.classList.remove('active'));
    contents[index].classList.add('active');
    tabs[index].classList.add('active');
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showTab(index));
});

// Photo gallery functionality
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Smooth animations
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

window.addEventListener('load', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(link.getAttribute('href'));
        });
    });
});

