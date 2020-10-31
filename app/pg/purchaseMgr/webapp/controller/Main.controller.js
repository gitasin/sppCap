/**
 * 작성일 : 2020.10.21
 * 화면ID :
 * 
 * 1. delete 작업시 message confirm 작업 
 * 2. edit 버튼 작업시 uiModel 활용 으로 정리
 * 3. 각 버튼 처리 확인
 * 4. signalList 에서의 담당자 fragment 오픈 처리
 * 5. 화면 기획서 문서와 담당자 확인 필요.
 * 6. 각종 버튼 이벤트 처리 완료시 메세지 처리
 * 7. History Window 재처리 
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
                //this._getLoadData();

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
                    bEditMode : true,
                    busy : false
                });     

                this.oViewParam = new JSONModel({
                    signalList : false
                }); 

                this.setModel(oUiModel, "ui");     

                console.groupEnd();
            },   

            /**
             * 화면에 필요한 데이타 로드 
             * Note: manifest.jso 파일 model설정으로 참고 (이외 참조 model 사용시 작업)
             * @private
             * @param (String) : mid
             */
            _getLoadData : function(mid) {
              console.group("_getLoadData");

              //var oView = this.getView();  
              
              
              console.groupEnd();
            },
 
            /**
             * 선택한 대상에 맞는 데이타 컨트롤에 셋팅
             * 사용자가 선택한 항목에 대한 값을 컨트롤에 셋팅한다. 배열 객체는 직접 바인딩 한다. 
             * Note : manifest.json에서 실제 데이타 모델로 변경필요, table 모델에 따라 변경필요.
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
             * @private
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

            /**
             * Strip Message 호출
             * @private
             * @param {String} messageType 
             * @param {String} message 
             */
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
             * signalList Row Insert
             * Note: sid 및 value 값 수정 필요 
             * Odata 바인딩 작업시 변경이 필요할수 있음
             * @public
             */
            onSignalListAddRow : function(oEvent) {
                console.group("onCreateRow");
                
                var oModel = this.getOwnerComponent().getModel("odata");

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

            /**
             * SignalList Row Item 삭제
             * Note: Odata 바인딩 작업시 변경이 필요할수 있음
             * @public
             */
            onSignalListDelete : function (oEvent) {
                console.group("onSignalListDelete");

                var oModel = this.getOwnerComponent().getModel("odata"),
                    oSignal = oModel.getProperty("/SignalCollection"),
                    oTable = this.byId("signalList"),
                    oIindices  = oTable.getSelectedIndices();

                if (oIindices.length > 0) {
                    
                    this.getView().setBusy(true);   
                    
                    for (var i = oIindices.length; i >-1; i--) {
                        var idx = oIindices[i];     
                        if (oTable.isIndexSelected(idx)) {       
                            oSignal.splice(oIindices[i], 1);  
                        }
                    }
                    this.getView().setBusy(false);
                    oModel.setProperty("/SignalCollection", oSignal);  
                    oTable.clearSelection();   
                    oModel.refresh(true);
                }
                console.groupEnd();
            },

            /**
             * view item 삭제
             * @private
             */
            onDelete : function () {
                console.group("onDelete-");
            
                   // MessageToast.show("삭제 되었습니다.");

                  //  MessageBox.error("선택된 행이 없습니다.");
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

            /**
             * system function
             */
            onExit : function () {
                if (this._oPopover) {
                    this._oPopover.destroy();
                }
            },
            
		});
	});
