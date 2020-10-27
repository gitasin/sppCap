sap.ui.define([
	"sap/ui/Device",
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/uxap/ObjectPageSection",
    "sap/ui/core/ComponentContainer"
],
    function (Device, BaseController, JSONModel, MessageToast, MessageBox, Filter, FilterOperator, ObjectPageSection, ComponentContainer) {
        "use strict";

        return BaseController.extend("spp.portal.controller.Launchpad", {

            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("spp/portal/mockdata") + "/apps.json");
                this.getView().setModel(oModel);

			    this._setToggleButtonTooltip(!Device.system.desktop);
            },

            onSideNavButtonPress: function(){
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
                this._setToggleButtonTooltip(bSideExpanded);
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            _setToggleButtonTooltip: function (bLarge) {
                var oToggleButton = this.byId('sideNavigationToggleButton');
                if (bLarge) {
                    oToggleButton.setTooltip('Large Size Navigation');
                } else {
                    oToggleButton.setTooltip('Small Size Navigation');
                }
            },

            onCollapseExpandPress: function () {
                var oNavigationList = this.byId("navigationList");
                var bExpanded = oNavigationList.getExpanded();
                oNavigationList.setExpanded(!bExpanded);
            },

            onHideShowSubItemPress: function () {
                var oNavListItem = this.byId("subItemThree");
                oNavListItem.setVisible(!oNavListItem.getVisible());
            },

            onMenuPress: function(oEvent){
                var oTile = oEvent.getSource(),
                    sPath = oEvent.getSource().getBindingContext().getPath(),
                    oModel = this.getView().getModel(),
                    oToolPage = this.getView().byId('toolPage'),
                    sUrl = oModel.getProperty(sPath + '/url'),
                    sComponent = oModel.getProperty(sPath + '/component');

                oToolPage.removeMainContent(0);
                oToolPage.addMainContent(new ComponentContainer({
                    name: sComponent,
                    async: true,
                    url: sUrl
                }));
            },

            onTilePress: function(oEvent){
                // var oTile = oEvent.getSource(),
                //     sPath = oEvent.getSource().getBindingContext().getPath(),
                //     oModel = this.getView().getModel(),
                //     oAppData = oModel.getProperty(sPath | '/app');
                
                // this.getView().byId('pageContainer').setVisible(false);

                oToolPage.removeMainContent(0);
                this.getView().byId('toolPage').addMainContent(new ComponentContainer({
                    name: "cm.controlOptionMgr",
                    async: true,
                    url: "../cm/controlOptionMgr/webapp"
                }));
                
            },
            
            onTilePress2: function(oEvent){
                // var oTile = oEvent.getSource(),
                //     sPath = oEvent.getSource().getBindingContext().getPath(),
                //     oModel = this.getView().getModel(),
                //     oAppData = oModel.getProperty(sPath | '/app');
                
                // this.getView().byId('pageContainer').setVisible(false);

                this.getView().byId('toolPage').removeMainContent(0);
                this.getView().byId('toolPage').addMainContent(new ComponentContainer({
                    name: "cm.codeMgr",
                    async: true,
                    url: "../cm/codeMgr/webapp"
                }));
                
            }

        });
    }
);
