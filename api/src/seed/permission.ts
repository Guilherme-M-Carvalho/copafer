import { Seeder, SeederFactoryManager } from "typeorm-extension"
import { DataSource } from "typeorm"
import {Permission} from "../../src/entity/permission"

export class Permissions implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
        const permission = dataSource.getRepository(Permission);
        await permission.query(`INSERT INTO sys_permission (name) VALUES ("Criar"), ("Visualizar"), ("Editar"), ("Deletar"), ("Exportar")`)
    }
}