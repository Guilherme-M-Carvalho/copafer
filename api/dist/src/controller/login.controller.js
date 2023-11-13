"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const login_dto_1 = require("../dto/login.dto");
const login_repository_1 = require("../repository/login.repository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const module_repository_1 = require("../repository/module.repository");
const permission_dto_1 = require("../dto/permission.dto");
class LoginController {
    async login(req, res) {
        var _a;
        const dtoBody = await new login_dto_1.LoginDTO().validateUser(req.body);
        const userValidate = await new login_repository_1.LoginRepository().loginValidate(dtoBody.email);
        const validate = await new login_dto_1.LoginDTO().authLogged(dtoBody.password, userValidate.password);
        const { permissions } = new login_dto_1.LoginDTO().handlePermissionLogin(userValidate.permission);
        const lstpermission = await new module_repository_1.ModuleRepository().getModules();
        const data = await new permission_dto_1.PermissionDTO().getModules(lstpermission);
        const token = jsonwebtoken_1.default.sign({ id: userValidate.id }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : '');
        req.session.user = userValidate;
        const user = {
            id: userValidate.id,
            name: userValidate.name,
            email: userValidate.email,
            permission: permissions
        };
        return res.status(200).json({ token, user, permission: data });
    }
    async session(req, res) {
        const id = req.userId;
        const userResponse = await new login_repository_1.LoginRepository().getUserById({ id });
        if (!userResponse) {
            return res.status(401).end();
        }
        const { permissions } = new login_dto_1.LoginDTO().handlePermissionLogin(userResponse.permission);
        const lstpermission = await new module_repository_1.ModuleRepository().getModules();
        const data = await new permission_dto_1.PermissionDTO().getModules(lstpermission);
        const user = {
            id: userResponse.id,
            name: userResponse.name,
            email: userResponse.email,
            permission: permissions
        };
        return res.status(200).json({ user, permission: data });
    }
    async validatePasswordCode(req, res) {
        const { code } = req.body;
        const { email } = req.body;
        const validatedObject = await new login_dto_1.LoginDTO().validateCode({ code }.code, { email }.email);
        const authChangePassword = await new login_repository_1.LoginRepository().validateCode(validatedObject);
        return res.status(200).json("Authorize change password!");
    }
    async updatePassword(req, res) {
        const emailBody = await new login_dto_1.LoginDTO().validateUpdatePassword(req.body);
        const updatedPassword = await new login_repository_1.LoginRepository().updatePassword(emailBody);
        return res.status(200).json("You changed your password successfully!");
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map