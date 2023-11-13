import { AppDataSource } from "../../../data-source"
import { StoreEntity } from "../../../entity/store"

interface FindRepositoryStoreProps {
    handle(): Promise<StoreEntity[]>;
}

const StoreRepository = AppDataSource.getRepository(StoreEntity)

export class FindRepositoryStore implements FindRepositoryStoreProps {
    async handle(): Promise<StoreEntity[]> {
        try {
            return await StoreRepository.find({
                relations: {
                    address: true,
                    contact: true
                },
                where: {
                    deleted: false
                }
            })
        } catch (error) {
            throw new Error('Internal error');
        }
    }


}