import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerate1699708933729 implements MigrationInterface {
    name = 'MigrationGenerate1699708933729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cad_contact\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ddi\` int(4) NOT NULL, \`telephone\` bigint(11) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_store\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_store\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_address\` int NOT NULL, UNIQUE INDEX \`REL_efa0c0be487a41799e5d2bea80\` (\`id_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cep\` int(8) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`locality\` varchar(255) NOT NULL, \`uf\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` ADD CONSTRAINT \`FK_f08573a0abf45884aedb4b0a345\` FOREIGN KEY (\`id_store\`) REFERENCES \`cad_store\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_store\` ADD CONSTRAINT \`FK_efa0c0be487a41799e5d2bea807\` FOREIGN KEY (\`id_address\`) REFERENCES \`cad_address\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_store\` DROP FOREIGN KEY \`FK_efa0c0be487a41799e5d2bea807\``);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` DROP FOREIGN KEY \`FK_f08573a0abf45884aedb4b0a345\``);
        await queryRunner.query(`DROP TABLE \`cad_address\``);
        await queryRunner.query(`DROP INDEX \`REL_efa0c0be487a41799e5d2bea80\` ON \`cad_store\``);
        await queryRunner.query(`DROP TABLE \`cad_store\``);
        await queryRunner.query(`DROP TABLE \`cad_contact\``);
    }

}
