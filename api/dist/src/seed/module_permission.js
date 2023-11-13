"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module_permission = void 0;
const permissionModule_1 = require("../../src/entity/permissionModule");
class Module_permission {
    async run(dataSource, factoryManager) {
        const sysPermission = dataSource.getRepository(permissionModule_1.PermissionModule);
        await sysPermission.query(`INSERT INTO sys_permission_module (permissionId, moduleId) 
        VALUES (1, 1), (2,1), (3, 1), (4, 1), (5, 1),
        (1, 2), (2,2),(3,2),(4,2),(5, 2),
        (1, 3), (2, 3), (3, 3), (5, 3),
        (4, 2);`);
    }
}
exports.Module_permission = Module_permission;
//# sourceMappingURL=module_permission.js.map