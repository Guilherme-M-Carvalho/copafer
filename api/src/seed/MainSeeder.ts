import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import {Modules} from './module'
import {Permissions} from './permission'
import {Module_permission} from './module_permission'
export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	){
		// await runSeeder(dataSource, Modules);
		// await runSeeder(dataSource, Permissions);
		await runSeeder(dataSource, Module_permission);
	}
}