"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
const permission_repository_1 = require("./permission.repository");
const UserEntity = data_source_1.AppDataSource.getRepository(user_1.User);
class UserRepository {
    constructor() {
        this.errorMessage = '{"field": "dbError"}';
    }
    async validateUser(id) {
        const validateUser = await UserEntity.findOneBy({ id: id });
        return validateUser;
    }
    async insertUser(data, worker) {
        try {
            const response = await UserEntity.save(data);
            return response;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async getUser() {
        try {
            let response = await UserEntity.find({ where: { deleted: false }, select: { name: true, email: true, id: true } });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async getUserById(id) {
        try {
            let response = await UserEntity.findOne({ where: { id: id }, relations: { group: true } });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async getByEmail({ email, id }) {
        try {
            let response = await UserEntity.findOne({ where: { email: email } });
            return response;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async getLists() {
        const permission = await new permission_repository_1.PermissionRepository().getPermission();
        let response = {
            permission
        };
        return response;
    }
    async getUsers() {
        try {
            let response = await UserEntity.find({
                where: { deleted: false },
                select: { id: true, name: true, group: true, email: true },
                relations: {
                    group: true
                }
            });
            return response;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async deleteUser(id) {
        try {
            if (!await this.validateUser(id)) {
                this.errorMessage = '{"field": "invalidUser"}';
                throw new Error(this.errorMessage);
            }
            await UserEntity.update({ id: id }, { deleted: true });
            return "ok";
        }
        catch (error) {
            throw new Error(this.errorMessage);
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map