import { StoreEntity } from "../../../entity/store";
import { FindRepositoryStore } from "./find-one-repository-store";

export class FindOneStore {
    async handle({id}: {id: number}): Promise<StoreEntity | null>{
        const repository = new FindRepositoryStore()

       return await repository.handle({id})
    }
}