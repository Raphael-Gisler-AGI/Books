sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("basicbooks.view.Book", {
    onInit() {
      this.getRouter()
        .getRoute("RouteBook")
        .attachPatternMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      const id = oEvent.getParameter("arguments").bookKey;
      this.getView().bindElement(`/Books(${id})`);
    },
  });
});
