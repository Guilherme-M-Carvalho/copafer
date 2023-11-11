import { Express } from "express";
import storeRoutes from "./route/store.routes";

export default class Routes {
    handler(app: Express): void {
        app.use('/api/store', storeRoutes);
    };
};