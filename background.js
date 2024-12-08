
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
        // Toggle active class on the button
        button.classList.toggle('active');
        
        // Get the next sibling (accordion content)
        const content = button.nextElementSibling;
        
        // Toggle the visibility of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});


