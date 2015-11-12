'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var plateau = new Engine();
PalettoTestCase.prototype.testHistoire1 = function () {
    assertTrue(plateau.initPlateau());
};

PalettoTestCase.prototype.testHistoire2 = function () {
    assertTrue(plateau.selectBille("jaune"));
};