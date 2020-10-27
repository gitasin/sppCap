sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/uxap/ObjectPageSection"
],
    function (BaseController, JSONModel, MessageToast, MessageBox, Filter, FilterOperator, ObjectPageSection) {
        "use strict";

        return BaseController.extend("spp.portal.controller.Launchpad", {

            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("spp/portal/mockdata") + "/apps.json");
                this.getView().setModel(oModel);

                var oLaunchpadSections = this.getView().byId('launchpadSections');
                if (oLaunchpadSections) {
                    debugger;
                    //oLaunchpadSections.setAggregation("sections", new ObjectPageSection());
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
            }

        });
    }
);
