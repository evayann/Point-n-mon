const gba = document.getElementById("gba");
const screen = document.getElementById("screen");
const battle = document.getElementById("battle");

let previousScreen = 0;
// Loading

function loadMap(id) {
    console.log("Load Map :", id);
    for (let map of screen.children) {
        if (! map.classList.contains("hidden"))
            previousScreen = +map.id;
        map.classList.toggle("hidden", +map.id !== id);
    }
}

function loadBattle() {
    console.log("Load Battle");
    loadMap(-1);
    battle.classList.remove("hidden");
}

function closeBattle() {
    battle.classList.add("hidden");
    const lastPrevious = previousScreen;
    loadMap(lastPrevious);
    previousScreen = lastPrevious;
}

function openDialog(content) {
    const dialogText = document.getElementById("text-dialog");
    dialogText.innerHTML = content;

    const dialog = document.getElementById("dialog");
    dialog.classList.remove("hidden");
}

function closeDialog() {
    const dialog = document.getElementById("dialog");
    dialog.classList.add("hidden");
}

// Screen Dimension 

const rescalePx = (px, factor) => `${+px.replace("px", "") * factor}px`; 

function responsiveScreen() {
    console.log("Change width screen");
    const style = getComputedStyle(gba);
    screen.style.width = rescalePx(style.width, 0.45);
    screen.style.height = rescalePx(style.height, 0.55);
}

window.onresize = responsiveScreen;
responsiveScreen(); // Init default size