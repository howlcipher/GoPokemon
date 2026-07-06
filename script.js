document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('gopokemon-theme') || 'light';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            rootElement.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
            localStorage.setItem('gopokemon-theme', 'dark');
        } else {
            rootElement.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('gopokemon-theme', 'light');
        }
    }

    // Button interactiveness (optional micro-animations handled in CSS, but we can add sound or console logs)
    const buttons = document.querySelectorAll('.action-btn, .sys-btn, .d-pad-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            // Can add a small click sound here if desired
        });
    });

    const exploreBtn = document.getElementById('explore-btn');
    const backToMainBtn = document.getElementById('back-to-main');
    const backToPokedexBtn = document.getElementById('back-to-pokedex');
    
    const mainScreen = document.getElementById('main-screen');
    const pokedexScreen = document.getElementById('pokedex-screen');
    const detailScreen = document.getElementById('detail-screen');
    
    const conceptList = document.getElementById('concept-list');
    const detailTitle = document.getElementById('detail-title');
    const detailCode = document.getElementById('detail-code');

    const concepts = [
        {
            title: "001 Variables",
            code: `// Declaring variables in Go
var pokeball string
var pokemon = "Psyduck"
var Pikachu string = "Pikachu"
Jolteon := "Jolteon" // inside func`
        },
        {
            title: "002 Operators",
            code: `// Basic types and operators
candy := 6
var potion = 9
var xSpeed int = 3
badges := []int{1, 2, 3}`
        },
        {
            title: "003 Control Flow",
            code: `// Conditionals and Loops
if HP < 10 {
    usePotion()
}
for i := 0; i < 3; i++ {
    throwPokeball()
}`
        },
        {
            title: "004 Functions",
            code: `// Functions and Methods
type fireStyle interface {
    ember()
}
func (p fire) ember() {
    if p.fireMoves {
        fmt.Println(p.name, "used ember")
    }
}`
        }
    ];

    // Populate Concept List
    concepts.forEach((concept, index) => {
        const li = document.createElement('li');
        li.textContent = concept.title;
        li.addEventListener('click', () => {
            detailTitle.textContent = concept.title;
            detailCode.textContent = concept.code;
            pokedexScreen.style.display = 'none';
            detailScreen.style.display = 'block';
        });
        conceptList.appendChild(li);
    });

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            mainScreen.style.display = 'none';
            pokedexScreen.style.display = 'block';
        });
    }

    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', () => {
            pokedexScreen.style.display = 'none';
            mainScreen.style.display = 'block';
        });
    }

    if (backToPokedexBtn) {
        backToPokedexBtn.addEventListener('click', () => {
            detailScreen.style.display = 'none';
            pokedexScreen.style.display = 'block';
        });
    }
});
