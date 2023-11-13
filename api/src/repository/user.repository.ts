import { AppDataSource } from "../data-source";
import { User } from "../entity/user";
import { PermissionRepository } from "./permission.repository";

const UserEntity = AppDataSource.getRepository(User);

export class UserRepository {

    errorMessage: string = '{"field": "dbError"}'

    async validateUser(id: number) {
        const validateUser = await UserEntity.findOneBy(
            { id: id }
        )
        return validateUser
    }

    async insertUser(data: any, worker: number) {
        try {
            const response = await UserEntity.save(data);
            return response;
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async getUser() {
        try {
            let response = await UserEntity.find({ where: { deleted: false }, select: { name: true, email: true, id: true } });
            return response;
        } catch (error) {
            return error
        }
    }

    async getUserById(id: number) {
        try {
            let response = await UserEntity.findOne({ where: { id: id }, relations: { group: true } });
            return response;
        } catch (error) {
            return error
        }
    }

    async getByEmail({ email, id }: { email: string, id?: number }) {
        try {
            let response = await UserEntity.findOne({ where: { email: email } });
            return response;
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async getLists() {
        const permission = await new PermissionRepository().getPermission()
        let response = {
            permission
        }
        return response
    }

    async getUsers() {
        try {
            let response = await UserEntity.find({
                where: { deleted: false },
                select: { id: true, name: true, group: true, email: true },
                relations: {
                    group: true
                }
            });
            return response
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async deleteUser(id: number) {
        try {
            if (!await this.validateUser(id)) {
                this.errorMessage = '{"field": "invalidUser"}'
                throw new Error(this.errorMessage);
            }
            await UserEntity.update({ id: id }, { deleted: true });
            return "ok"
        } catch (error: any) {
            throw new Error(this.errorMessage)

        }
    }
}