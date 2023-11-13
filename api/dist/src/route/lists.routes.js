"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lists_controller_1 = require("../controller/lists.controller");
const listsRoutes = (0, express_1.Router)();
listsRoutes.get('/permission', new lists_controller_1.ListsController().getListsPermission);
listsRoutes.get('/user', new lists_controller_1.ListsController().getListsUser);
exports.default = listsRoutes;
//# sourceMappingURL=lists.routes.js.map