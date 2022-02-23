"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneById = exports.getAllPhones = void 0;
const data_json_1 = __importDefault(require("../data.json"));
const getAllPhones = (_req, res) => {
    try {
        res.status(200).send(data_json_1.default);
    }
    catch (e) {
        res.sendStatus(404);
    }
};
exports.getAllPhones = getAllPhones;
const getPhoneById = (req, res) => {
    try {
        const { id } = req.params;
        const phone = data_json_1.default.find((phone) => phone.id === parseInt(id));
        if (!phone) {
            throw Error;
        }
        res.status(200).send(phone);
    }
    catch (e) {
        res.sendStatus(404);
    }
};
exports.getPhoneById = getPhoneById;
//# sourceMappingURL=phones.controllers.js.map