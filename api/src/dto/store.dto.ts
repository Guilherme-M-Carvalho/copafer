import { StoreEntity } from "../entity/store"
import { CreateStoreProps, FindProps } from "../types/store"
import { AddressDto } from "./address.dto"
import { ContactDto } from "./contact.dto"

export class StoreDto {
    handleCreate(props: CreateStoreProps): CreateStoreProps {
        const { name, address, contact } = props
        if(typeof name !== "string"){
            throw new Error('{"field": "name"}')
        }
        
        if(typeof address !== "object"){
            throw new Error('{"field": "address"}')
        }
 
        if(!Array.isArray(contact)){
            throw new Error('{"field": "contact"}')
        }
        
        const dtoAddress = new AddressDto()
        dtoAddress.handleCreate(address);

        const dtoContact = new ContactDto()
        contact.forEach(contact => {
            dtoContact.handleCreate(contact)
        })

        return {
            name,
            address,
            contact
        }
    }

    handleFindOne(props: StoreEntity[]): FindProps{

        return props.map(store => {
            let contact = ""
            store.contact.forEach((con, i) => {
                contact += `${i !== 0 ? ", ": ""}+${con.ddi} ${con.telephone}`
            })
            return {
                id:store.id,
                name: store.name,
                address: store.address.address,
                neighborhood: store.address.neighborhood,
                uf: store.address.uf,
                cep: String(store.address.cep),
                contact
            }
        })

    }
}