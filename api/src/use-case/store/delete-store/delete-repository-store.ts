import { UpdateResult } from "typeorm";
import { AppDataSource } from "../../../data-source"
import { StoreEntity } from "../../../entity/store"

interface FindRepositoryStoreProps {
    handle({id}: {id: number}): Promise<UpdateResult>;
}

const StoreRepository = AppDataSource.getRepository(StoreEntity)

export class FindRepositoryStore implements FindRepositoryStoreProps {
    async handle({id}: {id: number}): Promise<UpdateResult> {
        try {
            return await StoreRepository.update({ id: id }, { deleted: true });
        } catch (error) {
            throw new Error('Internal error');
        }
    }


}