"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsController = void 0;
const permission_repository_1 = require("../repository/permission.repository");
const permission_dto_1 = require("../dto/permission.dto");
const user_repository_1 = require("../repository/user.repository");
const user_dto_1 = require("../dto/user.dto");
class ListsController {
    async getListsPermission(req, res) {
        const lists = await new permission_repository_1.PermissionRepository().getLists();
        const listsDto = await new permission_dto_1.PermissionDTO().getPermissionsLists(lists);
        return res.status(200).json(listsDto);
    }
    async getListsUser(req, res) {
        const lists = await new user_repository_1.UserRepository().getLists();
        const listsDTO = await new user_dto_1.UserDTO().getLists(lists);
        return res.status(200).json(listsDTO);
    }
}
exports.ListsController = ListsController;
//# sourceMappingURL=lists.controller.js.map