sap.ui.define([        
        "sap/base/Log",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "sap/ui/core/format/DateFormat",
        "cm/controlOptionMgr/controller/BaseController",         
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/FilterType",
        "sap/ui/model/Sorter",
        "sap/ui/model/json/JSONModel"
    ], function (Log, MessageBox, MessageToast, DateFormat, Controller, Filter, FilterOperator, FilterType, Sorter, JSONModel) {
        "use strict";

		return Controller.extend("cm.controlOptionMgr.controller.Main", {  
            
			onInit: function () {

                console.clear();

                this._createView();
                this._bTechnicalErrors = false;      

                console.groupEnd();
            },

             /**
             * @private
             * view에서 사용할 객체를 생성합니다.
             */
            _createView : function() {
                console.group("_createView");

                var oView = this.getView();
                var oUiModel = new JSONModel({ 
                            filterCommonID : "",
                            filterValue : "",
                            hasUIChanges : false,                                                        
                            headerText : ""
                });     
                
                var oMainKeyModel = new JSONModel({ 
                            data : [],
                            selectrow : []
                });  

                var oSubKeyModel = new JSONModel({ 
                            data : [],
                            selectrow : []
                });                  

                this.setModel(oUiModel, "ui");     
                this.setModel(oMainKeyModel, "mainkey");     
                this.setModel(oSubKeyModel, "subkey");     

                console.groupEnd();
            },          

            /**
             * @public
             * @param {*} oEvent 
             */
            onMainListSelect : function (oEvent) {               

                console.group("onMainListSelect");
                
                var oMainKeyModel = this.getView().getModel("mainkey"),
                oView = this.getView();                

                var rowIndex = oEvent.getParameter("rowIndex");
                var oTable = this.byId("mainList");         
                console.log("Indices: " + oTable.getSelectedIndices());
                var rowsBinding = this.byId("mainList").getBinding("rows");
                var rows = oTable.getRows();
                var indices = oTable.getSelectedIndices();
                console.log("indices.length",indices.length);

                //기존 선택된 값을 초기화 한다. 
                oMainKeyModel.setProperty("/data","");
                oMainKeyModel.setProperty("/selectrow","");
                var aJsonArray = new Array();
                
                //최종 사용자가 선택한 row
                var oSelectedIndex = oTable.getSelectedIndex();
                var vMaxCheckRow = 0;

                for (var i = 0; i < indices.length; i++) {
                    var idx = indices[i];     
                    var oCheckRow = new JSONModel({ 
                                tenant_id : "",
                                company_code : "",
                                chain_code : "",
                                process_code : "",                                
                                control_option_code : "",
                                control_option_name : "",
                                system : "",                                
                                site_yn : "",
                                company_yn : "",
                                organization_yn : "",
                                user_yn : "",
                                code_group : "",
                                start_date : "",
                                end_date : "",
                                deleteTag : "N"
                    });  

                    console.log("x-vMaxCheckRow", vMaxCheckRow);

                    //임시 롤 체크를 해제 하면 선택된 하위 detail 선택된 값은 사라지고 아무런 값을 노출하지 않는다. 
                    if (oTable.isIndexSelected(idx)) {  
                        // vMaxCheckRow = idx;
                        // if(oSelectedIndex<0){
                        //     oSelectedIndex = vMaxCheckRow;
                        // }
                        /*
                        tenant_id : master key customData 0
                        company_code : master key customData 1                       
                        control_option_code : master key customData 2
                        chani_code : master key customData 3                                                
                          0 제어옵션코드 
                          1 제어옵션명
                          2 시스템                          
                          3 LEVEL/Site1
                          4 LEVEL/회사
                          5 LEVEL/조직
                          6 LEVEL/사용자
                          7 옵션값 코드그룹                          
                          8 유효시작일자                          
                          9 유효종료일자
                        */
                        oCheckRow.tenant_id = rows[idx].getCells()[0].mAggregations.customData[0].mProperties.value;
                        oCheckRow.company_code = rows[idx].getCells()[0].mAggregations.customData[1].mProperties.value;
                        oCheckRow.chain_code = rows[idx].getCells()[0].mAggregations.customData[2].mProperties.value;
                        oCheckRow.control_option_code = rows[idx].getCells()[0].mAggregations.customData[3].mProperties.value;               
                        oCheckRow.control_option_name = rows[idx].getCells()[1].mProperties.text;
                        oCheckRow.system = rows[idx].getCells()[2].mProperties.text;
                        oCheckRow.site_yn = rows[idx].getCells()[3].mProperties.selected;
                        oCheckRow.company_yn = rows[idx].getCells()[4].mProperties.selected;                        
                        oCheckRow.organization_yn = rows[idx].getCells()[5].mProperties.selected;
                        oCheckRow.user_yn = rows[idx].getCells()[6].mProperties.selected;
                        oCheckRow.code_group = rows[idx].getCells()[7].mProperties.selected;
                        oCheckRow.start_date = rows[idx].getCells()[8].mProperties.selected;
                        oCheckRow.end_date = rows[idx].getCells()[9].mProperties.selected;
                        
                        if(oSelectedIndex==idx){                            
                            console.log("oSelectedIndex", oSelectedIndex);
                            oMainKeyModel.setProperty("/selectrow", oCheckRow); 
                        }

                        aJsonArray.push(oCheckRow);
                    }
                }     
                
                oMainKeyModel.setProperty("/data", aJsonArray);
                
                console.log(">main choice data");
                console.dir(oMainKeyModel.getProperty("/data"));

                //사용자가 체크해제 하여 select row가 변경될 경우 
                // if(vMaxCheckRow != oSelectedIndex){                    
                //     var unCheckdemi = oMainKeyModel.getProperty("/data");
                //     console.dir(unCheckdemi);

                // }

                console.group("selectRow");
                console.log("oSelectedIndex",oSelectedIndex);                
                console.dir(oMainKeyModel.getProperty("/selectrow"));
                console.groupEnd();
                
                if(oSelectedIndex>-1){
                    this._onSubListBinding();
                }
                console.groupEnd();                
            },

            /**
             * @private
             * @param {*} oMainListContext 
             */
            _onSubListBinding : function (){
                console.group("_onSubListBinding");

                var oMainKeyModel = this.getView().getModel("mainkey"),
                    oView = this.getView(),
                    oSubList = this.byId("subList");                

                var oSelectRow = oMainKeyModel.getProperty("/selectrow");
                console.log("oSelectRow.tenant_id", oSelectRow.tenant_id);
                console.log("oSelectRow.company_code", oSelectRow.company_code);
                console.log("oSelectRow.control_option_codeid", oSelectRow.control_option_code);
                    
                //sub model filter
                var oFilter1 = new Filter("tenant_id", FilterOperator.EQ, oSelectRow.tenant_id);   
                var oFilter2 = new Filter("company_code", FilterOperator.EQ, oSelectRow.company_code);   
                var oFilter3 = new Filter("control_option_code", FilterOperator.EQ, oSelectRow.control_option_code);                                   

                var oModel = oView.getModel(); 
                                               
                var oBinding = oSubList.getBinding("rows");
                
                    oBinding.filter([                
                        oFilter1,
                        oFilter2,
                        oFilter3
                    ]);
                    
                console.groupEnd();
            },


            /**
             * @private
             * @param {*} bHasUIChanges 
             * Ui에서의 수정사항이 있는지 체크 합니다. 
             */
            _setUIChanges : function (bHasUIChanges) {

                if (this._bTechnicalErrors) {                    
                    bHasUIChanges = true;
                } else if (bHasUIChanges === undefined) {
                    bHasUIChanges = this.getView().getModel().hasPendingChanges();
                }
                
                var oUiModel = this.getView().getModel("ui");
                oUiModel.setProperty("/hasUIChanges", bHasUIChanges);
            },
                    
            /**
             * @public 
             * MainList Table 내용 저장 
             */
            onMainSave : function () {
                console.group("onMainSave");
                
                var oBinding = this.byId("mainList").getBinding("rows");

                if (!oBinding.hasPendingChanges()) {
                    MessageBox.error("수정한 내용이 없습니다.");
                    return;
                } 

                MessageBox.confirm("저장 하시 겠습니까?", {
                    title : "저장 확인",
                    initialFocus : sap.m.MessageBox.Action.CANCEL,
                    onClose : function(sButton) {
                        if (sButton === MessageBox.Action.OK) {
                            this._submitBatch(this.getView().getModel().getUpdateGroupId());  
                        } else if (sButton === MessageBox.Action.CANCEL) {
                            
                        };
                    }
                });                                  
                console.groupEnd();
            },


            /**
             * @private
             * @param  sGroupId 
             */
            _submitBatch : function (sGroupId) {
                console.group("_submitBatch");

			    var oView = this.getView();

                function resetBusy() {
                    oView.setBusy(false);
                    oView.getModel("ui").setProperty("/hasUIChanges", oView.getModel().hasPendingChanges());
                }

                oView.setBusy(true);

                return oView.getModel().submitBatch(sGroupId).then(resetBusy, resetBusy);

                // return oView.getModel().submitBatch(sGroupId).finally(function () {
                //     oView.setBusy(false);
                // });

                console.groupEnd();
            },            

            /**
             * @private
             *  
             */
            _createSubListItem : function(){

                console.group("_createSubListItem");

                   // this._createSalesOrderItem(sSalesOrderID);  


                console.groupEnd();
            }
        });
});
