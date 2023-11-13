import { Router } from "express";
import { PermissionController } from "../controller/permission.controller";
import { Middleware } from "../middleware/user.authenticated";

const permissionRoutes = Router();

permissionRoutes.post('/', new Middleware().isAuthenticated, new PermissionController().insertPermission);
permissionRoutes.get('/', new Middleware().isAuthenticated, new PermissionController().listPermission);
permissionRoutes.get('/:id', new Middleware().isAuthenticated, new PermissionController().getPermissionById);
permissionRoutes.delete('/:id', new Middleware().isAuthenticated, new PermissionController().deletePermission);
permissionRoutes.put('/', new Middleware().isAuthenticated, new PermissionController().updatePermission);

export default permissionRoutes;