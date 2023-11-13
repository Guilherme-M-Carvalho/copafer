"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const store_dto_1 = require("../dto/store.dto");
const create_store_1 = require("../use-case/store/create-store/create-store");
const find_store_1 = require("../use-case/store/find-store/find-store");
const update_store_1 = require("../use-case/store/update-store/update-store");
const find_one_store_1 = require("../use-case/store/find-one-store/find-one-store");
const delete_store_1 = require("../use-case/store/delete-store/delete-store");
class StoreController {
    async handleCreate(req, res) {
        const dto = new store_dto_1.StoreDto();
        const dtoValidation = dto.handleCreate(req.body);
        const useCase = new create_store_1.CreateStore();
        const create = await useCase.handle(dtoValidation);
        res.send(create);
    }
    async handleUpdate(req, res) {
        const useCase = new update_store_1.UpdateStore();
        const create = await useCase.handle(req.body);
        res.send(create);
    }
    async handleFindOne(req, res) {
        const useCase = new find_one_store_1.FindOneStore();
        const findOne = await useCase.handle({
            id: Number(req.params.id)
        });
        res.send(findOne);
    }
    async handleDelete(req, res) {
        const useCase = new delete_store_1.DeleteStore();
        const findOne = await useCase.handle({
            id: Number(req.params.id)
        });
        res.send(findOne);
    }
    async handleFind(req, res) {
        const useCase = new find_store_1.FindStore();
        const find = await useCase.handle();
        const dto = new store_dto_1.StoreDto();
        const dtoValidation = dto.handleFindOne(find);
        res.send(dtoValidation);
    }
}
exports.StoreController = StoreController;
//# sourceMappingURL=store.controller.js.map