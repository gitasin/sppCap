/**
 * Title : 공통 > 제어옵션 관리 
 * Contents : 
 * 1. view 화면에서 호출되는 function @public
 * 2. controller 내부에서 사용되는 function @private
 * 3. 첫 검색이후 행추가 버튼 활성화 
  
 * Issue : 
 * 1. ODATA4 형식에서 직접 바인딩한 날짜 값들의 형식을 지켜야 하기때문에 저장시 해당 형태로 
 * Date 형태로 입력해야하며 이때 발생하는 System Date 값도 전달 되는 이슈가 있습니다.  
 *  
 * 2. 삭제할 아이템 선택과 수정한 데이타 동시 저장시 group id 지정 및 auto 시도시 실패 
 * 현재는 별도의 액션 처리로 수정, 삭제를 별도로 처리 합니다. 
 * Remaining work :
 * 1. i18n 작업
 * 2. 조회 폼 작업
 * 3. 조회결과값에 대한 mainList 필터 작업
 * 4. hasUIChanges 작업
 */
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
        "sap/ui/model/json/JSONModel",
        "sap/ui/table/RowSettings",
        "sap/ui/thirdparty/jquery"
    ], function (Log, MessageBox, MessageToast, DateFormat, Controller, Filter, FilterOperator, FilterType, Sorter, JSONModel, RowSettings, jquery) {
        "use strict";
		return Controller.extend("cm.controlOptionMgr.controller.Main", {  


           	onInit: function () {
                console.clear();

                this._createView();
                this._bTechnicalErrors = false; 
                console.groupEnd();
                
            },

            /**
             * @private i18n Message control
             * @param {*} sTextId 
             * @param {*} aArgs 
             */
            _getText : function (sTextId, aArgs) {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sTextId, aArgs);
            },
   
           
            /**
             * @private
             * @see View 에 있는 버튼 상태 컨트롤 각종 액션 처리 상태에 따라 활성화와 비활성화 상태값을 설정.
             */
            _setButtonState : function (){
                console.group("_setButtonState");
                var oUiModel = this.getModel("ui"),
                    oTable= this.getView().byId("mainList"); 
                /**
                 * 1. 메인 리스트 행추가 버튼은 처음 검색결과과 출력된후 활성화 된다.
                 * 2. 메인 리스트 행복사 버튼은 선택한 로우가 하나 일때 활성화 된다.
                 * 3. 메인 리스트 삭제 버튼은 선택한 로우가 하나 이상일때 활성화 된다.
                 * 4. 메인 리스트 저장 버튼은 검색결과가 활성화 될때 동시 활성화 된다. 
                 * 5. 서브 리스트 버튼들은 행선택 이 있을때에만 활성화 된다. 
                 */
                 //subLis에서의 row check box 클릭 
                if(oUiModel.getProperty("bSubCheck")){
                     oTable= this.getView().byId("subList"); 
                }
                var indices = oTable.getSelectedIndices()
                console.log("table rowindices", indices);    

                /*
                상태 테그로 모두 관리 한다. 
                검색을 실행하여 리스트가 바인딩 된 상태
                리스트 항목을 선택한 상태
                리스트 항목을 체크한 상태
                리스트 항목을 선택도 하고 체크도 한 상태 
                */
                var bSelect = oUiModel.getProperty("/bSubListTrue"),
                    bSearch =  oUiModel.getProperty("/bSearch"); 
                
                //row를 선택한 상태
                if(bSearch==true){
                    oUiModel.setProperty("/bAdd", true); 
                    oUiModel.setProperty("/bSave", true);
                }

                if(!oUiModel.getProperty("/bSubCheck")){
                    //검색 출력이 있는 상태에서 체크를 선택한 상태 
                    if( indices.length > 0 ) {
                        oUiModel.setProperty("/bAdd", true); 
                        oUiModel.setProperty("/bCopy", true); 
                        oUiModel.setProperty("/bDelete", true);
                        
                        //체크한 Row수 체크 
                        if(indices.length>1){
                            oUiModel.setProperty("/bCopy", false); 
                        } 
                
                    }else{
                        oUiModel.setProperty("/bCopy", false); 
                        oUiModel.setProperty("/bDelete", false);
                    } 
                }else{
                    if(!oUiModel.setProperty("/bSubListTrue")){
                        oUiModel.setProperty("/bSubCheck", false); 
                    } else {
                        //subList 상태 체크 
                        indices = this.getView().byId("subList").getSelectedIndices().length;

                        console.log("sublist indices length" , indices);
                        if( indices > 0 ) {
                            oUiModel.setProperty("/bSubCheck", true); 
                        } else {
                            oUiModel.setProperty("/bSubCheck", false);
                        }
                    }
                }

                console.groupEnd();
            },

            /**
             * @public 
             * @param {*} oEvent 
             * @see subList 에서 dataReceived 발생 이벤트
             */
            onDataEvents : function (oEvent) {
                console.group("onDataEvents");
                var oUiModel = this.getModel("ui"),
                    oTable= this.getView().byId("subList"); 
                
                var aSalesOrderIDs = [],
                    oSource = oEvent.getSource();

                if (oEvent.getId() === "dataReceived"){
                    console.log("dataReceived event");

                    var subListlength = oSource.iMaxLength;
                    console.log("subListlength", subListlength);

                    //event 순서로 인한하여 buttonState 에서 컨트롤 하지 않습니다.
                    if(subListlength>0){
                        oUiModel.setProperty("/bSubListTrue", true);
                    }
                    else{
                        oUiModel.setProperty("/bSubListTrue", false); 
                    }         
                }
                console.groupEnd();
            },         
 
             /**
             * @private
             * @see view에서 사용할 객체를 생성합니다.
             */
            _createView : function() {
                console.group("_createView");

                var oView = this.getView();
                var oUiModel = new JSONModel({ 
                            filterCommonID : "",
                            filterValue : "",
                            hasUIChanges : false,  
                            bSearch : false,
                            bAdd : false,
                            bDelete : false,                                                    
                            bCopy : false,
                            bSelect : false,
                            bCheck : false,
                            subListCount : 0,
                            bSubCheck : false,
                            bSubListTrue : false                                                        
                });     
                
                var oMainModel = new JSONModel({ 
                            data : [],
                            selectrow : []
                });  

                var oSubModel = new JSONModel({ 
                            data : [],
                            selectrow : []
                });                  

                this.setModel(oUiModel, "ui");     
                this.setModel(oMainModel, "mainModel");     
                this.setModel(oSubModel, "subModel"); 

                console.groupEnd();
            },      

            /**
             * @public
             * @see 검색
             */
            onSearch : function () {
                console.group("onSearch");

                var oUiModel = this.getModel("ui");
                    oUiModel.setProperty("/bSearch", true);
                this._setButtonState();
                console.groupEnd();
            },
            /**
             * @public
             * @param {*} oEvent 
             * @see mainList row select event
             */
            onCellClick : function (oEvent) {       
                console.group("onCellClick");
                
                var oMainModel = this.getView().getModel("mainModel"),
                    oUiModel = this.getView().getModel("ui"), 
                    oView = this.getView(),
                    oSubList = this.byId("subList"),
                    currentRowContext = oEvent.getParameter("rowContext");

                var oBinding = oSubList.getBinding("rows");
                if (oBinding.hasPendingChanges()) {
                    MessageToast.show("상세 테이블에서 저장하지 않은 변경 내용이 있습니다. 항목 을 선택할수 있습니다.");
                    return;
                }
                                
                var rowIndex = oEvent.getParameter("rowIndex"),
                    oTable = this.byId("mainList");         

                console.log("Indices: " + oTable.getSelectedIndices());

                var rowsBinding = this.byId("mainList").getBinding("rows"),
                    rows = oTable.getRows();

                console.log("rowIndex",rowIndex);

                //기존 선택된 값을 초기화 한다. 
                oMainModel.setProperty("/data","");
                oMainModel.setProperty("/selectrow","");
                            
                oUiModel.setProperty("/bSelect", rowIndex>-1 ? true : false);
                //oUiModel.setProperty("/bSubSelected", false);
               
                var oCheckRow = new JSONModel({ 
                            tenant_id : "",
                            company_code : "",
                            chain_code : "",
                            control_option_code : ""
                });  
                /*
                    tenant_id : master key customData 0
                    company_code : master key customData 1                       
                    control_option_code : master key customData 2
                    chani_code : master key customData 3                                                
                */
                oCheckRow.tenant_id = rows[rowIndex].getCells()[0].mProperties.value;
                oCheckRow.company_code = rows[rowIndex].getCells()[1].mProperties.value;
                oCheckRow.chain_code = rows[rowIndex].getCells()[2].mProperties.value;
                oCheckRow.control_option_code = rows[rowIndex].getCells()[3].mProperties.value;
                
                oMainModel.setProperty("/selectrow", oCheckRow);                 
                
                //array에 저장한후 벨류 체크가 필요할시 진행한다.
                oMainModel.setProperty("/data", oCheckRow);

                console.group("selectRow");
                console.dir(oMainModel.getProperty("/selectrow"));
                console.groupEnd();   

                this._onSubListBinding(rowIndex);  

                this._setButtonState();

                console.groupEnd();        
            },

            /**
             * @param {*} oEvent 
             * @see 항목 (mainList 체크박스) 선택시 발생하는 이벤트 
             */
            onCheck : function(oEvent) {
                console.group("onCheck");
                var oTable = this.byId("mainList"),
                    oUiModel = this.getModel("ui"),
                    bSubCheck;

                //main과 sub를 구분합니다.      
                if(oEvent.getSource().sId.indexOf("mainList") < 0){
                    oTable = this.byId("subList");                    
                    bSubCheck = true;
                }
                
                var oBinding = oTable.getBinding("rows"),
                    oModel,                      
                    oSelectedRow;
                    
                if(oEvent.getParameter("rowContext")=="undefined") {                  
                    return;
                }

                if(bSubCheck){
                    console.log("subList row change event");
                    oSelectedRow = oEvent.getParameter("rowContext");                    
                    oModel = oSelectedRow.getObject();
                    oUiModel.setProperty("/bSubCheck", bSubCheck);

                }else{
                    console.log("mainList row change event");
                }

                this._setButtonState();
                console.groupEnd();
                 
            },
            
            /**
             * @public 
             * @see 행복사 :  리스트 내용중 체크된 항목이 하나일때만 반응 ref :  onChangeRow
             * site_yn, company_yn, role_yn, organization_yn, user_yn 컬럼은 복사하지 않습니다.
             */
            onCopyRow : function (oEvent) {
                console.group("onCopyRow");
                var oTable = this.byId("mainList"),
                    oBinding = oTable.getBinding("rows"),                    
                    rows = oTable.getRows(), 
                    indices = oTable.getSelectedIndices(),                    
                    today = this._getToday(),
                    utcDate = this._getUtcSapDate();    

                console.log("indices", indices);
        
                if(indices.length>1){
                    MessageBox.show("행복사는 선택 항목이 하나여야 합니다.", {
                        icon: MessageBox.Icon.ERROR,
                        title: "항목 선택 오류",
                        actions: [MessageBox.Action.OK],
                        styleClass: "sapUiSizeCompact"
                    });
                    return;
                }
                var mainModel = this.getModel("mainModel");
                var oContext = oBinding.create({
                        "tenant_id": mainModel.tenant_id,
                        "company_code": mainModel.company_code,
                        "control_option_code": mainModel.control_option_code,
                        "chain_code": mainModel.chain_code,
                        "control_option_name": mainModel.control_option_name,
                        "start_date": mainModel.start_date,
                        "end_date": mainModel.end_date,                        
                        "site_yn": false,
                        "company_yn": false,
                        "role_yn": false,
                        "organization_yn": false,
                        "user_yn": false,
                        "local_create_dtm": utcDate,
                        "local_update_dtm": utcDate,
                        "create_user_id": "Admin",
                        "update_user_id": "Admin",
                        "system_create_dtm": utcDate,
                        "system_update_dtm": utcDate
                });
                
                oTable.clearSelection();

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

                oContext.created().then(function () {
                    oBinding.refresh();
                });

                console.groupEnd();
            },

            /**
             * @private
             * @see today 
             * @return yyyy-mm-dd
             */
            _getToday : function(){
                var date_ob = new Date();
                var date = ("0" + date_ob.getDate()).slice(-2);
                var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                var year = date_ob.getFullYear();

                console.log(year + "-" + month + "-" + date);
                return year + "-" + month + "-" + date;
            },
            
            /**
             * @private
             * @scc UTC 기준 DATE를 반환합니다.
             * @return "yyyy-MM-dd'T'HH:mm:ss"
             */
            _getUtcSapDate : function(){
                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "yyyy-MM-dd'T'HH:mm"
                });
                
                var oNow = new Date();
                var utcDate = oDateFormat.format(oNow)+":00Z"; 
                console.log("utcDate",utcDate);
                return utcDate;
            },
  
            /**
             * @public
             * @param {*} oEvent 
             * @see table 행추가, 신규 Row
             */
            onCreateRow : function (oEvent) {
                console.group("onCreate");   

                var tableName="mainList",
                    bSub = false,
                    oContext;
                    
                if(oEvent.getSource().sId.indexOf("buttonSubAddRow")>-1){
                    tableName = "subList";
                    bSub = true;
                }
               
                console.log("tableName: " + tableName);

                var oUiModel = this.getModel("ui"), 
                    oTable = this.byId(tableName);

                var oBinding = oTable.getBinding("rows"),
                    today = this._getToday(),
                    utcDate = this._getUtcSapDate(); 

                //mainTable Create Row
                //system_create_dtm 확인해야함
                //subTable Crate Row
                if(!bSub){

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
                        "create_user_id": "Admin",
                        "update_user_id": "Admin",
                        "system_create_dtm": utcDate,
                        "system_update_dtm": utcDate
                    });
                    
                }else{
                
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
                            "create_user_id": "Admin",
                            "update_user_id": "Admin",
                            "system_create_dtm": utcDate,
                            "system_update_dtm": utcDate
                        });                    
                }

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

                console.groupEnd();
            },

            /**             
             * @public
             * @param {
             * } oControlEvent 
             */
            onDelete : function (oControlEvent) {
                console.group("onDelete");

                var oTable;
                
                if(oControlEvent.getSource().sId.indexOf("buttonSubDeleteRow")>-1){
                    oTable = this.byId("subList");
                    console.log("subList Row Delete Button Click");                    
                }else{
                    oTable = this.byId("mainList");
                    console.log("mainList Row Delete Button Click");                    
                }
                 
                var indices = oTable.getSelectedIndices();  
                if(indices.length<1){
                    MessageBox.show("삭제할 항목을 선택해야 합니다.", {
                        icon: MessageBox.Icon.ERROR,
                        title: "항목 선택 오류",
                        actions: [MessageBox.Action.OK],
                        styleClass: "sapUiSizeCompact"
                    });

                }else{

                    MessageBox.confirm("선택된 항목을 삭제 하시 겠습니까?", {
                        title : "삭제 확인",
                        initialFocus : sap.m.MessageBox.Action.CANCEL,
                        onClose : function(sButton) {
                            if (sButton === MessageBox.Action.OK) {
                                for (var i = 0; i < indices.length; i++) {
                                    var idx = indices[i];     
                                    if (oTable.isIndexSelected(idx)) { 
                                        oTable.getContextByIndex(idx).delete("$auto").then(function () {   
                                                MessageToast.show("삭제가 성공 하였습니다.");
                                                oTable.clearSelection();
                                        }.bind(this), function (oError) {
                                            MessageBox.error(oError.message);
                                        });
                                    }
                                }
                            } else if (sButton === MessageBox.Action.CANCEL) {
                                return;
                            };
                        }
                    });                    
                 }
                 console.groupEnd();
		    },

            /**
             * @private
             * @param {*} oMainListContext rowIndex
             * @see subList 테이블 아이템을 바인딩 한다. 
             */
            _onSubListBinding : function (rowIndex){
                console.group("_onSubListBinding");

                var oMainModel = this.getModel("mainModel"),
                    oView = this.getView(),
                    oSubList = this.byId("subList");                

                var oSelectRow = oMainModel.getProperty("/selectrow");
                console.log("oSelectRow.tenant_id", oSelectRow.tenant_id);
                console.log("oSelectRow.company_code", oSelectRow.company_code);
                console.log("oSelectRow.control_option_code", oSelectRow.control_option_code);
                    
                //sub model filter
                var oFilter1 = new Filter("tenant_id", FilterOperator.EQ, oSelectRow.tenant_id),   
                    oFilter2 = new Filter("company_code", FilterOperator.EQ, oSelectRow.company_code),   
                    oFilter3 = new Filter("control_option_code", FilterOperator.EQ, oSelectRow.control_option_code);                                   

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
             * @see Ui에서의 수정사항이 있는지 체크 합니다. 
             */
            _setUIChanges : function (bHasUIChanges) {

                if (this._bTechnicalErrors) {                    
                    bHasUIChanges = true;
                } else if (bHasUIChanges === undefined) {
                    bHasUIChanges = this.getView().getModel().hasPendingChanges();
                }
                
                var oUiModel = this.getModel("ui");
                oUiModel.setProperty("/hasUIChanges", bHasUIChanges);
            },

            /**
             * @public
             * @param {*} oEvent 
             * @see main 과 sub 테이블의 변경 내용을 저장 합니다. 
             */
            onSave : function (oEvent) {
                console.group("onSave");
                var sGroupId = "MainUpdateGroup",
                    oTable;

                if(oEvent.getSource().sId.indexOf("buttonSubSaveRow")>-1){
                    oTable = this.byId("subList"),
                    sGroupId = "SubUpdateGroup";
                    console.log("sub save");
                }else{
                    oTable = this.byId("mainList");
                    console.log("main save");
                }
                
                var rows = oTable.getRows(),
                    indices = oTable.getSelectedIndices(),         
                    oBinding = oTable.getBinding("rows"),
                    oUiModel = this.getView().getModel("ui"),
                    that = this;

                if (!oBinding.hasPendingChanges()) {
                   MessageBox.error("수정한 내용이 없습니다.");
                   return;
                }                 

                MessageBox.confirm("저장 하시 겠습니까?", {
                    title : "저장 확인",
                    initialFocus : sap.m.MessageBox.Action.CANCEL,
                    onClose : function(sButton) {
                        if (sButton === MessageBox.Action.OK) {
                            that._submitBatch(sGroupId);  
                            
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
                
                var fnSuccess = function () {
                    oView.setBusy(false);
                    oView.getModel("ui").setProperty("/hasUIChanges", oView.getModel().hasPendingChanges());
                    MessageToast.show("저장에 성공 하였습니다.");                   
                }.bind(this);

                var fnError = function (oError) {
                    this._setBusy(false);
                    this._setUIChanges(false);
                    MessageBox.error(oError.message);
                }.bind(this);
                            
                // 동시에 진행하니 에러남.
                // 그룹아이디로 진행해도 에러남.
                // var oTable = this.byId("mainList"),         
                // indices = oTable.getSelectedIndices(); 

                // for (var i = 0; i < indices.length; i++) {
                //     var idx = indices[i];     
                //     if (oTable.isIndexSelected(idx)) { 
                //         oTable.getContextByIndex(idx).delete("$auto").then(function () {   
                //                 //MessageToast.show("삭제");
                //         }.bind(this), function (oError) {
                //             MessageBox.error(oError.message);
                //         });
                //     }
                // }
                                
                return oView.getModel().submitBatch(sGroupId).then(fnSuccess, fnError);
               // return oView.getModel().submitBatch(sGroupId).then(resetBusy, resetBusy);

                console.groupEnd();
            }

        });
});
