// Initialize AOS
AOS.init({
    duration: 1000, // Default animation duration
    offset: 120, // Default offset
    easing: 'ease-in-out', // Default easing
    once: true, // Animations happen only once
});

// Add hover animations to category cards
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.05)';
    });
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'scale(1)';
    });
});

// Add bounce animation to buttons on click
document.querySelectorAll('.category button').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add('animate__animated', 'animate__bounce');

        button.addEventListener('animationend', () => {
            button.classList.remove('animate__animated', 'animate__bounce');
        });
    });
});