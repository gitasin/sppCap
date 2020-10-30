/*global QUnit*/

sap.ui.define([
	"xx/sampleMstMgr/controller/SampleMstMgr.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SampleMstMgr Controller");

	QUnit.test("I should test the SampleMstMgr controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
