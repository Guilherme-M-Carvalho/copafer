import { Router } from "express";
import { LoginController } from "../controller/login.controller";
import { Middleware } from "../middleware/user.authenticated";

const loginRoutes = Router();

loginRoutes.get('/session', new Middleware().isAuthenticated, new LoginController().session);
loginRoutes.post('/login', new LoginController().login);
loginRoutes.post('/validatePasswordCode', new LoginController().validatePasswordCode);
loginRoutes.put('/updatePassword', new LoginController().updatePassword);

export default loginRoutes;