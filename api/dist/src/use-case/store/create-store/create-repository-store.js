"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepositoryStore = void 0;
const data_source_1 = require("../../../data-source");
const store_1 = require("../../../entity/store");
const StoreRepository = data_source_1.AppDataSource.getRepository(store_1.StoreEntity);
class CreateRepositoryStore {
    async handle(store) {
        try {
            return await StoreRepository.save(store);
        }
        catch (error) {
            console.log({ error, store });
            throw new Error('Internal error');
        }
    }
    async validation(name) {
        try {
            return await StoreRepository.findOne({
                where: { name: name }
            });
        }
        catch (error) {
            console.log({ error, name });
            throw new Error('Internal error');
        }
    }
}
exports.CreateRepositoryStore = CreateRepositoryStore;
//# sourceMappingURL=create-repository-store.js.map