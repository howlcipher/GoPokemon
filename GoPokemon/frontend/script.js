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
    const detailSprite = document.getElementById('detail-sprite');

    const concepts = [
        {
            title: "001 Variables",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png", // Pikachu
            code: `// Declaring variables in Go
// 1. Declare without value (type string)
var pokeball string

// 2. Declare with value (type inferred)
var pokemon = "Psyduck"

// 3. Declare with type and value
var Pikachu string = "Pikachu"

// 4. Short declaration (inside func only)
Jolteon := "Jolteon"`
        },
        {
            title: "002 Operators",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/68.png", // Machamp
            code: `// Basic types and operators
candy := 6
var potion = 9
var xSpeed int = 3

// Slices
badges := []int{1, 2, 3}
var pokedex = []string{"charmander", "squirtle", "bulbasaur"}`
        },
        {
            title: "003 Control Flow",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/65.png", // Alakazam
            code: `// Conditionals
if HP < 10 {
    usePotion()
} else if HP < 50 {
    useSuperPotion()
} else {
    attack()
}

// Loops
for i := 0; i < 3; i++ {
    throwPokeball()
}`
        },
        {
            title: "004 Functions",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/6.png", // Charizard
            code: `// Functions and Methods
type fireStyle interface {
    ember()
}

func (p fire) ember() {
    if p.fireMoves {
        fmt.Println(p.name, "used ember")
    }
}

// Call function
declareInFunc()`
        },
        {
            title: "005 Types",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/137.png", // Porygon
            code: `// Custom Types
type Pokemon struct {
    Name string
    HP   int
    Type string
}

func main() {
    p := Pokemon{Name: "Porygon", HP: 65, Type: "Normal"}
    fmt.Println(p.Name, p.HP)
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
            if (concept.sprite) {
                detailSprite.src = concept.sprite;
                detailSprite.style.display = 'inline-block';
            } else {
                detailSprite.style.display = 'none';
            }
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
