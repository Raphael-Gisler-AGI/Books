sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("books.ext.main.controller.Authors", {
    onPressNavBooks() {
      this.navBooks();
    }
  });
});
