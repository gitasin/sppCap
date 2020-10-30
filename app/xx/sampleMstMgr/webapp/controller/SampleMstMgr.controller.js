sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("xx.sampleMstMgr.controller.SampleMstMgr", {
			onInit: function () {

            },

            onBtn : function() {
                alert('SampleMstMgr');
            }
            
		});
	});
