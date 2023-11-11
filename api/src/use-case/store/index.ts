import { AddressEntity } from "../../entity/address";
import { ContactEntity } from "../../entity/contact";
import { StoreEntity } from "../../entity/store";
import { Address } from "../address";
import { Contact } from "../contact";

export class Store implements StoreEntity {

    id?: number
    name: string
    contact: ContactEntity[]
    address: AddressEntity
    deleted?: boolean
    createDate?: Date
    updateDate?: Date

    constructor({
        id,
        name,
        contact,
        address,
        deleted,
        createDate,
        updateDate,
    }: StoreEntity) {
        this.id = id
        this.name = name
        this.contact = contact
        this.address = address
        this.deleted = deleted
        this.createDate = createDate
        this.updateDate = updateDate
    }

    handleValidation(){
        const address = new Address(this.address)
        this.contact.forEach((contact, i) => {
            new Contact(contact).handleValidationTelephone(i)
        })
        if(this.name.length < 3){
            throw new Error(`{"message": "O nome deve conter no minimo 3 digitos", "field": "name"}`)
        }
        address.handleValidationCep()
        return true
    }
}