"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDto = void 0;
class ContactDto {
    handleCreate(props) {
        const { ddi, telephone } = props;
        if (typeof ddi !== "string") {
            throw new Error('{"field": "ddi"}');
        }
        if (typeof telephone !== "string") {
            throw new Error('{"field": "telephone"}');
        }
        return {
            ddi,
            telephone
        };
    }
}
exports.ContactDto = ContactDto;
//# sourceMappingURL=contact.dto.js.map