"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneStore = void 0;
const find_one_repository_store_1 = require("./find-one-repository-store");
class FindOneStore {
    async handle({ id }) {
        const repository = new find_one_repository_store_1.FindRepositoryStore();
        return await repository.handle({ id });
    }
}
exports.FindOneStore = FindOneStore;
//# sourceMappingURL=find-one-store.js.map