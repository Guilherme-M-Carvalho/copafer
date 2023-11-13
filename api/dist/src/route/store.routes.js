"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_controller_1 = require("../controller/store.controller");
const storeRoutes = (0, express_1.Router)();
storeRoutes.get('/:id', new store_controller_1.StoreController().handleFindOne);
storeRoutes.get('/', new store_controller_1.StoreController().handleFind);
storeRoutes.post('/', new store_controller_1.StoreController().handleCreate);
storeRoutes.delete('/:id', new store_controller_1.StoreController().handleDelete);
storeRoutes.put('/', new store_controller_1.StoreController().handleUpdate);
exports.default = storeRoutes;
//# sourceMappingURL=store.routes.js.map