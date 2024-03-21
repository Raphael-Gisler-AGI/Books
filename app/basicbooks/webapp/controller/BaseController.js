sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("basicbooks.controller.BaseController", {
    getModel() {
      return this.getOwnerComponent().getModel();
    },
    getRouter() {
        return this.getOwnerComponent().getRouter();
    }
  });
});