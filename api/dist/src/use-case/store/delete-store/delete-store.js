"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStore = void 0;
const delete_repository_store_1 = require("./delete-repository-store");
class DeleteStore {
    async handle({ id }) {
        const repository = new delete_repository_store_1.FindRepositoryStore();
        return await repository.handle({ id });
    }
}
exports.DeleteStore = DeleteStore;
//# sourceMappingURL=delete-store.js.map