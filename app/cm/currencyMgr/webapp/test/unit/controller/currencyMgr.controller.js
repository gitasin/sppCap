/*global QUnit*/

sap.ui.define([
	"cm/currencyMgr/controller/currencyMgr.controller"
], function (Controller) {
	"use strict";

	QUnit.module("currencyMgr Controller");

	QUnit.test("I should test the currencyMgr controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
