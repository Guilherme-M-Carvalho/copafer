"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repository_1 = require("../repository/user.repository");
const user_dto_1 = require("../dto/user.dto");
class UserController {
    async insertUser(req, res) {
        try {
            const user = req.body;
            const { data, worker } = await new user_dto_1.UserDTO().validateUser(user, 1);
            const emailExists = await new user_repository_1.UserRepository().getByEmail({ email: data.email });
            if (!!emailExists)
                throw new Error('{"field": "emailExists"}');
            const response = await new user_repository_1.UserRepository().insertUser(data, worker);
            if (response.message)
                return res.status(400).json({ field: "insert" });
            return res.status(200).json('{"field": "inserteUser"}');
        }
        catch (error) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }
    async getUserById(req, res) {
        const permissionId = req.params.id;
        const permissionIdParsed = Number(permissionId);
        const lstpermission = await new user_repository_1.UserRepository().getUserById(permissionIdParsed);
        return res.status(200).json(lstpermission);
    }
    async deleteUser(req, res) {
        const permissionId = req.params.id;
        const permissionIdParsed = Number(permissionId);
        const lstpermission = await new user_repository_1.UserRepository().deleteUser(permissionIdParsed);
        return res.status(200).json('{"field": "userDeletedSuccessfully"}');
    }
    async updateUser(req, res) {
        try {
            const user = req.body;
            const { data, worker } = await new user_dto_1.UserDTO().validateUser(user);
            data.id = Number(data.id);
            if (!await new user_repository_1.UserRepository().validateUser(data.id))
                throw new Error('{"field": "invalidUser"}');
            const response = await new user_repository_1.UserRepository().insertUser(data, worker);
            if (response.message)
                return res.status(400).json({ field: "update" });
            return res.status(200).json('{"field": "userUpdatedSuccessfully"}');
        }
        catch (error) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }
    async listUsers(_req, res) {
        const users = await new user_repository_1.UserRepository().getUsers();
        const data = await new user_dto_1.UserDTO().getUsers(users);
        return res.status(200).json(data);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map