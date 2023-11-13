import { Router } from "express";
import { Middleware } from "../middleware/user.authenticated";
import { UserController } from "../controller/user.controller";

const userRoutes = Router();

userRoutes.post('/', new Middleware().isAuthenticated, new UserController().insertUser);
userRoutes.get('/', new Middleware().isAuthenticated, new UserController().listUsers);
userRoutes.get('/:id', new Middleware().isAuthenticated, new UserController().getUserById);
userRoutes.delete('/:id', new Middleware().isAuthenticated, new UserController().deleteUser);
userRoutes.put('/', new Middleware().isAuthenticated, new UserController().updateUser);

export default userRoutes;