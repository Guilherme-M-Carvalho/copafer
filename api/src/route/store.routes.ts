import { Router } from "express";
import { StoreController } from "../controller/store.controller";

const storeRoutes = Router();
// storeRoutes.get('/list', new StoreController().handleFindList);
// storeRoutes.get('/', new StoreController().handleFind);
storeRoutes.post('/', new StoreController().handleCreate);

export default storeRoutes;