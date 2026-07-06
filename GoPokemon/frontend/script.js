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

    const genSpriteUrl = () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/${Math.floor(Math.random() * 151) + 1}.png`;

    const concepts = [
        {
            title: "Variables: Declaration",
            sprite: genSpriteUrl(),
            code: `// Declaring variables in Go
var pokeball string
var pokemon = "Psyduck"
var Pikachu string = "Pikachu"
Jolteon := "Jolteon" // Inside func`
        },
        {
            title: "Variables: Type",
            sprite: genSpriteUrl(),
            code: `// Basic types in Go
var level int = 5
var isCaught bool = true
var height float64 = 0.4
var name string = "Pikachu"`
        },
        {
            title: "Variables: String",
            sprite: genSpriteUrl(),
            code: `// String operations
trainer := "Ash"
region := "Kanto"
intro := "My name is " + trainer
fmt.Println(intro + " from " + region)`
        },
        {
            title: "Variables: Int",
            sprite: genSpriteUrl(),
            code: `// Integer math
var hp int = 100
var damage int = 15
hp = hp - damage
fmt.Println("Remaining HP:", hp)`
        },
        {
            title: "Variables: Slice",
            sprite: genSpriteUrl(),
            code: `// Slices (Dynamic Arrays)
pokedex := []string{"Pikachu", "Ivysaur", "Ponyta"}
pokedex = append(pokedex, "Hitmonchan")

fmt.Println("Predefined:", pokedex)`
        },
        {
            title: "Variables: Map",
            sprite: genSpriteUrl(),
            code: `// Maps (Key-Value pairs)
pokeStats := make(map[string]int)
pokeStats["Attack"] = 55
pokeStats["Defense"] = 40

fmt.Println("Pikachu Attack:", pokeStats["Attack"])`
        },
        {
            title: "Variables: Struct",
            sprite: genSpriteUrl(),
            code: `// Structs (Custom Types)
type Pokemon struct {
    Name string
    HP   int
    Type string
}

p := Pokemon{Name: "Porygon", HP: 65, Type: "Normal"}
fmt.Println(p.Name, p.HP)`
        },
        {
            title: "Operators",
            sprite: genSpriteUrl(),
            code: `// Operators
candy := 6
potion := 9
totalItems := candy + potion
hasEnough := candy >= 5

fmt.Println(totalItems, hasEnough)`
        },
        {
            title: "Control Flow: Conditionals",
            sprite: genSpriteUrl(),
            code: `// Conditionals
if HP < 10 {
    usePotion()
} else if HP < 50 {
    useSuperPotion()
} else {
    attack()
}`
        },
        {
            title: "Control Flow: Loops",
            sprite: genSpriteUrl(),
            code: `// For Loops
for i := 0; i < 3; i++ {
    throwPokeball()
}

// Ranging over a slice
for index, p := range pokedex {
    fmt.Println(index, p)
}`
        },
        {
            title: "Functions & Interfaces",
            sprite: genSpriteUrl(),
            code: `// Functions and Interfaces
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

    let currentScreen = 'boot'; // boot, main, pokedex, detail
    let mainSelectedIndex = 1; // 0: Source, 1: Explore
    let pokedexSelectedIndex = 0; // 0 to concepts.length - 1

    const updateSelection = () => {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
        if (currentScreen === 'main') {
            const btns = [document.getElementById('source-btn'), document.getElementById('explore-btn')];
            if (btns[mainSelectedIndex]) btns[mainSelectedIndex].classList.add('selected');
        } else if (currentScreen === 'pokedex') {
            const items = conceptList.querySelectorAll('li');
            if (items[pokedexSelectedIndex]) {
                items[pokedexSelectedIndex].classList.add('selected');
                items[pokedexSelectedIndex].scrollIntoView({ block: 'nearest' });
            }
        }
    };

    function switchScreen(newScreen) {
        currentScreen = newScreen;
        if (document.getElementById('boot-screen')) document.getElementById('boot-screen').style.display = newScreen === 'boot' ? 'flex' : 'none';
        if (mainScreen) mainScreen.style.display = newScreen === 'main' ? 'block' : 'none';
        if (pokedexScreen) pokedexScreen.style.display = newScreen === 'pokedex' ? 'block' : 'none';
        if (detailScreen) detailScreen.style.display = newScreen === 'detail' ? 'block' : 'none';
        updateSelection();
    }

    // Play boot animation
    setTimeout(() => {
        if (currentScreen === 'boot') {
            switchScreen('main');
        }
    }, 2200); // Wait 2.2s for animation to complete

    // Populate Concept List
    concepts.forEach((concept, index) => {
        const li = document.createElement('li');
        li.textContent = concept.title;
        li.addEventListener('click', () => {
            pokedexSelectedIndex = index;
            detailTitle.textContent = concept.title;
            const codeContainer = document.getElementById('detail-code');
            codeContainer.textContent = concept.code;
            codeContainer.scrollTop = 0; // reset scroll
            
            if (concept.sprite) {
                detailSprite.src = concept.sprite;
                detailSprite.style.display = 'inline-block';
            } else {
                detailSprite.style.display = 'none';
            }
            switchScreen('detail');
        });
        conceptList.appendChild(li);
    });

    if (exploreBtn) exploreBtn.addEventListener('click', () => switchScreen('pokedex'));
    if (backToMainBtn) backToMainBtn.addEventListener('click', () => switchScreen('main'));
    if (backToPokedexBtn) backToPokedexBtn.addEventListener('click', () => switchScreen('pokedex'));

    // Controller Logic
    const handleUp = () => {
        if (currentScreen === 'main') {
            mainSelectedIndex = Math.max(0, mainSelectedIndex - 1);
            updateSelection();
        } else if (currentScreen === 'pokedex') {
            pokedexSelectedIndex = Math.max(0, pokedexSelectedIndex - 1);
            updateSelection();
        } else if (currentScreen === 'detail') {
            document.getElementById('detail-code').scrollTop -= 20;
        }
    };

    const handleDown = () => {
        if (currentScreen === 'main') {
            mainSelectedIndex = Math.min(1, mainSelectedIndex + 1);
            updateSelection();
        } else if (currentScreen === 'pokedex') {
            pokedexSelectedIndex = Math.min(concepts.length - 1, pokedexSelectedIndex + 1);
            updateSelection();
        } else if (currentScreen === 'detail') {
            document.getElementById('detail-code').scrollTop += 20;
        }
    };

    const handleA = () => {
        if (currentScreen === 'main') {
            if (mainSelectedIndex === 0) document.getElementById('source-btn').click();
            else exploreBtn.click();
        } else if (currentScreen === 'pokedex') {
            const items = conceptList.querySelectorAll('li');
            if (items[pokedexSelectedIndex]) items[pokedexSelectedIndex].click();
        }
    };

    const handleB = () => {
        if (currentScreen === 'pokedex') backToMainBtn.click();
        else if (currentScreen === 'detail') backToPokedexBtn.click();
    };

    const handleStart = () => {
        if (currentScreen === 'main') exploreBtn.click();
    };

    const handleSelect = () => {
        themeToggleBtn.click();
    };

    // Attach to visual buttons
    document.querySelector('.d-pad-btn.up').addEventListener('click', handleUp);
    document.querySelector('.d-pad-btn.down').addEventListener('click', handleDown);
    document.querySelector('.action-btn.a-btn').addEventListener('click', handleA);
    document.querySelector('.action-btn.b-btn').addEventListener('click', handleB);
    document.querySelector('.sys-btn.start-btn').addEventListener('click', handleStart);
    document.querySelector('.sys-btn.select-btn').addEventListener('click', handleSelect);

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') { e.preventDefault(); handleUp(); }
        if (e.key === 'ArrowDown') { e.preventDefault(); handleDown(); }
        if (e.key.toLowerCase() === 'z' || e.key === 'Enter') handleA();
        if (e.key.toLowerCase() === 'x' || e.key === 'Backspace' || e.key === 'Escape') handleB();
        if (e.key === 'Shift') handleSelect();
    });

    // Initialize Selection
    updateSelection();
});
