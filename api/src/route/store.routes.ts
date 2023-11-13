import { Router } from "express";
import { StoreController } from "../controller/store.controller";

const storeRoutes = Router();
// storeRoutes.get('/list', new StoreController().handleFindList);
storeRoutes.get('/:id', new StoreController().handleFindOne);
storeRoutes.get('/', new StoreController().handleFind);
storeRoutes.post('/', new StoreController().handleCreate);
storeRoutes.delete('/:id', new StoreController().handleDelete);
storeRoutes.put('/', new StoreController().handleUpdate);

export default storeRoutes;