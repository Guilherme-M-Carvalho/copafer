"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindRepositoryStore = void 0;
const data_source_1 = require("../../../data-source");
const store_1 = require("../../../entity/store");
const StoreRepository = data_source_1.AppDataSource.getRepository(store_1.StoreEntity);
class FindRepositoryStore {
    async handle({ id }) {
        try {
            return await StoreRepository.update({ id: id }, { deleted: true });
        }
        catch (error) {
            throw new Error('Internal error');
        }
    }
}
exports.FindRepositoryStore = FindRepositoryStore;
//# sourceMappingURL=delete-repository-store.js.map