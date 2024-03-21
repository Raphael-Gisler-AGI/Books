const cds = require("@sap/cds");

class Service extends cds.ApplicationService {
  async init() {
    return await super.init();
  }
}

module.exports = Service;
