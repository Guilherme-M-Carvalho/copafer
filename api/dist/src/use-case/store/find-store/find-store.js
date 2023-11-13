"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStore = void 0;
const find_repository_store_1 = require("./find-repository-store");
class FindStore {
    async handle() {
        const repository = new find_repository_store_1.FindRepositoryStore();
        return await repository.handle();
    }
}
exports.FindStore = FindStore;
//# sourceMappingURL=find-store.js.map