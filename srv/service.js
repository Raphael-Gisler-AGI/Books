const cds = require("@sap/cds");

class Service extends cds.ApplicationService {
  async init() {

    const { Books } = this.entities;

    this.before(["CREATE", "UPDATE"], Books, async (req) => {
      if (req.data.pages <= 0) {
        req.error(400, "The amount of pages must be bigger than 0");
      }
    })

    return await super.init();
  }
}

module.exports = Service;
