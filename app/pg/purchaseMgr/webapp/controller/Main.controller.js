/**
 * 작성일 :
 * 화면ID :
 * 
 */

sap.ui.define([      
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "pg/purchaseMgr/controller/BaseController",         
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/FilterType",
        "sap/ui/model/Sorter",
        "sap/ui/model/json/JSONModel",
        "sap/m/Token",        
        "sap/m/MessageStrip",
        "sap/ui/core/InvisibleMessage", 
        "sap/ui/core/library",
        "sap/ui/comp/library",
        "sap/m/SearchField",
        "sap/m/ColumnListItem",
        "sap/m/SearchField",
        "sap/ui/model/type/String",
        "sap/m/Label",
        "sap/ui/core/Fragment",
        "sap/ui/core/util/MockServer",
        "sap/ui/model/odata/v2/ODataModel"
        ], function ( MessageBox, MessageToast,  Controller, Filter, FilterOperator, FilterType, Sorter, JSONModel, Token, MessageStrip, InvisibleMessage, library, compLibrary, SearchField, ColumnListItem, typeString, Label, Fragment, MockServer, ODataModel) {
        "use strict";
        
        var InvisibleMessageMode = library.InvisibleMessageMode;
        
		return Controller.extend("pg.purchaseMgr.controller.Main", {
			onInit: function () {
                console.group("onInit");

            //this.getContentDensityClass();

                //view page 초기 셋팅 (컨트롤 등)
                this._createView();

                //조회나 수정 페이지 일경우 사용자 데이타 로드 
                this._getLoadData();

                //view page controls set key or item or values
                this._setSetData();

                console.groupEnd();
            },
                   
                    
            /**
             * Note : controller.js 내부에서 사용될 메세지를 정의 합니다. (i18n 구성이후 변경)
             * @private
             */
            _setMessage : function() {
                console.group("_setMessage");

                console.groupEnd();
            },

            /**
             *  view에서 사용할 객체를 생성합니다.
             * @private
             */
            _createView : function() {
                console.group("_createView");
                
                this.oInvisibleMessage = InvisibleMessage.getInstance();
                
                var oUiModel = new JSONModel({                          
                            bEditMode : true
                            
                });     

                this.setModel(oUiModel, "ui");     

                console.groupEnd();
            },   


            /**
             * 화면에 필요한 데이타를 로드 
             * @private
             * @param (String) : mid
             */
            _getLoadData : function(mid) {
              console.group("_getLoadData");

              var oView = this.getView();          
              console.groupEnd();
            },
 
            /**
             * 선택한 대상에 맞는 데이타 컨트롤에 셋팅
             * 사용자가 선택한 항목에 대한 값을 컨트롤에 셋팅한다. 테이블은 바로 바인딩 과정 없이 바인딩 한다. 
             * 실제 데이타 모델로 변경해야함
             * 배열로 구성된 데이타 부분은 직접 바인딩 함
             * @private
             * @param (String) : mid
             */
            _setSetData : function(){
              console.group("_setSetData");
              var oView = this.getView(),
                  oModel =this.getOwnerComponent().getModel("odata");

              //oModel = sap.ui.core.getModel("odata");
              console.dir(oModel);              
              //구분
              oView.byId("comboBoxType").setSelectedKey(oModel.getProperty("/comboBoxType"));

              //시나리오
              oView.byId("comboboxScenario").setSelectedKey(oModel.getProperty("/comboboxScenario"));
              
              //Active 0 Active, 1 In Active
              var oRadioSelectIndex = oModel.getProperty("/radioActive");
              oRadioSelectIndex = parseInt(oRadioSelectIndex);
              oView.byId("radioActive").setSelectedIndex(oRadioSelectIndex);
              
              //구매유형
              oView.byId("comboBoxRawMaterials").setSelectedKey(oModel.getProperty("/comboBoxRawMaterials"));

              //회사
              oView.byId("comboboxOffice").setSelectedKey(oModel.getProperty("/comboboxOffice"));
              
              //법인
              oView.byId("conboBoxNatioinStatus").setSelectedKey(oModel.getProperty("/conboBoxNatioinStatus"));

              //모니터링 목적 
              ///richTextEditor : setValue getValue setEditable setEditorType setRequired setTextDirection setValue
              oView.byId("reMonitoringPurpose").setHeight("150px");

              //remo.setTextDirection("setTextDirection");
              oView.byId("reMonitoringPurpose").setValue(oModel.getProperty("/reMonitoringPurpose"));
              //시나리오 설명
              oView.byId("reMonitoringPurposeDetail").setValue(oModel.getProperty("/reMonitoringPurposeDetail"));
              //운영방식 
              //checkbox getSelected() getText() setSelected() editable
    
              oView.byId("checkBoxOMType1").setSelected(oModel.getProperty("/checkBoxOMType1"));
              oView.byId("checkBoxOMType2").setSelected(oModel.getProperty("/checkBoxOMType2"));
              oView.byId("checkBoxOMType3").setSelected(oModel.getProperty("/checkBoxOMType3"));
              
              //소스시스템
              oView.byId("reSourceSystem").setValue(oModel.getProperty("/reSourceSystem"));
              //소스시스템 상세설명
              oView.byId("reSourceSystemDetail").setValue(oModel.getProperty("/reSourceSystemDetail"));
        
              //Collection---------------
              //담당자
              //UserCollection

              //주기
              //KeysSelected

              //시그널
              //Signal
              
              


              console.groupEnd();
            },

          
            /**
             * today
             * @private
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
             * UTC 기준 DATE를 반환합니다.
             * @private
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
             * mainList에서 항목에 대한 추가 액션(추가, 삭제, 복사)일때 subList 테이블 초기화 해준다. 
             * refresh 등 odata4 에 대한 테이블 초기화 처리가 필요함
             * mainList 테이블에 종속된 데이타 동시 삭제 로직 handler 필요함 
             * @private
             */
            _setFilter : function(){
                console.group("_setFilter");
                var oList = this.byId("mainList");  
              
                //sub model filter
                var oFilter1 = new Filter("tenant_id", FilterOperator.EQ, "0000");  
   
                var oBinding = oList.getBinding("rows");

                    oBinding.filter([                
                        oFilter1
                    ]);
                console.groupEnd();
            },            
           /**                
             * MessageStript 출력
             * type ["Information", "Warning", "Error", "Success"]
             * 약어 i, w, e, s
             *  */    
            _showMsgStrip: function (messageType, message) {
                console.group("onShowMsgStrip");
                
                var oMs = sap.ui.getCore().byId("msgStrip"),
                    msgType = "Information";
                    
                switch(messageType){
                    case "i" : msgType = "Information"; break;
                    case "w" : msgType = "Warning"; break;
                    case "e" : msgType = "Error"; break;
                    case "s" : msgType = "Success"; break;
                    default : msgType = "Information";
                }
                //i, w, e, s                
                //messageType ["Information", "Warning", "Error", "Success"];

                if (oMs) {
                    oMs.destroy();
                }
                this._generateMsgStrip(msgType, message);
                console.groupEnd();
            },

            _generateMsgStrip: function (messageType, message) {
                console.group("_generateMsgStrip");

                //i, w, e, s
                //["Information", "Warning", "Error", "Success"];

                var oVC = this.byId("oVerticalContent"),
                    oMsgStrip = new MessageStrip("msgStrip", {
                        text: message,
                        showCloseButton: true,
                        showIcon: true,
                        type: messageType
                    });

                this.oInvisibleMessage.announce("New Message " + messageType + " " + message, InvisibleMessageMode.Assertive);
                oVC.addContent(oMsgStrip);
                
                console.groupEnd();
            },

            
            /**
             * signalList Insert Data(Items)
             * @public
             */
            onCreateRow : function(oEvent) {
                console.group("onCreateRow");
                
                var oModel = this.getOwnerComponent().getModel("odata");
                //this.getView().getModel("odata");
                // var oTable = this.getView().byId("signalList");
                // var oModel = oTable.getModel();
                // oModel.push(oNewData);
                var oSignal = oModel.getProperty("/SignalCollection");
                var oNewData = {
                                sid : Math.floor(Math.random() * 1000),
                                condition : "LessThen",
                                value1 : Math.floor(Math.random() * 100),
                                value2 : Math.floor(Math.random() * 100),
                                status : "A"
                };                
            
                oSignal.push(oNewData);
                oModel.refresh(true);
                //setFirstVisibleRow( )
                //신규등록행으로 포커스 이동 
                console.dir(oSignal);


                console.groupEnd();
            },

            ondelete1 : function (oEvent) {
                console.group("ondelete1");
                var m = oEvent.getSource().getParent();
                var tbl = this.getView().byId("signalList");
                var idx = m.getBindingContextPath();
                idx = idx.charAt(idx.lastIndexOf('/')+1);

                if (idx !== -1) {
                    var a = tbl.getModel(); // if named model - var a= tbl.getModel(ModelName);
                    var data = a.getData();
                    var removed = data.splice(idx,1);
                    a.setData(data);
                }
                console.groupEnd();
            },

            onDelete : function () {
                console.group("onDelete-");
                //oModel = this.getView().getModel("odata"),
                var oModel = this.getOwnerComponent().getModel("odata"),
                    oSignal = oModel.getProperty("/SignalCollection"),
                    oTable = this.byId("signalList"),
                    oIindices  = oTable.getSelectedIndices();

                    
                if (oIindices.length > 0) {
                    //this.getView().setBusy(true);                    
                    for (var i = 0; i < oIindices.length; i++) {
                        var idx = oIindices[i];     
                        if (oTable.isIndexSelected(idx)) { 
                           
                           console.log("oIindices[i]", oIindices[i]);
                            console.log("idx", idx);
                            console.log("oSignal", oSignal);
                            oSignal.splice(idx, 1);  
                            oModel.setProperty("/SignalCollection", oSignal);                            
                    
                        }
                    
                   // this.getView().setBusy(false);
                    }
                    oTable.clearSelection();   
                    oModel.refresh(true);
                    MessageToast.show("삭제 되었습니다.");

                }else{
                    MessageBox.error("선택된 행이 없습니다.");
                }
                console.groupEnd();
            },

            /**
             * History Window
             * @public
             * @param {Event} oEvent 
             */  
            onHistory : function (oEvent){
                console.group("onHistory");

                var oButton = oEvent.getSource();   
               
                if (!this._HistoryPopover) {

                    this._HistoryPopover = sap.ui.xmlfragment("historyPopover_id","pg.purchaseMgr.view.HistoryPopover", this);
                    this.getView().addDependent(this._HistoryPopover);
                    this._HistoryPopover.open();
                }else{
                  //this._HistoryPopover.open(oButton);//값 전달할때.
                  this._HistoryPopover.open();
                }

                console.groupEnd();
            },
            /**
             * @private 
             * @see history button setTokens
             */
            _getDefaultTokens: function () {
                
                var oToken = new Token({
                    key: "HistoryData",
                    text: "PurchaseMgr"
                });

                return [oToken];
            },


             /** ------------------------------------------------------------
             * Search Control
             * -------------------------------------------------------------
             */


            onExit : function () {
                if (this._oPopover) {
                    this._oPopover.destroy();
                }
            },
            
		});
	});
