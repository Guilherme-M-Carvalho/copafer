import { StoreEntity } from "../../entity/store";
import { CreateAddressProps } from "../address";
import { CreateContactProps } from "../contact";

export type CreateStoreProps = {
    name: string;
    contact: CreateContactProps[]
    address: CreateAddressProps
}


export type UpdateStoreProps = {
    id?: number
    name: string;
    contact: CreateContactProps[]
    address: CreateAddressProps
}

export type FindProps = {
    id?: number;
    name: string;
    address: string;
    neighborhood: string;
    cep: string;
    uf: string;
    contact: string
}[]

