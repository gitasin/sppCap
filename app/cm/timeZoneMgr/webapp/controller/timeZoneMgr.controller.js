sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
	    "sap/ui/model/FilterType"
	],
	function (Controller, Fragment, JSONModel, Filter, FilterOperator, FilterType) {
		"use strict";

		return Controller.extend("cm.timeZoneMgr.controller.timeZoneMgr", {
			onInit: function () {
                var oModel = new JSONModel({
                    timeZoneCountryInput : ""

                });
                this.getView().setModel(oModel , "timemodel");
            },

            handleValueHelp: function () {
                var sInputValue = this.byId("timeZoneCountryInput").getValue();
                if (!this._oValueHelpDialog) {
                    Fragment.load({
                        name: "cm.timeZoneMgr.view.CountryValueHelpDialog",
                        controller: this
                    }).then(function (oValueHelpDialog) {
                        this._oValueHelpDialog = oValueHelpDialog;
                        this.getView().addDependent(this._oValueHelpDialog);
                        this._oValueHelpDialog.getBinding("items")
						.filter([new Filter("country_code", FilterOperator.Contains, sInputValue)]);
                        this._oValueHelpDialog.open(sInputValue);
                    }.bind(this));
                } else {
                    this._configValueHelpDialog();
                    this._oValueHelpDialog.open();
                }
            },

            _configValueHelpDialog: function () {
                var sInputValue = this.byId("timeZoneCountryInput").getValue(),
                    oModel = this.getView().getModel("timemodel"),
                    aCountry = oModel.setProperty("/timeZoneCountryInput", sInputValue);
                    oModel.setProperty("timeZoneCountryInput", sInputValue);
            },

            handleSearch: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("country_code", FilterOperator.Contains, sValue);
                var oBinding = oEvent.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            },

            handleValueHelpClose: function (oEvent) {
                var vInput = oEvent.getParameters().selectedItem;
                if (!vInput) {
                    return;
                }
                var vInputData = vInput.getCells()[0].mProperties.text;
                this.byId("timeZoneCountryInput").setValue(vInputData);
            },

            onhandleValueHelpClose: function (oEvent) {
                var sDescription,
                    oSelectedItem = oEvent.getParameter("selectedItem");
                oEvent.getSource().getBinding("items").filter([]);
                if (!oSelectedItem) {
                    return;
                }
                sDescription = oSelectedItem.getDescription();
                this.byId("timeZoneCountryInput").setSelectedKey(sDescription);

            },

            onCreate : function () {
          
            var oList = this.byId("table"), 
                oBinding = oList.getBinding("rows"),
				oContext = oBinding.create({
					"tenant_id" : "",
					"timezone_code" : "",
					"timezone_name" : "",
                    "country_code" : "",
                    "gmt_offset" : null,
					"dst_flag" : "",
					"dst_start_month" : null,
                    "dst_start_day" : null,
                    "dst_start_week" : null,
					"dst_start_day_of_week" : null,
					"dst_start_time_rate" : null,
                    "dst_end_month" : null,
                    "dst_end_day" : null,
					"dst_end_week" : null,
					"dst_end_day_of_week" : null,
                    "dst_end_time_rate" : null
                });
                
                  oContext.created().then(function () {
                    oBinding.refresh();                    
                });     

                //this.getView().getModel("appView").setProperty("/usernameEmpty", true);

                oList.getRows().some(function (oItem) {
                    if (oItem.getBindingContext() === oContext) {
                        oItem.focus();
                        oItem.setSelected(true);
                        return true;
                    }
                });
            },

            onSearch : function () {
                var oView = this.getView(),
                    sValue1 = oView.byId("time_zone_code").getValue(),
                    sValue2 = oView.byId("time_zone").getValue(),
                    sValue3 = oView.byId("timeZoneCountryInput").getValue(),
                    oFilter = new Filter("tenant_id", FilterOperator.EQ, "L2100"),
                    oFilter1 = new Filter("timezone_code", FilterOperator.Contains, sValue1),
                    oFilter2 = new Filter("timezone_name", FilterOperator.Contains, sValue2),
                    oFilter3 = new Filter("country_code", FilterOperator.Contains, sValue3);

                oView.byId("table").getBinding("rows").resetChanges();
                oView.byId("table").getBinding("rows").filter([oFilter,oFilter1,oFilter2,oFilter3]);
		    }   
		});
	});
