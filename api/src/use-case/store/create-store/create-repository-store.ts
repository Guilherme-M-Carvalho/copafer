import { AppDataSource } from "../../../data-source"
import { StoreEntity } from "../../../entity/store"

interface CreateRepositoryStoreProps {
    handle(store: StoreEntity): Promise<StoreEntity>;
    validation(name: string): Promise<StoreEntity | null>
}

const StoreRepository = AppDataSource.getRepository(StoreEntity)

export class CreateRepositoryStore implements CreateRepositoryStoreProps {
    async handle(store: StoreEntity): Promise<StoreEntity> {
        try {
            return await StoreRepository.save(store)
        } catch (error) {
            console.log({error, store});

            throw new Error('Internal error');
        }
    }

    async validation(name: string): Promise<StoreEntity | null> {
        try {
            return await StoreRepository.findOne({
                where: { name: name }
            })
        } catch (error) {
            console.log({error, name});
            
            throw new Error('Internal error');
        }
    }
}