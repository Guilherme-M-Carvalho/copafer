import { Seeder, SeederFactoryManager } from "typeorm-extension"
import { DataSource } from "typeorm"
import {PermissionModule} from "../../src/entity/permissionModule"

export class Module_permission implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
        const sysPermission = dataSource.getRepository(PermissionModule);

        await sysPermission.query(`INSERT INTO sys_permission_module (permissionId, moduleId) 
        VALUES (1, 1), (2,1), (3, 1), (4, 1), (5, 1),
        (1, 2), (2,2),(3,2),(4,2),(5, 2),
        (1, 3), (2, 3), (3, 3), (5, 3),
        (4, 2);`)
    }
}