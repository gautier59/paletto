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

    this.selectPieceCoin = function (color) {
        if (plateau[0][0] == color || plateau[0][5] == color || plateau[5][0] == color || plateau[5][5] == color) {
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
        } else {
            joueur2[y][x] = couleur;
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
};
