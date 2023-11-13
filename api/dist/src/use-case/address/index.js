"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor({ number, address, cep, complement, locality, neighborhood, uf, store, createDate, deleted, id, updateDate }) {
        this.address = address;
        this.cep = cep;
        this.complement = complement;
        this.locality = locality;
        this.neighborhood = neighborhood;
        this.uf = uf;
        this.store = store;
        this.number = number;
        this.createDate = createDate;
        this.deleted = deleted;
        this.id = id;
        this.updateDate = updateDate;
    }
    handleValidationCep() {
        if (String(this.cep).length !== 8) {
            throw new Error('{"message": "Cep inválido", "field": "cep"}');
        }
        return true;
    }
}
exports.Address = Address;
//# sourceMappingURL=index.js.map