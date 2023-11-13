"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const permission_1 = require("../../src/entity/permission");
class Permissions {
    async run(dataSource, factoryManager) {
        const permission = dataSource.getRepository(permission_1.Permission);
        await permission.query(`INSERT INTO sys_permission (name) VALUES ("Criar"), ("Visualizar"), ("Editar"), ("Deletar"), ("Exportar")`);
    }
}
exports.Permissions = Permissions;
//# sourceMappingURL=permission.js.map