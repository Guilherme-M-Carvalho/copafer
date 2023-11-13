"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDto = void 0;
const address_dto_1 = require("./address.dto");
const contact_dto_1 = require("./contact.dto");
class StoreDto {
    handleCreate(props) {
        const { name, address, contact } = props;
        if (typeof name !== "string") {
            throw new Error('{"field": "name"}');
        }
        if (typeof address !== "object") {
            throw new Error('{"field": "address"}');
        }
        if (!Array.isArray(contact)) {
            throw new Error('{"field": "contact"}');
        }
        const dtoAddress = new address_dto_1.AddressDto();
        dtoAddress.handleCreate(address);
        const dtoContact = new contact_dto_1.ContactDto();
        contact.forEach(contact => {
            dtoContact.handleCreate(contact);
        });
        return {
            name,
            address,
            contact
        };
    }
    handleFindOne(props) {
        return props.map(store => {
            let contact = "";
            store.contact.forEach((con, i) => {
                contact += `${i !== 0 ? ", " : ""}+${con.ddi} ${con.telephone}`;
            });
            return {
                id: store.id,
                name: store.name,
                address: store.address.address,
                neighborhood: store.address.neighborhood,
                uf: store.address.uf,
                cep: String(store.address.cep),
                contact
            };
        });
    }
}
exports.StoreDto = StoreDto;
//# sourceMappingURL=store.dto.js.map