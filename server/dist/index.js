"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 4000;
const __main__ = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    (0, routes_1.default)(app);
    app.listen(PORT, () => {
        console.log(`Listening at port ${PORT}`);
    });
};
__main__();
//# sourceMappingURL=index.js.map