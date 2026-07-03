document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const mascot = document.getElementById('mascot');

    // Gen 1 Sprites from PokeAPI
    const sprites = [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/4.png', // Charmander
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png', // Bulbasaur
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/7.png', // Squirtle
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png' // Pikachu
    ];

    let currentSpriteIndex = 0;

    // Theme Toggle Logic
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Animate mascot on click
    mascot.addEventListener('click', () => {
        currentSpriteIndex = (currentSpriteIndex + 1) % sprites.length;
        mascot.src = sprites[currentSpriteIndex];
        
        // Simple bounce animation
        mascot.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            mascot.style.transform = 'translateY(0)';
        }, 150);
    });
});
