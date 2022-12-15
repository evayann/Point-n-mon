/* Fonctionnalité : 1 */
// Récupérer l'objet html contenant les 2 pokémons, choisi en 1=
function loadPokemonChoice() {
    const pokemonChoiceScreen = document.getElementById("pkm-choice");
    pokemonChoiceScreen.classList.remove("hidden");
}

/* Fonctionnalité : 6 */
// Appeller la fonction de nettoage de map
function shutdown() {
    unloadMap();
}