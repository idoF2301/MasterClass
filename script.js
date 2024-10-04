window.onload = function() {
    const hero = document.querySelector('.hero h1');
    hero.classList.add('fade-in');
};
    function toggleAccessibilityMenu() {
        const menu = document.getElementById('accessibility-menu');
        menu.classList.toggle('active');
    }

    function toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
    }

    function toggleLargerText() {
        document.body.classList.toggle('larger-text');
    }
    function toggleBiggerCursor() {
        document.body.classList.toggle('bigger-cursor');
    }
    window.onload = function() {
        const loadingScreen = document.getElementById('loading-screen');

        // Show loading screen before page unload
        window.addEventListener('beforeunload', function() {
            loadingScreen.classList.add('active');
        });
    };