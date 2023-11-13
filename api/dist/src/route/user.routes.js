"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_authenticated_1 = require("../middleware/user.authenticated");
const user_controller_1 = require("../controller/user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/', new user_authenticated_1.Middleware().isAuthenticated, new user_controller_1.UserController().insertUser);
userRoutes.get('/', new user_authenticated_1.Middleware().isAuthenticated, new user_controller_1.UserController().listUsers);
userRoutes.get('/:id', new user_authenticated_1.Middleware().isAuthenticated, new user_controller_1.UserController().getUserById);
userRoutes.delete('/:id', new user_authenticated_1.Middleware().isAuthenticated, new user_controller_1.UserController().deleteUser);
userRoutes.put('/', new user_authenticated_1.Middleware().isAuthenticated, new user_controller_1.UserController().updateUser);
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map