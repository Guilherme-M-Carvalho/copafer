"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRepository = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
const permission_repository_1 = require("./permission.repository");
const loginRepository = data_source_1.AppDataSource.getRepository(user_1.User);
class LoginRepository {
    constructor() {
        this.errorMessage = '{"field": "dbError"}';
    }
    async loginValidate(email) {
        var _a;
        try {
            const user = await loginRepository.findOne({ where: { email: email }, select: { password: true, email: true, name: true, id: true }, relations: { group: true } });
            const ids = (_a = user === null || user === void 0 ? void 0 : user.group) === null || _a === void 0 ? void 0 : _a.map((gru) => {
                var _a;
                return (_a = gru.group) === null || _a === void 0 ? void 0 : _a.id;
            });
            let permission = [];
            if (ids) {
                permission = await new permission_repository_1.PermissionRepository().getPermissionByIds(ids);
            }
            const newUser = {
                ...user,
                permission
            };
            if (!newUser) {
                this.errorMessage = "Invalid email!";
                throw new Error(this.errorMessage);
            }
            return newUser;
        }
        catch (error) {
            throw new Error(this.errorMessage);
        }
    }
    async getUserById({ id }) {
        var _a;
        try {
            const user = await loginRepository.findOne({ where: { id: id }, select: { password: true, email: true, name: true, id: true }, relations: { group: true } });
            const ids = (_a = user === null || user === void 0 ? void 0 : user.group) === null || _a === void 0 ? void 0 : _a.map((gru) => {
                var _a;
                return (_a = gru.group) === null || _a === void 0 ? void 0 : _a.id;
            });
            let permission = [];
            if (ids) {
                permission = await new permission_repository_1.PermissionRepository().getPermissionByIds(ids);
            }
            const newUser = {
                ...user,
                permission
            };
            return newUser;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async emailValidate(email, code) {
        try {
            const validateEmail = await loginRepository.findOneBy({ email: email });
            if (validateEmail == null)
                throw new Error("Invalid email!");
            const updatedEmailCode = await loginRepository.update(validateEmail.id, { recover_password_code: code });
            if (updatedEmailCode.affected !== 1)
                throw new Error("Invalid user!");
            return code;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async validateCode(req) {
        try {
            const authChangeEmail = await loginRepository.findOneBy({
                email: req.email,
                recover_password_code: req.code
            });
            if (authChangeEmail == null)
                throw new Error("code");
            const updateEmail = await loginRepository.update(authChangeEmail.id, { auth_change_password: true });
            if (updateEmail.affected !== 1)
                throw new Error("Invalid email!");
            return true;
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
    async updatePassword(req) {
        try {
            const updatedEmailCode = await loginRepository
                .createQueryBuilder()
                .update(user_1.User)
                .set({ password: req.password, auth_change_password: false, recover_password_code: "" })
                .where("email = :email", { email: req.email })
                .where("recover_password_code = :recoverPasswordCode", { recoverPasswordCode: req.code })
                .where("auth_change_password = :authPassword", { authPassword: true })
                .execute();
            if (updatedEmailCode.affected != 1)
                throw new Error("Unauthorized password change attempt!");
        }
        catch (error) {
            throw new Error('{"field": "dbError"}');
        }
    }
}
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=login.repository.js.map