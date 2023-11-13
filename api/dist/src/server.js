"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
new routes_1.default().handler(app);
const pathReact = __dirname + '/views/';
app.use(express_1.default.static(pathReact));
app.get('*', function (req, res) {
    res.sendFile(pathReact + "index.html");
});
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        try {
            JSON.parse(err.message);
        }
        catch (error) {
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(400).json(JSON.parse(err.message));
    }
    return res.status(500).json({
        status: 'error',
        message: "Internal server error"
    });
});
data_source_1.AppDataSource.initialize().then(async () => {
    console.log('BD Conectado!');
    app.listen(80, () => console.log("deu certo"));
});
//# sourceMappingURL=server.js.map