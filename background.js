
document.addEventListener('DOMContentLoaded', () => {
    const bgAnimation = document.createElement('div');
    bgAnimation.style.position = 'fixed';
    bgAnimation.style.top = '0';
    bgAnimation.style.left = '0';
    bgAnimation.style.width = '100%';
    bgAnimation.style.height = '100%';
    bgAnimation.style.zIndex = '-1';
    bgAnimation.style.background = 'radial-gradient(circle, rgba(60,60,60,0.8), transparent)';
    bgAnimation.style.animation = 'moveBackground 15s linear infinite';
    document.body.appendChild(bgAnimation);
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

