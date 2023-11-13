"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSeeder = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const module_permission_1 = require("./module_permission");
class MainSeeder {
    async run(dataSource, factoryManager) {
        await (0, typeorm_extension_1.runSeeder)(dataSource, module_permission_1.Module_permission);
    }
}
exports.MainSeeder = MainSeeder;
//# sourceMappingURL=MainSeeder.js.map