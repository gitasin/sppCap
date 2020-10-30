sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "sap/m/MessageBox",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController, JSONModel, MessageToast, MessageBox, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("cm.codeMgr.controller.CodeMgr", {

            isValNull: function (p_val) {
                if(!p_val || p_val == "" || p_val == null){
                    return true
                }else{
                    return false;
                }
            },

            onInit: function () {
                this._retrieveParam = new JSONModel({
                    mstParam : "",
                    dtlParam : "",
                    lngParam : ""
                }); 
                
                this.getView().setModel(this._comboModel, "comboModel");
            },

            onAfterRendering: function () {

                //debugger
                // search_use_flag
                // this.byId("search_use_flag").getBinding("items")

            },

			onSearch: function () {

                var filters = [];

                var search_tenant_id = "";
                var search_company_code = "";
                var search_chain_code = "";
                var search_use_flag = "";
                var search_group_code = this.getView().byId("search_group_code").getValue();
                var search_group_name = this.getView().byId("search_group_name").getValue();
                var search_group_description = this.getView().byId("search_group_description").getValue();
                

                if(this.byId("search_tenant_id").getSelectedItem()){
                    search_tenant_id = this.byId("search_tenant_id").getSelectedItem().getKey();
                }

                if(this.byId("search_company_code").getSelectedItem()){
                    search_company_code = this.byId("search_company_code").getSelectedItem().getKey();
                }

                if(this.byId("search_chain_code").getSelectedItem()){
                    search_chain_code = this.byId("search_chain_code").getSelectedItem().getKey();
                }

                if(this.byId("search_use_flag").getSelectedItem()){
                    search_use_flag = this.byId("search_use_flag").getSelectedItem().getKey();
                }

                // 필터 추가 
                if(!this.isValNull(search_tenant_id)){
                    filters.push(new Filter("tenant_id", FilterOperator.Contains, search_tenant_id));
                }

                if(!this.isValNull(search_company_code)){
                    filters.push(new Filter("company_code", FilterOperator.Contains, search_company_code));
                }

                if(!this.isValNull(search_chain_code)){
                    filters.push(new Filter("chain_code", FilterOperator.Contains, search_chain_code));
                }

                if(!this.isValNull(search_use_flag)){
                    //filters.push(new Filter("use_flag", FilterOperator.Contains, search_use_flag));
                }

                if(!this.isValNull(search_group_code)){
                    filters.push(new Filter("group_code", FilterOperator.Contains, search_group_code));
                }

                if(!this.isValNull(search_group_name)){
                    filters.push(new Filter("group_name", FilterOperator.Contains, search_group_name));
                }

                if(!this.isValNull(search_group_description)){
                    filters.push(new Filter("group_description", FilterOperator.Contains, search_group_description));
                }

                var mstBinding = this.byId("codeMstTable").getBinding("items");
                //var mstBinding = this.byId("codeMstTable").getBinding("rows");
                mstBinding.resetChanges();
                this._retrieveParam.mstParam = "";
                this._retrieveParam.dtlParam = "";
                this._retrieveParam.lngParam = "";

                this.getView().setBusy(true);
                mstBinding.filter(filters);
                this.getView().setBusy(false);

            },

            /**
             * Code MST Button Event
             */
			onMstAddRow : function () {
                
                var mstBinding = this.byId("codeMstTable").getBinding("items");
                var oContext = mstBinding.create({
                        "tenant_id" : "1000",
                        "company_code" : "G100",
                        "group_code" : "",
                        "chain_code" : "",
                        "group_name" : "",
                        "group_description" : "",
                        "use_flag" : true
                    });

            },

			onMstCopyRow : function () {

            },

			onMstDeleteRow : function () {

                var oSelected  = this.byId("codeMstTable").getSelectedContexts();
                //this.byId("codeMstTable").getSelectedItems()

                if (oSelected.length > 0) {

                    for(var idx = 0; idx < oSelected.length; idx++){
                        //oSelected[idx].delete("$auto");

                        var oView = this.getView();
                        oView.setBusy(true);

                        oSelected[idx].delete("$auto").then(function () {
                            oView.setBusy(false);
                            MessageToast.show("삭제 되었습니다.");
                            this.onSearch();
                        }.bind(this), function (oError) {
                            oView.setBusy(false);
                            MessageBox.error(oError.message);
                        });

                    }

                    /*
                    var oView = this.getView();
                    oView.setBusy(true);

                    oSelected.getBindingContext().delete("$auto").then(function () {
                        oView.setBusy(false);
                        MessageToast.show("삭제 되었습니다.");
                        this.onRefresh();
                    }.bind(this), function (oError) {
                        oView.setBusy(false);
                        MessageBox.error(oError.message);
                    });
                    */
                    
                }else{
                    MessageBox.error("선택된 행이 없습니다.");
                }
            },

			onMstSave : function () {

                var mstBinding = this.byId("codeMstTable").getBinding("items");

                if (!mstBinding.hasPendingChanges()) {
                    MessageBox.error("수정한 내용이 없습니다.");
                    return;
                }

                var oView = this.getView();
                var fnSuccess = function () {
                    oView.setBusy(false);
                    MessageToast.show("저장 되었습니다.");
                    this.onMstRefresh();
                }.bind(this);

                var fnError = function (oError) {
                    oView.setBusy(false);
                    MessageBox.error(oError.message);
                }.bind(this);


                MessageBox.confirm("저장 하시 겠습니까?", {
                    title : "Comfirmation",
                    initialFocus : sap.m.MessageBox.Action.CANCEL,
                    onClose : function(sButton) {
                        if (sButton === MessageBox.Action.OK) {
                            oView.setBusy(true);
                            oView.getModel().submitBatch("codeMstUpdateGroup").then(fnSuccess, fnError);
                        } else if (sButton === MessageBox.Action.CANCEL) {
                            
                        };
                    }
                });
                
            },

            onMstRefresh : function () {
                //var mstBinding = this.byId("codeMstTable").getBinding("rows");
                var mstBinding = this.byId("codeMstTable").getBinding("items");
                this.getView().setBusy(true);
                mstBinding.refresh();
                this.getView().setBusy(false);
            },

			onMstTableItemPress : function (oEvent) {

                var v_searchCond = {
                    tenant_id : oEvent.getSource().getBindingContext().getValue('tenant_id'),
                    company_code : oEvent.getSource().getBindingContext().getValue('company_code'),
                    group_code : oEvent.getSource().getBindingContext().getValue('group_code')
                };

                this.fn_searchCodeDtl(v_searchCond);

            },            

			onMstUpdateFinished : function (oEvent) {
                
                if(oEvent.getSource().getItems().length > 0){
                    var v_item = oEvent.getSource().getItems()[0];
                    var v_searchCond = {
                        tenant_id : v_item.getBindingContext().getValue('tenant_id'),
                        company_code : v_item.getBindingContext().getValue('company_code'),
                        group_code : v_item.getBindingContext().getValue('group_code')
                    };

                    this.fn_searchCodeDtl(v_searchCond);
                }

            }, 

            /**
             * Code DTL Button Event
             */

			fn_searchCodeDtl : function (p_searchCond) {                

                var v_tenant_id = p_searchCond.tenant_id;
                var v_company_code = p_searchCond.company_code;
                var v_group_code = p_searchCond.group_code;

                if(!this.isValNull(v_tenant_id) && !this.isValNull(v_company_code) && !this.isValNull(v_group_code)){
                    var filters = [];
                    filters.push(new Filter("tenant_id"   , FilterOperator.EQ, v_tenant_id));
                    filters.push(new Filter("company_code", FilterOperator.EQ, v_company_code));
                    filters.push(new Filter("group_code"  , FilterOperator.EQ, v_group_code));

                    var dtlBinding = this.byId("codeDtlTable").getBinding("items");
                    dtlBinding.resetChanges();
                    this.getView().setBusy(true);
                    dtlBinding.filter(filters);
                    this.getView().setBusy(false);

                }

                this._retrieveParam.dtlParam = p_searchCond;

            },

			onDtlAddRow : function () {
                
                var dtlVal = this._retrieveParam.dtlParam;

                var dtlBinding = this.byId("codeDtlTable").getBinding("items");
                var oContext = dtlBinding.create({
                        "tenant_id" : dtlVal.tenant_id,
                        "company_code" : dtlVal.company_code,
                        "group_code" : dtlVal.group_code,
                        "code" : "",
                        "code_description" : "",
                        "sort_no" : "",
                        "start_date" : "",
                        "end_date" : ""
                    });
            },

			onDtlCopyRow : function () {

            },

			onDtlDeleteRow : function () {
                var oSelected  = this.byId("codeDtlTable").getSelectedContexts();

                if (oSelected.length > 0) {

                    for(var idx = 0; idx < oSelected.length; idx++){

                        var oView = this.getView();
                        oView.setBusy(true);

                        oSelected[idx].delete("$auto").then(function () {
                            oView.setBusy(false);
                            MessageToast.show("삭제 되었습니다.");
                            this.onDtlRefresh();
                        }.bind(this), function (oError) {
                            oView.setBusy(false);
                            MessageBox.error(oError.message);
                        });

                    }
                }else{
                    MessageBox.error("선택된 행이 없습니다.");
                }
            },

			onDtlSave : function () {
                var dtlBinding = this.byId("codeDtlTable").getBinding("items");

                if (!dtlBinding.hasPendingChanges()) {
                    MessageBox.error("수정한 내용이 없습니다.");
                    return;
                }

                var oView = this.getView();
                var fnSuccess = function () {
                    oView.setBusy(false);
                    MessageToast.show("저장 되었습니다.");
                    this.onDtlRefresh();
                }.bind(this);

                var fnError = function (oError) {
                    oView.setBusy(false);
                    MessageBox.error(oError.message);
                }.bind(this);


                MessageBox.confirm("저장 하시 겠습니까?", {
                    title : "Comfirmation",
                    initialFocus : sap.m.MessageBox.Action.CANCEL,
                    onClose : function(sButton) {
                        if (sButton === MessageBox.Action.OK) {
                            oView.setBusy(true);
                            oView.getModel().submitBatch("codeDtlUpdateGroup").then(fnSuccess, fnError);
                        } else if (sButton === MessageBox.Action.CANCEL) {
                            
                        };
                    }
                });
            },

            onDtlRefresh : function () {
                var dtlBinding = this.byId("codeDtlTable").getBinding("items");
                this.getView().setBusy(true);
                dtlBinding.refresh();
                this.getView().setBusy(false);
            },

			onDtlUpdateFinished : function (oEvent) {
                
                if(oEvent.getSource().getItems().length > 0){
                    var v_item = oEvent.getSource().getItems()[0];
                    var v_searchCond = {
                        tenant_id : v_item.getBindingContext().getValue('tenant_id'),
                        company_code : v_item.getBindingContext().getValue('company_code'),
                        group_code : v_item.getBindingContext().getValue('group_code'),
                        code : v_item.getBindingContext().getValue('code')
                    };

                    this.fn_searchCodeLng(v_searchCond);
                }else{
                    this.byId("codeLngTable").destroyItems();
                }

            },

			onDtlTableItemPress : function (oEvent) {
                
                var v_searchCond = {
                    tenant_id : oEvent.getSource().getBindingContext().getValue('tenant_id'),
                    company_code : oEvent.getSource().getBindingContext().getValue('company_code'),
                    group_code : oEvent.getSource().getBindingContext().getValue('group_code'),
                    code : oEvent.getSource().getBindingContext().getValue('code')
                };

                this.fn_searchCodeLng(v_searchCond);

            },

            /**
             * Code LNG Button Event
             */

			fn_searchCodeLng : function (p_searchCond) {

                var v_tenant_id = p_searchCond.tenant_id;
                var v_company_code = p_searchCond.company_code;
                var v_group_code = p_searchCond.group_code;
                var v_code = p_searchCond.code;

                var filters = [];
                filters.push(new Filter("tenant_id"   , FilterOperator.EQ, v_tenant_id));
                filters.push(new Filter("company_code", FilterOperator.EQ, v_company_code));
                filters.push(new Filter("group_code"  , FilterOperator.EQ, v_group_code));
                filters.push(new Filter("code"  , FilterOperator.EQ, v_code));

                var lngBinding = this.byId("codeLngTable").getBinding("items");
                lngBinding.resetChanges();
                this.getView().setBusy(true);
                lngBinding.filter(filters);
                this.getView().setBusy(false);

                this._retrieveParam.lngParam = p_searchCond;

            },

			onLngAddRow : function () {
                var lngVal = this._retrieveParam.lngParam;

                var lngBinding = this.byId("codeLngTable").getBinding("items");
                var oContext = lngBinding.create({
                        "tenant_id" : lngVal.tenant_id,
                        "company_code" : lngVal.company_code,
                        "group_code" : lngVal.group_code,
                        "code" :lngVal.code,
                        "language_cd" : "",
                        "code_name" : ""
                    });
            },

			onLngCopyRow : function () {

            },

			onLngDeleteRow : function () {
                var oSelected  = this.byId("codeLngTable").getSelectedContexts();

                if (oSelected.length > 0) {

                    for(var idx = 0; idx < oSelected.length; idx++){

                        var oView = this.getView();
                        oView.setBusy(true);

                        oSelected[idx].delete("$auto").then(function () {
                            oView.setBusy(false);
                            MessageToast.show("삭제 되었습니다.");
                            this.onLngRefresh();
                        }.bind(this), function (oError) {
                            oView.setBusy(false);
                            MessageBox.error(oError.message);
                        });

                    }
                }else{
                    MessageBox.error("선택된 행이 없습니다.");
                }
            },

			onLngSave : function () {
                var lngBinding = this.byId("codeLngTable").getBinding("items");

                if (!lngBinding.hasPendingChanges()) {
                    MessageBox.error("수정한 내용이 없습니다.");
                    return;
                }

                var oView = this.getView();
                var fnSuccess = function () {
                    oView.setBusy(false);
                    MessageToast.show("저장 되었습니다.");
                    this.onLngRefresh();
                }.bind(this);

                var fnError = function (oError) {
                    oView.setBusy(false);
                    MessageBox.error(oError.message);
                }.bind(this);


                MessageBox.confirm("저장 하시 겠습니까?", {
                    title : "Comfirmation",
                    initialFocus : sap.m.MessageBox.Action.CANCEL,
                    onClose : function(sButton) {
                        if (sButton === MessageBox.Action.OK) {
                            oView.setBusy(true);
                            oView.getModel().submitBatch("codeLngUpdateGroup").then(fnSuccess, fnError);
                        } else if (sButton === MessageBox.Action.CANCEL) {
                            
                        };
                    }
                });
            },

            onLngRefresh : function () {                
                var lngBinding = this.byId("codeLngTable").getBinding("items");
                this.getView().setBusy(true);
                lngBinding.refresh();
                this.getView().setBusy(false);
            }
            

		});
	});
