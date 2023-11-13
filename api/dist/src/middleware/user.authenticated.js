"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class Middleware {
    async isAuthenticated(req, res, next) {
        var _a;
        const authToken = req.headers.authorization;
        if (!authToken) {
            return res.status(401).end();
        }
        const [, token] = authToken.split(' ');
        try {
            const response = (0, jsonwebtoken_1.verify)(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : '');
            req.userId = response.id;
            return next();
        }
        catch (err) {
            return res.status(401).end();
        }
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=user.authenticated.js.map