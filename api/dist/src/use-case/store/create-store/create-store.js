"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStore = void 0;
const __1 = require("..");
const create_repository_store_1 = require("./create-repository-store");
class CreateStore {
    async handle({ address, contact, name }) {
        const repository = new create_repository_store_1.CreateRepositoryStore();
        const create = new __1.Store({
            address,
            contact,
            name
        });
        if (!create.handleValidation()) {
            throw new Error('{"message": "Loja invalida"}');
        }
        if (await repository.validation(name)) {
            throw new Error('{"message": "Loja já existe!"}');
        }
        return await repository.handle(create);
    }
}
exports.CreateStore = CreateStore;
//# sourceMappingURL=create-store.js.map