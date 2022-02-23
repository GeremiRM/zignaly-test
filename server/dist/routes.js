"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phones_controllers_1 = require("./controllers/phones.controllers");
const routes = (app) => {
    app.get("/phones", phones_controllers_1.getAllPhones);
    app.get("/phones/:id", phones_controllers_1.getPhoneById);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map