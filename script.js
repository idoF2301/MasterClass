window.onload = function() {
    const hero = document.querySelector('.hero h1');
    hero.classList.add('fade-in');
};
function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu');
    menu.classList.toggle('active');
}

// Adjust font size using the slider
function adjustFontSize(size) {
    document.body.style.fontSize = size + 'em';

    // Save preference to local storage
    localStorage.setItem('fontSize', size);
}

// Toggle high contrast mode
function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');
    
    // Save preference to local storage
    const isHighContrast = body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// Initialize settings on page load
window.onload = function() {
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const fontSize = localStorage.getItem('fontSize') || '1'; // Default to 1em

    if (highContrast) {
        document.body.classList.add('high-contrast');
    }

    document.body.style.fontSize = fontSize + 'em'; // Set the initial font size
}
