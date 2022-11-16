const gba = document.getElementById("gba");
const screen = document.getElementById("screen");


function loadMap(id) {
    console.log("Load Map :", id);
    for (let map of screen.children) {
        map.classList.toggle("hidden", +map.id !== id);
    }
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

const rescalePx = (px, factor) => `${+px.replace("px", "") * factor}px`; 

function responsiveScreen() {
    console.log("Change width screen");
    const style = getComputedStyle(gba);
    screen.style.width = rescalePx(style.width, 0.45);
    screen.style.height = rescalePx(style.height, 0.55);
}

window.onresize = responsiveScreen;
responsiveScreen(); // Init default size