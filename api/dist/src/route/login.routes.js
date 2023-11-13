"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controller/login.controller");
const user_authenticated_1 = require("../middleware/user.authenticated");
const loginRoutes = (0, express_1.Router)();
loginRoutes.get('/session', new user_authenticated_1.Middleware().isAuthenticated, new login_controller_1.LoginController().session);
loginRoutes.post('/login', new login_controller_1.LoginController().login);
loginRoutes.post('/validatePasswordCode', new login_controller_1.LoginController().validatePasswordCode);
loginRoutes.put('/updatePassword', new login_controller_1.LoginController().updatePassword);
exports.default = loginRoutes;
//# sourceMappingURL=login.routes.js.map