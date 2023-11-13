"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const module_1 = require("../entity/module");
class Modules {
    async run(dataSource, factoryManager) {
        const module = dataSource.getRepository(module_1.Module);
        await module.query(`INSERT INTO sys_module (name, status) VALUES ("Loja", 1), ("Usuários", 1), ("Permissões",1), ("Perfil", 1);`);
    }
}
exports.Modules = Modules;
//# sourceMappingURL=module.js.map