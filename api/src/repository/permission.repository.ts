import { ModuleRepository } from "./module.repository";
import { Group } from "../entity/group";
import { AppDataSource } from "../data-source";
import { UserRepository } from "./user.repository";
import { In } from 'typeorm';

const groupEntity = AppDataSource.getRepository(Group)

export class PermissionRepository {

    async validatePermission(id: number) {
        const validatePermission = await groupEntity.findOneBy(
            { id: id }
        )
        if (!validatePermission) throw new Error('{"field": "invalidPermission"}');
    }

    async insertPermission(data: any) {
        try {
            let response = await groupEntity.save(data);
            return response;
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async getPermissionById(id: number) {
        try {
            let response = await groupEntity.findOne({ where: { id: id }, relations: { permission: true, user: true } });
            return response;
        } catch (error) {
            return error
        }
    }

    async getPermissionByIds(id: number[]) {
        try {
            let response = await groupEntity.find({ where: { permission: { group: In(id) } }, relations: { permission: true, user: true } });
            return response;
        } catch (error) {
            return error
        }
    }

    async getPermissionByName(name: string) {
        try {
            let response = await groupEntity.findOneBy({ name: name })
            return response;
        } catch (error) {
            return error
        }
    }

    async getLists() {
        const module = await new ModuleRepository().getModules()
        const users = await new UserRepository().getUser()
        let response = {
            module,
            users
        }
        return response
    }

    async deletePermission(id: number) {
        try {
            await this.validatePermission(id)
            await groupEntity.update({ id: id }, { deleted: true });
            return "ok"
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async getPermission() {
        try {
            let response = await groupEntity.find({
                where: { deleted: false },
                select: { id: true, name: true, user: true },
                relations: {
                    user: true
                }
            });
            return response
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }
}