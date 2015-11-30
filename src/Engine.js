'use strict';

var Engine = function () {
//constante
    const COLOR_BLACK = "noir";
    const COLOR_GREEN = "vert";
    const COLOR_WHITE = "blanc";
    const COLOR_BLUE = "bleu";
    const COLOR_RED = "rouge";
    const COLOR_YELLOW = "jaune";

// private attributes and methods
    var plateau;
    var couleur;
    var nbPieces = 36;
    var nbPieceJoueur1 = 0;
    var joueur1;
    var joueur2;
    var noirJ1 = 0;
    var vertJ1 = 0;
    var blancJ1 = 0;
    var bleuJ1 = 0;
    var rougeJ1 = 0;
    var jauneJ1 = 0;
    var noirJ2 = 0;
    var vertJ2 = 0;
    var blancJ2 = 0;
    var bleuJ2 = 0;
    var rougeJ2 = 0;
    var jauneJ2 = 0;
// public methods
    this.initPlateau = function () {
        this.initJoueur();
        plateau = new Array(6);
        for (var i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(6);
        }

        plateau[0][0] = COLOR_BLACK;
        plateau[0][1] = COLOR_GREEN;
        plateau[0][2] = COLOR_WHITE;
        plateau[0][3] = COLOR_BLUE;
        plateau[0][4] = COLOR_RED;
        plateau[0][5] = COLOR_WHITE;

        plateau[1][0] = COLOR_YELLOW;
        plateau[1][1] = COLOR_WHITE;
        plateau[1][2] = COLOR_GREEN;
        plateau[1][3] = COLOR_RED;
        plateau[1][4] = COLOR_YELLOW;
        plateau[1][5] = COLOR_BLUE;

        plateau[2][0] = COLOR_BLUE;
        plateau[2][1] = COLOR_YELLOW;
        plateau[2][2] = COLOR_BLUE;
        plateau[2][3] = COLOR_WHITE;
        plateau[2][4] = COLOR_BLACK;
        plateau[2][5] = COLOR_RED;

        plateau[3][0] = COLOR_RED;
        plateau[3][1] = COLOR_BLACK;
        plateau[3][2] = COLOR_RED;
        plateau[3][3] = COLOR_GREEN;
        plateau[3][4] = COLOR_BLUE;
        plateau[3][5] = COLOR_WHITE;

        plateau[4][0] = COLOR_WHITE;
        plateau[4][1] = COLOR_GREEN;
        plateau[4][2] = COLOR_YELLOW;
        plateau[4][3] = COLOR_BLACK;
        plateau[4][4] = COLOR_YELLOW;
        plateau[4][5] = COLOR_GREEN;

        plateau[5][0] = COLOR_YELLOW;
        plateau[5][1] = COLOR_BLUE;
        plateau[5][2] = COLOR_BLACK;
        plateau[5][3] = COLOR_RED;
        plateau[5][4] = COLOR_GREEN;
        plateau[5][5] = COLOR_BLACK;

        for (var i = 0; i < plateau.length; i++) {
            for (var j = 0; j < plateau.length; j++) {
                if (plateau[i][j] == undefined) {
                    return false;
                }
                if (i != 0 && plateau[i][j] == plateau[i - 1][j]) {
                    return false;
                }
                if (i != plateau.length - 1 && plateau[i][j] == plateau[i + 1][j]) {
                    return false;
                }
                if (j != 0 && plateau[i][j] == plateau[i][j - 1]) {
                    return false;
                }
                if (j != plateau.length - 1 && plateau[i][j] == plateau[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    };

    this.selectPieceCoin = function(color) {
        if(plateau[0][0] == color || plateau[0][5] == color || plateau[5][0] == color || plateau[5][5] == color) {
            return true;
        }
        return false;
    };

    this.selectPiece = function (positionPiece, joueur) {
        var x = positionPiece.charCodeAt(0) - 97;
        var y = positionPiece.charCodeAt(1) - 49;
        couleur = plateau[y][x];
        plateau[y][x] = undefined;
        nbPieces--;
        if (joueur == "joueur1") {
            joueur1[y][x] = couleur;
            if(couleur == COLOR_BLACK) {
                noirJ1++;
            }else if(couleur == COLOR_GREEN) {
                vertJ1++;
            }else if(couleur == COLOR_WHITE){
                blancJ1++;
            }else if(couleur == COLOR_BLUE) {
                bleuJ1++;
            }else if(couleur == COLOR_RED) {
                rougeJ1++;
            }else if(couleur == COLOR_YELLOW) {
                jauneJ1++;
            }
        } else {
            joueur2[y][x] = couleur
            if(couleur == COLOR_BLACK) {
                noirJ2++;
            }else if(couleur == COLOR_GREEN) {
                vertJ2++;
            }else if(couleur == COLOR_WHITE){
                blancJ2++;
            }else if(couleur == COLOR_BLUE) {
                bleuJ2++;
            }else if(couleur == COLOR_RED) {
                rougeJ2++;
            }else if(couleur == COLOR_YELLOW) {
                jauneJ2++;
            }
        }
        return couleur;
    };

    this.getPieces = function () {
        return nbPieces;
    };

    this.getNbPieceJoueur1 = function() {
        for (var i = 0; i < joueur1.length; i++) {
            for (var j = 0; j < joueur1.length; j++) {
                if (joueur1[i][j] != undefined) {
                    nbPieceJoueur1++;
                }
            }
        }
        return nbPieceJoueur1;
    };

    this.initJoueur = function() {
        joueur1 = new Array(6);
        for (var i = 0; i < joueur1.length; i++) {
            joueur1[i] = new Array(6);
        }
        joueur2 = new Array(6);
        for (var i = 0; i < joueur2.length; i++) {
            joueur2[i] = new Array(6);
        }
    }

    this.verifierVoisins = function(position){
        var cpt = 0;
        var y = position.charCodeAt(1) - 49;
        var x = position.charCodeAt(0) - 97;
        if(x != 0 && plateau[x-1][y] != "") {
            cpt++;
        }
        if(x != plateau.length - 1 && plateau[x+1][y] != "") {
            cpt++;
        }
        if(y != 0 && plateau[x][y-1] != "") {
            cpt++;
        }
        if(y != plateau.length - 1 && plateau[x][y+1] != "") {
            cpt++;
        }
        return cpt <= 2;
    };

    /*this.verifPieceAutorise = function(position){
        var plateau2 = new Array(6);
        plateau2[0] = "d1";
        plateau2[1] = "f1";
        plateau2[2] = "e3";
        plateau2[3] = "a4";
        plateau2[4] = "b5";
        plateau2[5] = "c6";
        for (var i = 0; i < plateau2.length; i++) {
            if(plateau2[i] === position) {
                return true;
            }
        }
        return false;
    }*/

    this.verifGagner = function(){
        if(noirJ1 == 6 || vertJ1 == 6 || blancJ1 == 6 || bleuJ1 == 6 || rougeJ1 == 6 || jauneJ1 == 6) {
            return "joueur1";
        }
        if(noirJ2 == 6 || vertJ2 == 6 || blancJ2 == 6 || bleuJ2 == 6 || rougeJ2 == 6 || jauneJ2 == 6) {
            return "joueur2";
        }
    };

    this.verifPieceAutorise = function(position){
        var y = position.charCodeAt(1) - 49;
        var x = position.charCodeAt(0) - 97;
        if(this.verifierVoisins(position) <=2) {
            if(x !=0 && x != plateau.length - 1 && plateau[x - 1][y] != "" && plateau[x + 1][y] != "") {
                return false;
            }
            if(y !=0 && y != plateau.length - 1 && plateau[x][y - 1] != "" && plateau[x][y + 1] != "") {
                return false;
            }
            if(y !=0 && x != plateau.length - 1 && plateau[x + 1][y] != "" && plateau[x][y - 1] != "" && plateau[x + 1][y - 1] != ""){
                return false;
            }
            if(y != plateau.length -1 && x != plateau.length - 1 && plateau[x + 1][y] != "" && plateau[x][y + 1] != "" && plateau[x + 1][y + 1] != "") {
                return false;
            }
            if(y != plateau.length -1 && x != 0 && plateau[x - 1][y] != "" && plateau[x][y + 1] != "" && plateau[x - 1][y + 1] != "") {
                return false;
            }
            if(y != 0 && x != 0 && plateau[x - 1][y] != "" && plateau[x][y - 1] != "" && plateau[x - 1][y - 1] != "") {
                return false;
            }
            return true;
        }
    }
};
