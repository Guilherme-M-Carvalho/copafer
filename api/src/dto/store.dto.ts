import { CreateStoreProps } from "../types/store"
import { AddressDto } from "./address.dto"
import { ContactDto } from "./contact.dto"

export class StoreDto {
    handleCreate(props: CreateStoreProps): CreateStoreProps {
        const { name, address, contact } = props
        if(typeof name !== "string"){
            throw new Error('{"field": "name"}')
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

    // handleFindOne(props: FindOneProps): FindOneProps{
    //     const { id } = props

    //     if(typeof id !== "number"){
    //         throw new Error('{"field": "id"}')
    //     }
    //     return {
    //         id
    //     }

    // }
}