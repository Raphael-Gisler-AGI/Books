sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/ColumnListItem",
    "sap/m/Input",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
  ],
  function (
    BaseController,
    JSONModel,
    ColumnListItem,
    Input,
    MessageBox,
    MessageToast
  ) {
    "use strict";

    return BaseController.extend("basicbooks.controller.Main", {
      onInit() {
        const editModeTemplate = new ColumnListItem({
          cells: [
            new Input({
              value: "{title}",
            }),
            new Input({
              type: "Number",
              value: "{pages}",
            }),
          ],
        });
        this.getView().setModel(
          new JSONModel({
            editActive: false,
            editTemplate: editModeTemplate,
            normalTemplate: this.byId("normalModeTemplate"),
          }),
          "ui"
        );
      },
      onPressBook(oEvent) {
        const id = oEvent.getSource().getBindingContext().getProperty("ID");
        this.getRouter().navTo("RouteBook", { bookKey: id });
      },
      onPressEdit() {
        this._toggleEditMode();
        this._bindTable("editTemplate");
      },
      onPressCancel() {
        this._toggleEditMode();
        this._bindTable("normalTemplate");
        this._resetEditedBooks();
      },
      async onPressSave() {
        await this.getModel().submitBatch("books");
        this._toggleEditMode();
        this._bindTable("normalTemplate");
        this._resetEditedBooks();
      },
      onAddField() {
        this._getTable().getBinding("items").create();
      },
      onDeleteFields() {
        const table = this._getTable();
        const selectedItems = table.getSelectedItems();
        if (selectedItems.length === 0) {
          MessageToast.show("Please select atleast one book before deleting");
          return;
        }
        const multiple = selectedItems.length === 1 ? "" : "s";
        MessageBox.show(
          `Are you sure you want to delete ${selectedItems.length} book${multiple}?`,
          {
            title: `Delete Book${multiple}`,
            actions: [MessageBox.Action.YES, MessageBox.Action.NO],
            emphasizedAction: MessageBox.Action.YES,
            onClose: (oAction) => {
              if (oAction === MessageBox.Action.YES) {
                debugger;
              }
            },
          }
        );
      },
      _toggleEditMode() {
        const ui = this.getView().getModel("ui");
        ui.setProperty("/editActive", !ui.getProperty("/editActive"));
      },
      _bindTable(templateName) {
        const table = this._getTable();
        const ui = this.getView().getModel("ui");
        const template = ui.getProperty(`/${templateName}`);
        const editActive = ui.getProperty(`/editActive`);
        table.bindItems({
          path: "/Books",
          template: template,
          templateShareable: true,
          parameters: {
            $$updateGroupId: editActive ? "books" : "$auto",
          },
          key: templateName,
        });
      },
      _resetEditedBooks() {
        this.getView().getModel("ui").setProperty("/editedBooks", new Set());
      },
      _getTable() {
        return this.byId("booksTable");
      },
    });
  }
);
