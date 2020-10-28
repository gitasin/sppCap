sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/ui/core/syncStyleClass",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/MessageToast",
        "sap/m/Dialog",
        "sap/m/DialogType",
        "sap/m/List",
        "sap/m/StandardListItem",
        "sap/m/Button",
        "sap/m/ButtonType",
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Fragment, syncStyleClass, JSONModel, Filter, FilterOperator, MessageToast, Dialog, DialogType) {
		"use strict";

		return Controller.extend("cm.timeZoneMgr.controller.timeZoneMgr", {
			onInit: function () {

                this._oSetModel();


            },

            _oSetModel : function () {
                var oModel = new JSONModel();
                this.getView().setModel(oModel);

                var oMessageManager = sap.ui.getCore().getMessageManager(),
				oMessageModel = oMessageManager.getMessageModel(),
				oMessageModelBinding = oMessageModel.bindList("/", undefined, [],
					new Filter("technical", FilterOperator.EQ, true)),
				oViewModel = new JSONModel({
					busy : false,
					hasUIChanges : false,
					usernameEmpty : true,
					order : 0
				});
                this.getView().setModel(oViewModel, "appView");
                this.getView().setModel(oMessageModel, "message");

                oMessageModelBinding.attachChange(this.onMessageBindingChange, this);
                this._bTechnicalErrors = false;
            },

            onCreate : function () {

                debugger;
          
            var oRows = this.byId("table"), 
                oBinding = oRows.getBinding("rows"),

				// Create a new entry through the table's list binding
				oContext = oBinding.create({
					"tenant_id" : "",
					"timezone_code" : "",
					"timezone_name" : "",
                    "country_code" : "",
                    "gmt_offset" : "",
					"dst_flag" : "",
					"dst_start_month" : "",
                    "dst_start_day" : "",
                    "dst_start_week" : "",
					"dst_start_day_of_week" : "",
					"dst_start_time_rate" : "",
                    "dst_end_month" : "",
                    "dst_end_day" : "",
					"dst_end_week" : "",
					"dst_end_day_of_week" : "",
                    "dst_end_time_rate" : ""
                });
                
                  oContext.created().then(function () {
                    oBinding.refresh();                    
                });     

                //this._setUIChanges(true);
                this.getView().getModel("appView").setProperty("/usernameEmpty", true);

                // Select and focus the table row that contains the newly created entry
                oList.getRows().some(function (oItem) {
                    if (oItem.getBindingContext() === oContext) {
                        oItem.focus();
                        oItem.setSelected(true);
                        return true;
                    }
                });
            },



            handleValueHelp: function () {
                if (!this._oValueHelpDialog) {
                    Fragment.load({
                        name: "cm.timeZoneMgr.view.CountryValueHelpDialog",
                        controller: this
                    }).then(function (oValueHelpDialog) {
                        this._oValueHelpDialog = oValueHelpDialog;
                        this.getView().addDependent(this._oValueHelpDialog);
                        this._configValueHelpDialog();
                        this._oValueHelpDialog.open();
                    }.bind(this));
                } else {
                    this._configValueHelpDialog();
                    this._oValueHelpDialog.open();
                }
            },

            _configValueHelpDialog: function () {
                debugger;
                var sInputValue = this.byId("productInput").getValue(),
                    oModel = this.getView().getModel(),
                    aProducts = oModel.getProperty("/TimeZone");

                // aProducts.forEach(function (oProduct) {
                //     oProduct.selected = (oProduct.timezone_name === sInputValue);
                // });
                // oModel.setProperty("/TimeZone", aProducts);
            },

            handleValueHelpClose: function () {
                var oModel = this.getView().getModel(),
                    aProducts = oModel.getProperty("/TimeZone"),
                    oInput = this.byId("productInput");

                var bHasSelected = aProducts.some(function (oProduct) {
                    if (oProduct.selected) {
                        oInput.setValue(oProduct.timezone_name);
                        return true;
                    }
                });

                if (!bHasSelected) {
                    oInput.setValue(null);
                }
            },
            
            _oCreateRow : function (tableType) {
                console.group("onCreate");   
              
                var tableName = tableType,
                    bSub = false,
                    oContext,
                    that = this;
               
                console.log("tableName: " + tableName);

                if(tableName!="mainList"){ bSub = true; }

                var oUiModel = this.getModel("ui"), 
                    oTable = this.byId(tableName);

                var oBinding = oTable.getBinding("rows"),
                    today = this._getToday(),
                    utcDate = this._getUtcSapDate(); 

                if(!bSub){
                    if (oBinding.hasPendingChanges()) {
                        this._showMsgStrip("e", this.errorSubHasUIChangeCreateRow);
                        //MessageToast.show(this.errorSubHasUIChangeCreateRow);
                        return;
                    }

                    oContext = oBinding.create({
                        "tenant_id": "1000",
                        "company_code": "G100",
                        "control_option_code": "",
                        "chain_code": "CM",
                        "control_option_name": "",
                        "start_date": this._getToday(),
                        "end_date": "9999-12-31",
                        "site_yn": false,
                        "company_yn": false,
                        "role_yn": false,
                        "organization_yn": false,
                        "user_yn": false,
                        "local_create_dtm": utcDate,
                        "local_update_dtm": utcDate,
                        "update_user_id": "Admin"
                    });

                }else{
                
                    //사용자가 행을 추가 했음을 알려준다. 
                    this._setUIChanges(null, false); 

                    var oMainModel = this.getModel("mainModel"),
                        oView = this.getView(),
                        oSubList = this.byId("subList");                

                        oContext = oBinding.create({
                            "tenant_id": oMainModel.getProperty("/selectrow/tenant_id"),
                            "company_code": oMainModel.getProperty("/selectrow/company_code"),
                            "control_option_code": oMainModel.getProperty("/selectrow/control_option_code"),                    
                            "control_option_level_code": "",
                            "control_option_level_val": "",
                            "control_option_val": "",
                            "local_create_dtm": utcDate,
                            "local_update_dtm": utcDate,
                            "update_user_id": "Admin"
                        });                    
                }

                this.getView().setBusy(true);

                oContext.created().then(function () {
                    oBinding.refresh();                    
                });

                //focus 이동
                oTable.getRows().some(function (oRows) {
                    if (oRows.getBindingContext() === oContext) {
                        oRows.focus();
                        oRows.setSelected(true);       
                        return true;
                    }
                });
                if(!bSub){
                    that._subListFilter(); 
                }
                this.getView().setBusy(false);
                console.groupEnd();
            },
        
            
            
		});
	});
