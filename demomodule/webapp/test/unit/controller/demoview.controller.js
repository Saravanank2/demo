/*global QUnit*/

sap.ui.define([
	"ns/demomodule/controller/demoview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("demoview Controller");

	QUnit.test("I should test the demoview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
