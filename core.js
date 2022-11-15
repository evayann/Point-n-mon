function loadMap(id) {
    console.log("Load Map :", id);
    const screen = document.getElementById("screen");
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