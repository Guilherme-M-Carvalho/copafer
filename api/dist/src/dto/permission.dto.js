"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionDTO = void 0;
class PermissionDTO {
    async validatePermission(permission, type = 0) {
        var _a, _b;
        if (type === 0) {
            permission.id = Number(permission.id);
            if (!permission.id || isNaN(permission.id))
                throw new Error('{"field": "permissionId"}');
        }
        if (!permission.name)
            throw new Error('{"field": "name"}');
        (_a = permission === null || permission === void 0 ? void 0 : permission.permission) === null || _a === void 0 ? void 0 : _a.map((permi, i) => {
            if (!permi.permission)
                throw new Error(`{"field": "permission", "position": ${i}}`);
        });
        let users = [];
        (_b = permission === null || permission === void 0 ? void 0 : permission.user) === null || _b === void 0 ? void 0 : _b.map((permi, i) => {
            if (!permi.user)
                throw new Error(`{"field": "user", "position": ${i}}`);
            if (!!users.find(use => use == permi.user))
                throw new Error(`{"field": "userDouble", "position": ${i}}`);
            users.push(permi.user);
        });
        return permission;
    }
    async getPermissions(permission) {
        permission.map((permi) => {
            var _a;
            permi.userCount = 0;
            (_a = permi === null || permi === void 0 ? void 0 : permi.user) === null || _a === void 0 ? void 0 : _a.map((user) => {
                if (user.id) {
                    permi.userCount = permi.userCount + 1;
                }
            });
            delete permi.user;
        });
        return permission;
    }
    getPermissionsLists(permission) {
        var _a;
        (_a = permission.module) === null || _a === void 0 ? void 0 : _a.map((mod) => {
            var _a;
            (_a = mod.permission) === null || _a === void 0 ? void 0 : _a.map((perm) => {
                mod[perm.permission.name] = {
                    id: perm.id,
                    checked: false
                };
            });
            delete mod.permission;
        });
        return permission;
    }
    getModules(modules) {
        let permissions = [];
        modules.map((mod) => {
            mod.permission.map((el) => {
                if (!permissions.find((item) => item.id === el.id)) {
                    permissions.push({ id: el.id, name: el.permission.name, module: mod.id });
                }
            });
        });
        return permissions;
    }
}
exports.PermissionDTO = PermissionDTO;
//# sourceMappingURL=permission.dto.js.map