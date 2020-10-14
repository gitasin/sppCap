/*global QUnit*/

sap.ui.define([
	"xx/sampleGrpMgr/controller/SampleGrpMgr.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SampleGrpMgr Controller");

	QUnit.test("I should test the SampleGrpMgr controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
