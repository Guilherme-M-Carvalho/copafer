import { UpdateResult } from "typeorm";
import { StoreEntity } from "../../../entity/store";
import { FindRepositoryStore } from "./delete-repository-store";

export class DeleteStore {
    async handle({id}: {id: number}): Promise<UpdateResult>{
        const repository = new FindRepositoryStore()

       return await repository.handle({id})
    }
}