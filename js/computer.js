/*jslint browser this */
/*global _, player */

(function (global) {
    "use strict";

    var computer = _.assign({}, player, {
        grid: [],
        tries: [],
        fleet: [],
        game: null,
        play: function () {
            var self = this;
            setTimeout(function () {
                var x = self.randomPos();
                var y = self.randomPos();
                // Etape 8 
                self.game.fire(this, x, y, function (hasSucced) {
                    self.tries[y][x] = hasSucced;
                    if(hasSucced){
                        document.querySelector('.mini-grid').children[y].children[x].style.backgroundColor = '#e60019';      
                    } else {
                        document.querySelector('.mini-grid').children[y].children[x].style.backgroundColor = '#B4B4B4';
                    }

                }); 
            }, 2000);
        },
        isShipOk: function (callback) {
            // var j; // Présent dans le code de base

            var i = 0;
            while(i < 4){
                var axe = this.randomAxe(); // Utilise la méthode plus bas qui choisis l'axe de manière random
                var y = this.randomPos(); // Défini une position Y random
                var x = this.randomPos(); // Défini une position X random

                // Permet de placer le bateau avec la méthode setActiveShipPosition & de passer au suivant
                if(this.game.axe === "Horizontale" && this.setActiveShipPosition(y,x, axe) 
                || this.game.axe === "Verticale" && this.setActiveShipPosition(y,x, axe)) 
                {
                    // Cherche s'il y a encore des bateaux à placer
                    this.activateNextShip();
                    i += 1;
                }

            }
            setTimeout(function () {
                callback();
            }, 500);
            console.table(this.grid);
        },
        // Etape 5 : Placement des bateaux aléatoirement avec Math.random qui va placer aléatoirement are horizontal ou vertical
        randomAxe: function() {
            // Défini un axe random pour le placement des bateaux de l'ordinateur
            var rand = Math.random() * 10;
            if(rand > 4) {
                this.game.axe = 'Horizontale';
            } 
            else {
                this.game.axe = 'Verticale';
            }
        }
    });

    global.computer = computer;

}(this));