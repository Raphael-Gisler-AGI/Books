sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("basicbooks.controller.CreateBook", {
    async onPressCreate() {
        await this.getOwnerComponent().getModel().bindContext("/createBook(...)").execute();

        debugger
    }
  })
});
