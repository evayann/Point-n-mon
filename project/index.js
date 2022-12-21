/* Fonctionnalité : 1 */
// A faire :
// Créer une fonction loadPokemonChoice devant : 
// - Récupérer l'objet html contenant les 2 boutons de choix de pokémons, il possède l'id : pkm-choice
// - Supprimer de ce dernier dans la liste des classes 'classList' à l'aide de la méthode 'remove' la classe 'hidden'.
function loadPokemonChoice() {
    const pokemonChoiceScreen = document.getElementById("pkm-choice");
    pokemonChoiceScreen.classList.remove("hidden");
}

/* Fonctionnalité : 6 */
// A faire :
// Créer une fonction shutdown appellant la fonction de nettoyage unloadMap. 
function shutdown() {
    unloadMap();
}