const gba = document.getElementById("gba");
const screen = document.getElementById("screen");
const battle = document.getElementById("battle");

const myPkm = document.getElementById("my-pkm");
const attackChoice = document.getElementById("attack-choice");
const attackMsg = document.getElementById("attack-msg");

const hide = "hidden";

let previousScreen = 0;

// Loading
function loadMap(id) {
    console.log("Load Map :", id);
    for (let map of screen.children) {
        if (! map.classList.contains(hide))
            previousScreen = +map.id;
        map.classList.toggle(hide, +map.id !== id);
    }
}

function unloadMap() {
    loadMap(-1);
}

function loadBattle() {
    console.log("Load Battle");
    
    const [myPkm, opponentPkm] = loadPokemon();
    loadPkmName(false, myPkm.name);
    loadPkmName(true, opponentPkm.name);
    loadPkmImg(false, myPkm.name);
    loadPkmImg(true, opponentPkm.name);
    loadAttacks(myPkm.attacks);

    unloadMap();
    battle.classList.remove(hide);
}

function loadPkmName(isOpponent, pkmName) {
    const pkmNameArea = document.getElementById(isOpponent ? "opponent-pkm-name" : "my-pkm-name");
    pkmNameArea.innerHTML = pkmName; 
}

function loadPkmImg(isOpponent, pkmName) {
    const imgPkm = document.getElementById(isOpponent ? "opponent-pkm" : "my-pkm");
    imgPkm.src = `./assets/pokemons/${pkmName}${isOpponent ? 'Front' : 'Back'}.png`;
}

function loadAttacks(attacks) {
    for (let [i, attack] of attacks.entries()) {
        const attackArea = document.getElementById(`attack-${i + 1}`);
        attackArea.innerHTML = attack;
    }
}

function attack() {
    myPkm.classList.add("attack-animation");
    attackChoice.classList.add("dnone");
    attackMsg.classList.remove("dnone");
    attackMsg.innerHTML = `Incroyable ! Tu lui as retiré ${parseInt(Math.random() * 10)} points de vie ! Tu vas pouvoir l'achevé bientôt !`;
}

myPkm.addEventListener("animationiteration", () => {
    myPkm.classList.remove("attack-animation");
    attackChoice.classList.remove("dnone");
    attackMsg.classList.add("dnone");
});

function closeBattle() {
    battle.classList.add(hide);
    const lastPrevious = previousScreen;
    loadMap(lastPrevious);
    previousScreen = lastPrevious;
}

function openDialog(content) {
    const dialogText = document.getElementById("text-dialog");
    dialogText.innerHTML = content;

    const dialog = document.getElementById("dialog");
    dialog.classList.remove(hide);
}

function closeDialog() {
    const dialog = document.getElementById("dialog");
    dialog.classList.add(hide);
}

// Screen Dimension 

const rescalePx = (px, factor) => `${+px.replace("px", "") * factor}px`; 

function responsiveScreen() {
    console.log("Change width screen");
    let style = getComputedStyle(gba)
    console.log("Gba size : ", style.width, "x", style.height);
    screen.style.width = rescalePx(style.width, 0.455);
    screen.style.height = rescalePx(style.height, 0.55);
}

window.onresize = responsiveScreen;
responsiveScreen(); // Init default size

// Pokemon

class Pokemon {
    constructor(name, attacks) {
        this.name = name;
        this.attacks = attacks;
    }
}

const myPkmKey = "my-pkm";
const yourPkmKey = "your-pkm";

const pikachu = new Pokemon("pikachu", ["Eclair", "Vive-attaque", "Electacle", "Fatal-foudre"]);
const avistar = new Pokemon("avistar", ["Pistolet à O", "Hurlement", "Hydrocanon", "Vive-attaque"]);

function selectPikachu() {
    selectPokemon(pikachu, avistar);
}

function selectAvistar() {
    selectPokemon(avistar, pikachu);
}

function selectPokemon(myPkm, yourPkm) {
    localStorage.setItem(myPkmKey, JSON.stringify(myPkm));
    localStorage.setItem(yourPkmKey, JSON.stringify(yourPkm));
    const pkmSelectScreen = document.getElementById("pkm-choice");
    pkmSelectScreen.classList.add(hide);
    loadMap(0);
}

function loadPokemon() {
    return [
        JSON.parse(localStorage.getItem(myPkmKey) || ""),
        JSON.parse(localStorage.getItem(yourPkmKey) || "")
    ];
}