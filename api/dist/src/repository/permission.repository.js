"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = void 0;
const module_repository_1 = require("./module.repository");
const group_1 = require("../entity/group");
const data_source_1 = require("../data-source");
const user_repository_1 = require("./user.repository");
const typeorm_1 = require("typeorm");
const groupEntity = data_source_1.AppDataSource.getRepository(group_1.Group);
class PermissionRepository {
    async validatePermission(id) {
        const validatePermission = await groupEntity.findOneBy({ id: id });
        if (!validatePermission)
            throw new Error('{"field": "invalidPermission"}');
    }
    async insertPermission(data) {
        try {
            let response = await groupEntity.save(data);
            return response;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async getPermissionById(id) {
        try {
            let response = await groupEntity.findOne({ where: { id: id }, relations: { permission: true, user: true } });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async getPermissionByIds(id) {
        try {
            let response = await groupEntity.find({ where: { permission: { group: (0, typeorm_1.In)(id) } }, relations: { permission: true, user: true } });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async getPermissionByName(name) {
        try {
            let response = await groupEntity.findOneBy({ name: name });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async getLists() {
        const module = await new module_repository_1.ModuleRepository().getModules();
        const users = await new user_repository_1.UserRepository().getUser();
        let response = {
            module,
            users
        };
        return response;
    }
    async deletePermission(id) {
        try {
            await this.validatePermission(id);
            await groupEntity.update({ id: id }, { deleted: true });
            return "ok";
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async getPermission() {
        try {
            let response = await groupEntity.find({
                where: { deleted: false },
                select: { id: true, name: true, user: true },
                relations: {
                    user: true
                }
            });
            return response;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
}
exports.PermissionRepository = PermissionRepository;
//# sourceMappingURL=permission.repository.js.map