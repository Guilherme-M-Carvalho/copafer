"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindRepositoryStore = void 0;
const data_source_1 = require("../../../data-source");
const store_1 = require("../../../entity/store");
const StoreRepository = data_source_1.AppDataSource.getRepository(store_1.StoreEntity);
class FindRepositoryStore {
    async handle() {
        try {
            return await StoreRepository.find({
                relations: {
                    address: true,
                    contact: true
                },
                where: {
                    deleted: false
                }
            });
        }
        catch (error) {
            throw new Error('Internal error');
        }
    }
}
exports.FindRepositoryStore = FindRepositoryStore;
//# sourceMappingURL=find-repository-store.js.map