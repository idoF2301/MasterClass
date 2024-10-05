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
        window.addEventListener('beforeunload', function() {
            loadingScreen.classList.add('active');
        });
    };
    function toggleHighContrast() {
        const body = document.body;
        body.classList.toggle('high-contrast');
        
        // Save preference to local storage
        const isHighContrast = body.classList.contains('high-contrast');
        localStorage.setItem('highContrast', isHighContrast);
    }
    
    // Toggle larger text
    function toggleLargerText() {
        const body = document.body;
        body.classList.toggle('larger-text');
        
        // Save preference to local storage
        const isLargerText = body.classList.contains('larger-text');
        localStorage.setItem('largerText', isLargerText);
    }
    
    // Initialize settings on page load
    window.onload = function() {
        const highContrast = localStorage.getItem('highContrast') === 'true';
        const largerText = localStorage.getItem('largerText') === 'true';
    
        if (highContrast) {
            document.body.classList.add('high-contrast');
        }
        if (largerText) {
            document.body.classList.add('larger-text');
        }
    }