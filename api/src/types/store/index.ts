import { CreateAddressProps } from "../address";
import { CreateContactProps } from "../contact";

export type CreateStoreProps = {
    name: string;
    contact: CreateContactProps[]
    address: CreateAddressProps
}
