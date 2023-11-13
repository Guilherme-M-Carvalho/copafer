"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRepository = void 0;
const data_source_1 = require("../data-source");
const module_1 = require("../entity/module");
const moduleEntity = data_source_1.AppDataSource.getRepository(module_1.Module);
class ModuleRepository {
    async getModules() {
        const module = await moduleEntity.find({ relations: { permission: true } });
        return module;
    }
}
exports.ModuleRepository = ModuleRepository;
//# sourceMappingURL=module.repository.js.map