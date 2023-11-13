"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationGenerate1699836704753 = void 0;
class MigrationGenerate1699836704753 {
    constructor() {
        this.name = 'MigrationGenerate1699836704753';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`sys_permission\` (\`id_permission\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`special\` tinyint NOT NULL DEFAULT 0, \`create_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id_permission\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sys_module\` (\`id_module\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 0, \`create_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id_module\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sys_permission_module\` (\`id_permission_module\` int NOT NULL AUTO_INCREMENT, \`permissionId\` int NOT NULL, \`moduleId\` int NOT NULL, PRIMARY KEY (\`id_permission_module\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lnk_group_permission\` (\`id_group_permission\` int NOT NULL AUTO_INCREMENT, \`groupId\` int NOT NULL, \`permissionId\` int NOT NULL, PRIMARY KEY (\`id_group_permission\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_user\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`surname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`recover_password_code\` varchar(6) NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`auth_change_password\` tinyint NOT NULL DEFAULT 0, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lnk_group_user\` (\`id_group_user\` int NOT NULL AUTO_INCREMENT, \`groupId\` int NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id_group_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_group\` (\`id_group\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id_group\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` ADD \`number\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sys_permission_module\` ADD CONSTRAINT \`FK_04d658d202aec6319cba2442e2c\` FOREIGN KEY (\`permissionId\`) REFERENCES \`sys_permission\`(\`id_permission\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sys_permission_module\` ADD CONSTRAINT \`FK_f4844134c3415fcf824e5a45e4b\` FOREIGN KEY (\`moduleId\`) REFERENCES \`sys_module\`(\`id_module\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lnk_group_permission\` ADD CONSTRAINT \`FK_84930db8a13defcd7d6df6808f9\` FOREIGN KEY (\`groupId\`) REFERENCES \`cad_group\`(\`id_group\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lnk_group_permission\` ADD CONSTRAINT \`FK_6a4c7598553f49c2ea27c134869\` FOREIGN KEY (\`permissionId\`) REFERENCES \`sys_permission_module\`(\`id_permission_module\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lnk_group_user\` ADD CONSTRAINT \`FK_0672d7d49de8bf032d161619c13\` FOREIGN KEY (\`groupId\`) REFERENCES \`cad_group\`(\`id_group\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lnk_group_user\` ADD CONSTRAINT \`FK_93bb68f57361464145cd49784c3\` FOREIGN KEY (\`userId\`) REFERENCES \`cad_user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`lnk_group_user\` DROP FOREIGN KEY \`FK_93bb68f57361464145cd49784c3\``);
        await queryRunner.query(`ALTER TABLE \`lnk_group_user\` DROP FOREIGN KEY \`FK_0672d7d49de8bf032d161619c13\``);
        await queryRunner.query(`ALTER TABLE \`lnk_group_permission\` DROP FOREIGN KEY \`FK_6a4c7598553f49c2ea27c134869\``);
        await queryRunner.query(`ALTER TABLE \`lnk_group_permission\` DROP FOREIGN KEY \`FK_84930db8a13defcd7d6df6808f9\``);
        await queryRunner.query(`ALTER TABLE \`sys_permission_module\` DROP FOREIGN KEY \`FK_f4844134c3415fcf824e5a45e4b\``);
        await queryRunner.query(`ALTER TABLE \`sys_permission_module\` DROP FOREIGN KEY \`FK_04d658d202aec6319cba2442e2c\``);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` DROP COLUMN \`number\``);
        await queryRunner.query(`DROP TABLE \`cad_group\``);
        await queryRunner.query(`DROP TABLE \`lnk_group_user\``);
        await queryRunner.query(`DROP TABLE \`cad_user\``);
        await queryRunner.query(`DROP TABLE \`lnk_group_permission\``);
        await queryRunner.query(`DROP TABLE \`sys_permission_module\``);
        await queryRunner.query(`DROP TABLE \`sys_module\``);
        await queryRunner.query(`DROP TABLE \`sys_permission\``);
    }
}
exports.MigrationGenerate1699836704753 = MigrationGenerate1699836704753;
//# sourceMappingURL=1699836704753-MigrationGenerate.js.map