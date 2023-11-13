"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStore = void 0;
const __1 = require("..");
const update_repository_store_1 = require("./update-repository-store");
class UpdateStore {
    async handle({ address, contact, name, id }) {
        const repository = new update_repository_store_1.UpdateRepositoryStore();
        const create = new __1.Store({
            id,
            address,
            contact,
            name
        });
        if (!create.handleValidation()) {
            throw new Error('{"message": "Loja invalida"}');
        }
        return await repository.handle(create);
    }
}
exports.UpdateStore = UpdateStore;
//# sourceMappingURL=update-store.js.map