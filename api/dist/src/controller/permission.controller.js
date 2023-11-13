"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const permission_repository_1 = require("../repository/permission.repository");
const permission_dto_1 = require("../dto/permission.dto");
class PermissionController {
    async insertPermission(req, res) {
        try {
            const permission = req.body;
            const data = await new permission_dto_1.PermissionDTO().validatePermission(permission, 1);
            if (!(data === null || data === void 0 ? void 0 : data.id)) {
                const group = await new permission_repository_1.PermissionRepository().getPermissionByName(data === null || data === void 0 ? void 0 : data.name);
                if (group)
                    throw new Error('{"field": "nameExists"}');
            }
            const response = await new permission_repository_1.PermissionRepository().insertPermission(data);
            if (response.message)
                return res.status(400).json({ field: "insert" });
            return res.status(200).json('{"field": "insertePermission"}');
        }
        catch (error) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }
    async getPermissionById(req, res) {
        const permissionId = req.params.id;
        const permissionIdParsed = Number(permissionId);
        const lstpermission = await new permission_repository_1.PermissionRepository().getPermissionById(permissionIdParsed);
        return res.status(200).json(lstpermission);
    }
    async deletePermission(req, res) {
        const permissionId = req.params.id;
        const permissionIdParsed = Number(permissionId);
        const lstpermission = await new permission_repository_1.PermissionRepository().deletePermission(permissionIdParsed);
        return res.status(200).json('{"field": "permissionDeletedSuccessfully"}');
    }
    async updatePermission(req, res) {
        const permission = req.body;
        const data = await new permission_dto_1.PermissionDTO().validatePermission(permission);
        const response = await new permission_repository_1.PermissionRepository().insertPermission(data);
        return res.status(200).json('{"field": "permissionUpdatedSuccessfully"}');
    }
    async listPermission(_req, res) {
        const permission = await new permission_repository_1.PermissionRepository().getPermission();
        const data = await new permission_dto_1.PermissionDTO().getPermissions(permission);
        return res.status(200).json(data);
    }
}
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map