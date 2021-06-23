ABOUT GAME

Le code est organisé autour de différents composants (objet) les principaux étant le "jeu" (fichier game.js), et les joueurs (fichier player.js et computer.js), chacun des objets sont accessibles dans le scope global.

Au chargement de la page on invoque la méthode init de l'objet game. Ce dernier contient et gère "l'état" du jeu (qui sont les adversaires, à quelle phase de jeu on en est, à qui est-ce le tour de jouer, etc...) et permet (appel la fonction), ou ne permet pas (ne fait rien) les actions des différents joueurs.

Un joueur est représenté par un objet player (fichier player.js), et contient des méthodes inhérentes à "l'état" du joueur (sa flotte, la position de chaque bateau, les tirs effectués, etc...). L'objet computer (fichier computer.js), est "dérivé" de l'objet player, grace à la librairie "_" (prononcez "lodash"), et sa méthode "assign".

L'objet utils (fichier utils.js), est un objet contenant des méthodes utilitaires et transverses.

L'objet shipFactory (fichier shipFactory.js) est un objet qui simplifie la création des bateaux.

=========================================================================

Dans ce projet il est possible de jouer contre une IA

Le but du jeu est de trouver les bateaux cachés par l'IA.

1ère phase : Placement des bateaux, la position de base est horizontale un click droit pour passer en vertical.

2ème phase : Commencement de la partie cliquer sur une case pour reveler ce qu'elle cache, une partie d'un bateau ou de l'eau la case devient grise si vous l'avez manquer et rouge si vous avez touché.

3ème phase : La victoire est atteinte lorsque tout les bateaux ont été révélées et une alerte apparaitra avec le gagnant.
