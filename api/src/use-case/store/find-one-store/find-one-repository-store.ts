import { AppDataSource } from "../../../data-source"
import { StoreEntity } from "../../../entity/store"

interface FindRepositoryStoreProps {
    handle({id}: {id: number}): Promise<StoreEntity | null>;
}

const StoreRepository = AppDataSource.getRepository(StoreEntity)

export class FindRepositoryStore implements FindRepositoryStoreProps {
    async handle({id}: {id: number}): Promise<StoreEntity | null> {
        try {
            return await StoreRepository.findOne({
                relations: {
                    address: true,
                    contact: true
                },
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new Error('Internal error');
        }
    }


}