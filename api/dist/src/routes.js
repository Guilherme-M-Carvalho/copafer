"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_routes_1 = __importDefault(require("./route/store.routes"));
const user_routes_1 = __importDefault(require("./route/user.routes"));
const permission_routes_1 = __importDefault(require("./route/permission.routes"));
const lists_routes_1 = __importDefault(require("./route/lists.routes"));
const login_routes_1 = __importDefault(require("./route/login.routes"));
class Routes {
    handler(app) {
        app.use('/api/login', login_routes_1.default);
        app.use('/api/lists', lists_routes_1.default);
        app.use('/api/permission', permission_routes_1.default);
        app.use('/api/user', user_routes_1.default);
        app.use('/api/store', store_routes_1.default);
    }
    ;
}
exports.default = Routes;
;
//# sourceMappingURL=routes.js.map