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

PalettoTestCase.prototype.testHistoire6 = function () {
    plateau.initPlateau();
    plateau.verifPieceAutorise("a1");
    assertTrue(plateau.selectPiece("a1", "joueur1") == "noir");
    plateau.verifPieceAutorise("f6");
    assertTrue(plateau.selectPiece("f6", "joueur1") == "noir");

    plateau.verifPieceAutorise("b1");
    assertTrue(plateau.selectPiece("b1", "joueur2") == "vert");
    plateau.verifPieceAutorise("e6");
    assertTrue(plateau.selectPiece("e6", "joueur2") == "vert");
    plateau.verifPieceAutorise("f5");
    assertTrue(plateau.selectPiece("f5", "joueur2") == "vert");

    plateau.verifPieceAutorise("a2");
    assertTrue(plateau.selectPiece("a2", "joueur1") == "jaune");
    plateau.verifPieceAutorise("a6");
    assertTrue(plateau.selectPiece("a6", "joueur1") == "jaune");

    plateau.verifPieceAutorise("a3");
    assertTrue(plateau.selectPiece("a3", "joueur2") == "bleu");

    plateau.verifPieceAutorise("a5");
    assertTrue(plateau.selectPiece("a5", "joueur1") == "blanc");
    plateau.verifPieceAutorise("f4");
    assertTrue(plateau.selectPiece("f4", "joueur1") == "blanc");
    plateau.verifPieceAutorise("f1");
    assertTrue(plateau.selectPiece("f1", "joueur1") == "blanc");
    plateau.verifPieceAutorise("c1");
    assertTrue(plateau.selectPiece("c1", "joueur1") == "blanc");

    plateau.verifPieceAutorise("e1");
    assertTrue(plateau.selectPiece("e1", "joueur2") == "rouge");
    plateau.verifPieceAutorise("f3");
    assertTrue(plateau.selectPiece("f3", "joueur2") == "rouge");
    plateau.verifPieceAutorise("d6");
    assertTrue(plateau.selectPiece("d6", "joueur2") == "rouge");
    plateau.verifPieceAutorise("a4");
    assertTrue(plateau.selectPiece("a4", "joueur2") == "rouge");

    plateau.verifPieceAutorise("d3");
    assertTrue(plateau.selectPiece("d1", "joueur1") == "bleu");
    plateau.verifPieceAutorise("f2");
    assertTrue(plateau.selectPiece("f2", "joueur1") == "bleu");
    plateau.verifPieceAutorise("b6");
    assertTrue(plateau.selectPiece("b6", "joueur1") == "bleu");

    plateau.verifPieceAutorise("b3");
    assertTrue(plateau.selectPiece("b3", "joueur2") == "jaune");
    plateau.verifPieceAutorise("e2");
    assertTrue(plateau.selectPiece("e2", "joueur2") == "jaune");
    plateau.verifPieceAutorise("e5");
    assertTrue(plateau.selectPiece("e5", "joueur2") == "jaune");

    plateau.verifPieceAutorise("b4");
    assertTrue(plateau.selectPiece("b4", "joueur1") == "noir");
    plateau.verifPieceAutorise("c6");
    assertTrue(plateau.selectPiece("c6", "joueur1") == "noir");
    plateau.verifPieceAutorise("d5");
    assertTrue(plateau.selectPiece("d5", "joueur1") == "noir");
    plateau.verifPieceAutorise("e3");
    assertTrue(plateau.selectPiece("e3", "joueur1") == "noir");
    assertTrue(plateau.verifGagner() == "joueur1");
};