"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepositoryStore = void 0;
const data_source_1 = require("../../../data-source");
const store_1 = require("../../../entity/store");
const StoreRepository = data_source_1.AppDataSource.getRepository(store_1.StoreEntity);
class UpdateRepositoryStore {
    async handle(store) {
        try {
            return await StoreRepository.save(store);
        }
        catch (error) {
            throw new Error('Internal error');
        }
    }
}
exports.UpdateRepositoryStore = UpdateRepositoryStore;
//# sourceMappingURL=update-repository-store.js.map