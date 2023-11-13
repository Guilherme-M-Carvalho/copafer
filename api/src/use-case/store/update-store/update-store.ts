import { Store } from "..";
import { StoreEntity } from "../../../entity/store";
import { CreateStoreProps, UpdateStoreProps } from "../../../types/store";
import { UpdateRepositoryStore } from "./update-repository-store";

export class UpdateStore {
    async handle({ address, contact, name, id }: UpdateStoreProps): Promise<StoreEntity>{
        const repository = new UpdateRepositoryStore()
        const create = new Store({
            id,
            address,
            contact,
            name
        })

       if(!create.handleValidation()){
            throw new Error('{"message": "Loja invalida"}')
        }
       return await repository.handle(create)
    }
}