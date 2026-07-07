document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const mascot = document.getElementById('mascot');

    // Constants
    const THEME_STORAGE_KEY = 'theme';
    const THEME_LIGHT = 'light';
    const THEME_DARK = 'dark';
    const DATA_THEME_ATTR = 'data-theme';
    
    const POKE_API_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/';
    const STARTER_POKEMON_IDS = [4, 1, 7, 25]; // Charmander, Bulbasaur, Squirtle, Pikachu

    // State
    let currentSpriteIndex = 0;
    const sprites = STARTER_POKEMON_IDS.map(id => `${POKE_API_BASE_URL}${id}.png`);

    // Initialization
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || THEME_LIGHT;
        htmlElement.setAttribute(DATA_THEME_ATTR, savedTheme);
    }

    // Event Handlers
    function handleThemeToggle() {
        const currentTheme = htmlElement.getAttribute(DATA_THEME_ATTR);
        const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
        htmlElement.setAttribute(DATA_THEME_ATTR, newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    function handleMascotClick() {
        currentSpriteIndex = (currentSpriteIndex + 1) % sprites.length;
        mascot.src = sprites[currentSpriteIndex];
        
        // Simple bounce animation
        mascot.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            mascot.style.transform = 'translateY(0)';
        }, 150);
    }

    // Event Listeners
    themeToggle.addEventListener('click', handleThemeToggle);
    mascot.addEventListener('click', handleMascotClick);

    // Boot
    initTheme();
    mascot.src = sprites[currentSpriteIndex];
});
