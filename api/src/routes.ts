import { Express } from "express";
import storeRoutes from "./route/store.routes";
import userRoutes from "./route/user.routes";
import permissionRoutes from "./route/permission.routes";
import listsRoutes from "./route/lists.routes";
import loginRoutes from "./route/login.routes";

export default class Routes {
    handler(app: Express): void {
        app.use('/api/login', loginRoutes);
        app.use('/api/lists', listsRoutes);
        app.use('/api/permission', permissionRoutes)
        app.use('/api/user', userRoutes)
        app.use('/api/store', storeRoutes);
    };
};