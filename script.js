document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if(slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); 
}
if(document.querySelector('.slider')) {
    showSlides();
}

const modal = document.getElementById('contactModal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

if(btn) {
    btn.onclick = function() {
        modal.style.display = 'block';
    };
}

if(span) {
    span.onclick = function() {
        modal.style.display = 'none';
    };
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
};
