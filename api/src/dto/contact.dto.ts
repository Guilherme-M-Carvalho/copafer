import { CreateContactProps } from "../types/contact"

export class ContactDto {
    handleCreate(props: CreateContactProps): CreateContactProps {
        const { ddi, telephone } = props

        if(typeof ddi !== "string"){
            throw new Error('{"field": "ddi"}')
        }
        if(typeof telephone !== "string"){
            throw new Error('{"field": "telephone"}')
        }

        return {
            ddi,
            telephone
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