sap.ui.define([
        "jquery.sap.global",
        "sap/base/Log",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "sap/ui/core/format/DateFormat",
        "com/lg/uxFreeStyleDemo/controller/BaseController", 
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/FilterType",
        "sap/ui/model/Sorter",
        "sap/ui/model/json/JSONModel"
    ], function (jquery,Log, MessageBox, MessageToast, DateFormat, Controller, Filter, FilterOperator, FilterType, Sorter, JSONModel) {
        "use strict";

		return Controller.extend("com.lg.uxFreeStyleDemo.controller.Main", {

            /**
             * @public
             * SalesOrderList Save
             */
            onSaveSalesOrderList : function (){
                console.group("onSaveSalesOrderList");
                //this.getView().getModel().getUpdateGroupId()
                this.submitBatch(this.getView().getModel().getUpdateGroupId());
            },

            /**
             * @private
             * SaleOrderList Batch 
             *              */
            _submitBatch : function (sGroupId) {
			    var oView = this.getView();

                oView.setBusy(true);

                return oView.getModel().submitBatch(sGroupId).finally(function () {
                    oView.setBusy(false);
                });
		    },
			onInit: function () {    
                console.clear();
                console.log("onInit");            

                //This View initial
                this._createView();

                //Create SalesOrder load data
                this._createSalesOrder();
            },


             /**
             * @private
             * onInit에서 처음에 생성할 작업 내용
             */
            _createView : function() {
                console.group("_createView");
                var oView = this.getView();
                var oUiModel = new JSONModel({ 
                            filterCommonID : "",
                            filterValue : "",
                            bLineItemSelected : false,
                            headerText : ""
                });  
                

                this.setModel(oUiModel, "ui");     
                console.log("oUiModel");
                console.dir(oUiModel);
                console.groupEnd();
            },

            /**
             * @priate
             * SalesOrderSet Data Load
             */
            _createSalesOrder : function (){       
                console.group("_createSalesOrder");
                
                var oView = this.getView();
                var oModel = new JSONModel("localService/mockdata/SalesOrderSet.json");
                
                console.log("SalesOrderSet[mock data] json file load model ");
                oView.setModel(oModel);                 
                
                console.dir(oModel);   
                console.groupEnd(); 
            },

            /**
             * @public 
             * SalesOrderList Table -> Item Selection
             */
            onSalesOrdersSelect : function (oEvent) {
                console.group("onSalesOrdersSelect");

                this._setSalesOrderBindingContext(oEvent.getParameters().listItem.getBindingContext());

                console.dir(oEvent.getParameters().listItem.getBindingContext());

                this._onSalesOrderItemBinding(oEvent.getParameters().listItem.getBindingContext());

                console.groupEnd();
            },

            /**
             * @private
             * SalesOrderList 에서 선택된 아이템 SO_2_SOITEM 에 바인딩
             */
            _createSalesOrderItem : function(sSalesOrderID){
                console.group("_createSalesOrderItem");

                var oView = this.getView(),                
                oModel = new JSONModel("localService/mockdata/SalesOrderLineItemSet.json");

                console.log("SalesOrderLineItemSet[mock data] json file load model "); 

                this.setModel(oModel, "salesOrderItemList");   
                // only one filter
                var oFilter1 = new Filter(
                    "SalesOrderID", 
                    FilterOperator.EQ, 
                    sSalesOrderID
                );   

                var oBinding = this.byId("SO_2_SOITEM").getBinding("items");
                                // apply filter
                oBinding.filter([                
                    oFilter1
                ]);

                console.dir(oModel);

                console.log("json model seals order items");    
                console.groupEnd();
            },

            /**
             * @private 
             * call function onSalesOrdersSelect
             *  */    
            _setSalesOrderBindingContext : function (oSalesOrderContext) {
                var oSalesOrdersTable = this.byId("SalesOrderList"),
                    oUIModel = this.getView().getModel("ui");

                //Item 선택여부 저장 
                oUIModel.setProperty("/bSalesOrderSelected", !!oSalesOrderContext);

                if (!oSalesOrderContext) {
                    oSalesOrdersTable.removeSelections();
                } 

                //objectPage에 SalesOrder Context Binding
                this.byId("objectPage").setBindingContext(oSalesOrderContext);

                //LineItem 선택여부 
                oUIModel.setProperty("/bLineItemSelected", false);

                //하이 아이템 리스트 바인딩 초기화
                this.byId("BP_2_CONTACT").setBindingContext(undefined);
                
                //PRODUCT_2_BP 초기화 
                this.byId("PRODUCT_2_BP").setBindingContext(undefined);

            },

            /**
             * @private
             * 선택된 SalesOrderList Item 을 바인딩 합니다. 
             */
            _onSalesOrderItemBinding : function(oSalesOrderContext){
                console.group("_onSalesOrderItemBinding");       
                var oView = this.getView();
                var oSalesOrdersItemTable = this.byId("SO_2_SOITEM"),
                    oUIModel = this.getView().getModel("ui");    

                

                if(oSalesOrderContext){
                    var sSalesOrderID = oSalesOrderContext.getProperty("SalesOrderID");
                    console.log("sSalesOrderID",sSalesOrderID);

                    this._createSalesOrderItem(sSalesOrderID);                


                   // var oModel = new JSONModel("localService/mockdata/SalesOrderLineItemSet.json"); 
                    //oView.setModel(oModel,"SalesOrderItemList");    


                    // var salesOrderItemModel = this.getView().getModel("SalesOrderItemList");
                    // this.getView().getModel("salesOrderItemModel").setProperty("salesOrderItemModel");
                    // var ugetModel = oView.getModel("SalesOrderItemList");
                    // const key = "Orga_Id";
                    // const value= "86094";
                    // const result = oModel.filter(d=>d[key]==value);
                    console.log("------------");
                    //console.dir(ugetModel);
                }                
                console.groupEnd();
            },

            onSortBySalesOrderID : function () {
                console.group("onSortBySalesOrderID");   
			var oBinding = this.byId("SalesOrderList").getBinding("items"),
                oUIModel = this.getView().getModel("ui"),
                oParameters = {};

			if (oBinding.hasPendingChanges()) {
				MessageBox.error("저장되지 않은 작업이 존재 합니다.");
				return;
			}
				
            oBinding.changeParameters(oParameters);
            console.groupEnd();
		}

    });
});
