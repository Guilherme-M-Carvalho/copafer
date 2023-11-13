import { Seeder, SeederFactoryManager } from "typeorm-extension"
import { DataSource } from "typeorm"
import {Module} from "../entity/module"

export class Modules implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
        const module = dataSource.getRepository(Module);

        await module.query(`INSERT INTO sys_module (name, status) VALUES ("Loja", 1), ("Usuários", 1), ("Permissões",1), ("Perfil", 1);`)
    }
}