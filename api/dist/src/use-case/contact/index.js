"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor({ id, ddi, telephone, storeId, deleted, createDate, updateDate }) {
        this.id = id;
        this.ddi = ddi;
        this.telephone = telephone;
        this.storeId = storeId;
        this.deleted = deleted;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
    handleValidationTelephone(i) {
        if (String(this.telephone).length < 10 || String(this.telephone).length > 11) {
            throw new Error(`{"field": "telephone", "message": "O telephone deve conter entre 10 e 11 digitos", "position": "${i}"}`);
        }
        if (String(this.ddi).length > 4) {
            throw new Error(`{"field": "ddi", "message": "O ddi deve conter no maximo 4 digitos", "position": "${i}"}`);
        }
        return true;
    }
}
exports.Contact = Contact;
//# sourceMappingURL=index.js.map