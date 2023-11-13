import { Router } from "express";
import { Middleware } from "../middleware/user.authenticated";
import { ListsController } from "../controller/lists.controller";

const listsRoutes = Router();

listsRoutes.get('/permission', new ListsController().getListsPermission);
listsRoutes.get('/user', new ListsController().getListsUser);

export default listsRoutes;