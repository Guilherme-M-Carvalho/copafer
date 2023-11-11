import { Store } from "..";
import { StoreEntity } from "../../../entity/store";
import { CreateStoreProps } from "../../../types/store";
import { CreateRepositoryStore } from "./create-repository-store";

export class CreateStore {
    async handle({ address, contact, name }: CreateStoreProps): Promise<StoreEntity>{
        const repository = new CreateRepositoryStore()
        const create = new Store({
            address,
            contact,
            name
        })

       if(!create.handleValidation()){
            throw new Error('{"message": "Loja invalida"}')
        }
        
        if(await repository.validation(name)){
           throw new Error('{"message": "Loja já existe!"}')
       }

       return await repository.handle(create)
    }
}