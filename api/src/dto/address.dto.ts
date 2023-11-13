import { CreateAddressProps } from "../types/address"

export class AddressDto {
    handleCreate(props: CreateAddressProps): CreateAddressProps {
        const { address, cep, complement, locality, neighborhood, uf, number } = props

        if(typeof address !== "string"){
            throw new Error('{"field": "address"}')
        }
        if(typeof cep !== "string"){
            throw new Error('{"field": "cep"}')
        }
        if(typeof complement !== "string"){
            throw new Error('{"field": "complement"}')
        }
        if(typeof number !== "string"){
            throw new Error('{"field": "number"}')
        }
        if(typeof locality !== "string"){
            throw new Error('{"field": "locality"}')
        }
        if(typeof neighborhood !== "string"){
            throw new Error('{"field": "neighborhood"}')
        }
        if(typeof uf !== "string"){
            throw new Error('{"field": "uf"}')
        }

        return { address, cep:  Number(cep), complement, locality, neighborhood, uf, number }
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