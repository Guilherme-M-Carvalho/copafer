import { StoreEntity } from "../../../entity/store";
import { FindRepositoryStore } from "./find-repository-store";

export class FindStore {
    async handle(): Promise<StoreEntity[]>{
        const repository = new FindRepositoryStore()

       return await repository.handle()
    }
}