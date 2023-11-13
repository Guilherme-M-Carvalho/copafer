"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permission_controller_1 = require("../controller/permission.controller");
const user_authenticated_1 = require("../middleware/user.authenticated");
const permissionRoutes = (0, express_1.Router)();
permissionRoutes.post('/', new user_authenticated_1.Middleware().isAuthenticated, new permission_controller_1.PermissionController().insertPermission);
permissionRoutes.get('/', new user_authenticated_1.Middleware().isAuthenticated, new permission_controller_1.PermissionController().listPermission);
permissionRoutes.get('/:id', new user_authenticated_1.Middleware().isAuthenticated, new permission_controller_1.PermissionController().getPermissionById);
permissionRoutes.delete('/:id', new user_authenticated_1.Middleware().isAuthenticated, new permission_controller_1.PermissionController().deletePermission);
permissionRoutes.put('/', new user_authenticated_1.Middleware().isAuthenticated, new permission_controller_1.PermissionController().updatePermission);
exports.default = permissionRoutes;
//# sourceMappingURL=permission.routes.js.map