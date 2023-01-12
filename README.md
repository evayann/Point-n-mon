# Point-n-mon, un projet pour découvrir et apprendre les bases du web

![Point'N'Mon](./assets/point-n-mon.png)

## Mes intentions avec ce projet

- Faire découvrir le développement web
- Le rendre accessible au plus grand nombre
- Avoir un environnement sympatique

## Caractéristique du projet

- Durée : 1 jour
- Niveau : Élève de 3ème / Toute personnes sans base web
- Encadrement : 
  - 1h de discussion avec l'élève, Ice Breaking
  - 2h d'aide lors des phases d'exercices & de projet

## Contenu du projet

Ce projet ce décompose en 2 parties : 

- Partie théorique : Cours sur le web
- Partie pratique : Développement d'un projet

⚠️ Correction de la partie pratique ⚠️
Pour faciliter le partage du projet entre encadrant et élève, 2 branches sont à disposition.  

- La branche **main** (celle-ci), **AVEC** la correction. 
- La branche **exo**, **SANS** la correction.

### Architecture du projet

```js
┐
├ cours
│ ├ pages
│ │ ├ tuto.html    // Les cours théoriques
│ │ └ project.html // Les consignes pour le projet Point'N'Mon 
│ └ index.html     // La page d'accueil presentant le web et le déroulement de la journée
│
└ project       // Le projet Point'N'Mon avec le code
  ├ assets      // Différents assets pour le projet
  ├ js          // L'ensemble des scripts js qui ne sont pas à modifier par l'élève
  ├ styles      // L'ensemble des styles css qui ne sont pas à modifier par l'élève
  ├ styles.css  // Le fichier à modifier pour réaliser le projet sur la partie css    
  ├ index.js    // Le fichier à modifier pour réaliser le projet sur la partie js
  └ index.html  // Le fichier à modifier pour réaliser le projet sur la partie html
```

### Partie théorique

Cette dernière se situe dans la page tuto.html. Elle regroupe un ensemble de ressources réparti entre : 

- Des cours et exercices issues de [tech.io](https://tech.io) pour découvrir l'html, le css et le js.
- Des liens vers de la [documentation MDN](https://developer.mozilla.org/fr/docs/Web) pour apprendre à lire une documentation.

### Partie pratique

Cette dernière est découpé en 6 petits exercices à réaliser pour implémenter l'ensemble des fonctionnalités de Point'N'Mon. Ces exercices amenerons à l'écriture de :

- 2 fonctions javascript
- 5 boutons html
- 2/3 classes css

⚠️ **La solution à tous les exercices est disponible sur cette branche main à l'emplacement de l'exercice.** ⚠️

L'implémentation de ces fonctionnalités est amené à l'aide de l'histoire suivante :

- Pour jouer, démarrerons la console.
- Plaçons Sacha pour dialoguer avec lui.
- Plaçons un adversaire pour lancer un combat de pokémon.
- Réparer l'interface de combat.
- Changer de carte afin de voir de nouvelle contré.
- Pour finir, éteindre la console pour finir la partie.

## Exemple de déroulement de la journée

- 9h00 : Début de journée.
- 9h00 -> 10h30 : Ice breaking, Dialogue avec l'élève ou l'on peut : 
    + Se présenter ainsi que son cursus. Cela permet à l'élève de :
        * Savoir ce qu'il souhaite / pourrait faire.
        * Cerner avec qui il va passer une super journée.
        * Et nous apprendre qui il est et ce qui le passione. 
    + Présenter les différents domaines de l'informatique comme le web, l'applicatif, le hardware, ...
        * Partager des connaissances sur l'informatique
        * Partager sa passion pour l'informatique
        * Interessé l'élève
- 10h30 -> 12h : Monté en compétences en autonomie :
    + Appréhender les différentes technologies du web
    + Retenir comment construire un petit site web
- 14h -> 15h : Fin de monté en compétences.
- 15h -> 17h : Réalisation d'un projet fun :
    + Appliquer les nouvelles compétences
    + Avoir un côté ludique au développement
    + Maintenir l'attention de l'élève 
- 17h : Fin de journée.
