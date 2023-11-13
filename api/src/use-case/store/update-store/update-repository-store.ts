import { AppDataSource } from "../../../data-source"
import { StoreEntity } from "../../../entity/store"

interface UpdateRepositoryStoreProps {
    handle(store: StoreEntity): Promise<StoreEntity>;
}

const StoreRepository = AppDataSource.getRepository(StoreEntity)

export class UpdateRepositoryStore implements UpdateRepositoryStoreProps {
    async handle(store: StoreEntity): Promise<StoreEntity> {
        try {
            return await StoreRepository.save(store)
        } catch (error) {
            throw new Error('Internal error');
        }
    }
}