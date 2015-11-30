'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var plateau = new Engine();
PalettoTestCase.prototype.testHistoire1 = function () {
    assertTrue(plateau.initPlateau());
};

PalettoTestCase.prototype.testHistoire2 = function () {
    assertTrue(plateau.selectPieceCoin("jaune"));
};

PalettoTestCase.prototype.testHistoire3 = function () {
    assertTrue(plateau.selectPiece("a6","joueur1") == "jaune");
    assertTrue(plateau.getPieces() == 35);
    assertTrue(plateau.getNbPieceJoueur1() == 1)
};

PalettoTestCase.prototype.testHistoire4 = function () {
    assertTrue(plateau.selectPiece("a1", "joueur2") == "noir");
    assertTrue(plateau.verifierVoisins("a1") <=2);
    assertTrue(plateau.selectPiece("f6", "joueur2") == "noir");
    assertTrue(plateau.verifierVoisins("f6"));
};

PalettoTestCase.prototype.testHistoire5 = function () {
    assertTrue(plateau.verifPieceAutorise("c3") == false);
};