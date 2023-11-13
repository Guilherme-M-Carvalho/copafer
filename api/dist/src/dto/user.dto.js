"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const utils_1 = require("../utils/utils");
class UserDTO {
    async validateUser(user, type = 0) {
        var _a, _b;
        if (type === 0) {
            user.id = Number(user.id);
            if (!user.id || isNaN(user.id))
                throw new Error('{"field": "userId"}');
        }
        if (!user.name)
            throw new Error('{"field": "name"}');
        if (!user.worker)
            throw new Error('{"field": "worker"}');
        if (!user.email)
            throw new Error('{"field": "email"}');
        new utils_1.Utils().emailValidation(user.email);
        if (type == 1 && !(user === null || user === void 0 ? void 0 : user.password))
            throw new Error('{"field": "password"}');
        if (((_a = user === null || user === void 0 ? void 0 : user.password) === null || _a === void 0 ? void 0 : _a.length) < 8)
            throw new Error('{"field": "passwordLength"}');
        if (!!(user === null || user === void 0 ? void 0 : user.password)) {
            user.password = await new utils_1.Utils().encryptPassword(user.password);
        }
        let groups = [];
        (_b = user === null || user === void 0 ? void 0 : user.group) === null || _b === void 0 ? void 0 : _b.map((group, i) => {
            if (!group.group)
                throw new Error(`{"field": "group", "position": ${i}}`);
            if (!!groups.find(use => use == group.group))
                throw new Error(`{"field": "groupDouble", "position": ${i}}`);
            groups.push(group.group);
        });
        const worker = user.worker;
        delete user.worker;
        if (type == 0) {
            delete user.email;
        }
        if (type == 0 && !(user === null || user === void 0 ? void 0 : user.password)) {
            delete user.password;
        }
        const data = user;
        return { data, worker };
    }
    async getUsers(users) {
        users.map((user) => {
            user.groups = "";
            user.group.map((group, i) => {
                user.groups += `${group.group.name}${(user.group.length - 1) == i ? "" : ","} `;
            });
            delete user.group;
        });
        return users;
    }
    async getLists(lists) {
        lists.permission.map((user) => {
            delete user.user;
        });
        return lists;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map