sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("books.ext.main.controller.Main", {
    onPressNavAuthors() {
      this.navAuthors();
    },
  });
});
