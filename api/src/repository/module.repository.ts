import { AppDataSource } from "../data-source";
import { Module } from "../entity/module";

const moduleEntity = AppDataSource.getRepository(Module)

export class ModuleRepository {

    async getModules() {
        const module = await moduleEntity.find({ relations: { permission: true } })
        return module
    }
}