sap.ui.define(["sap/fe/core/PageController"], function (PageController) {
  "use strict";

  return PageController.extend("books.ext.main.controller.BaseController", {
    navAuthors() {
      this.getRouter().navTo("BooksAuthors");
    },
    navBooks() {
      this.getRouter().navTo("BooksMain");
    },
    navBook(id) {
      this.getRouter().navTo("BooksBook", { bookId: id });
    },
    getRouter() {
      return this.getAppComponent().getRouter();
    },
  });
});
