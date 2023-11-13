"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDTO = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../utils/utils");
class LoginDTO {
    async validateUser(req) {
        const { email, password } = req;
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailValidate = emailRegexp.test({ email }.email);
        if (emailValidate == false)
            throw new Error("Invalid email!");
        if (!{ password }.password)
            throw new Error("Invalid password!");
        let response = {
            email: { email }.email,
            password: { password }.password
        };
        return response;
    }
    async validateUpdatePassword(req) {
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailValidate = emailRegexp.test(req.email);
        if (emailValidate == false)
            throw new Error("Invalid email!");
        if (!req.password)
            throw new Error("Invalid password!");
        req.password = await new utils_1.Utils().encryptPassword(String(req.password));
        if (String(req.code).length != 6)
            throw new Error("Invalid code!");
        return req;
    }
    async authLogged(password, authPassword) {
        const verifyPassword = bcrypt_1.default.compareSync(password, authPassword);
        if (!verifyPassword) {
            throw new Error("Invalid password!");
        }
    }
    handlePermissionLogin(permission) {
        let permissions = [];
        permission.map((perm) => {
            perm.permission.map((el) => {
                if (!permissions.find((item) => item.id === el.permission.id)) {
                    permissions.push({ id: el.permission.id });
                }
            });
        });
        return { permissions };
    }
    async createEmailBody(code, email) {
        const smtpObject = {
            from: "",
            to: email,
            subject: "Recuperação de Senha",
            text: "Teste recuperação de senha!",
            html: `<b>O seu código de recuperação de senha é ${code}</b>`
        };
        return smtpObject;
    }
    async validateCode(code, email) {
        const codeValidate = String(code);
        const emailValidate = String(email).trim();
        if (String(code).length != 6)
            throw new Error("Invalid code!");
        new utils_1.Utils().emailValidation(emailValidate);
        const returnObject = {
            code: codeValidate,
            email: emailValidate
        };
        return returnObject;
    }
}
exports.LoginDTO = LoginDTO;
//# sourceMappingURL=login.dto.js.map