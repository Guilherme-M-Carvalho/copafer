"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDto = void 0;
class AddressDto {
    handleCreate(props) {
        const { address, cep, complement, locality, neighborhood, uf, number } = props;
        if (typeof address !== "string") {
            throw new Error('{"field": "address"}');
        }
        if (typeof cep !== "string") {
            throw new Error('{"field": "cep"}');
        }
        if (typeof complement !== "string") {
            throw new Error('{"field": "complement"}');
        }
        if (typeof number !== "string") {
            throw new Error('{"field": "number"}');
        }
        if (typeof locality !== "string") {
            throw new Error('{"field": "locality"}');
        }
        if (typeof neighborhood !== "string") {
            throw new Error('{"field": "neighborhood"}');
        }
        if (typeof uf !== "string") {
            throw new Error('{"field": "uf"}');
        }
        return { address, cep: Number(cep), complement, locality, neighborhood, uf, number };
    }
}
exports.AddressDto = AddressDto;
//# sourceMappingURL=address.dto.js.map