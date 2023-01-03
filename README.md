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

## Contenu du projet

Ce projet ce décompose en 2 parties : 

- Partie théorique : Cours sur le web
- Partie pratique : Développement d'un projet fun

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

Cette dernière se situe dans la page tuto.html. Elle regroupe un ensemble de ressources qui vont permettre à l'élève les connaissances suivantes : 
- L'HTML.
- Le CSS et plus particulièrement le style position absolute.
- Le JS ainsi que la méthode getElementById.

### Partie pratique

Cette dernière est découpé en 6 petits exercices à réaliser pour implémenter l'ensemble des fonctionnalités de Point'N'Mon.

Elle se compose de : 

- Démarrer la console à l'aide d'une fonction JS.
- Placer Sacha à l'aide d'un bouton HTML.
- Se battre contre un adversaire à l'aide de style CSS.
- Réparer l'interface de combat à l'aide de style CSS.
- Changer de cartes à l'aide de bouton HTML.
- Eteindre la console à l'aide d'une fonction JS.

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
