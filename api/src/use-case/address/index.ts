import { AddressEntity } from "../../entity/address";
import { StoreEntity } from "../../entity/store";

export class Address implements AddressEntity {

    id?: number
    cep: number
    address: string
    complement: string
    neighborhood: string
    locality: string
    uf: string
    number: number;
    store?: StoreEntity
    deleted?: boolean
    createDate?: Date
    updateDate?: Date

    constructor({ number, address, cep, complement, locality, neighborhood, uf, store, createDate, deleted, id, updateDate }: AddressEntity) {
        this.address = address
        this.cep = cep
        this.complement = complement
        this.locality = locality
        this.neighborhood = neighborhood
        this.uf = uf
        this.store = store
        this.number = number
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.updateDate = updateDate
    }

    handleValidationCep() {
        if(String(this.cep).length !== 8){
            throw new Error('{"message": "Cep inválido", "field": "cep"}')
        }
        return true
    }
}