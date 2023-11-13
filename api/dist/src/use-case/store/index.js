"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const address_1 = require("../address");
const contact_1 = require("../contact");
class Store {
    constructor({ id, name, contact, address, deleted, createDate, updateDate, }) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.address = address;
        this.deleted = deleted;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
    handleValidation() {
        const address = new address_1.Address(this.address);
        this.contact.forEach((contact, i) => {
            new contact_1.Contact(contact).handleValidationTelephone(i);
        });
        if (this.name.length < 3) {
            throw new Error(`{"message": "O nome deve conter no minimo 3 digitos", "field": "name"}`);
        }
        address.handleValidationCep();
        return true;
    }
}
exports.Store = Store;
//# sourceMappingURL=index.js.map