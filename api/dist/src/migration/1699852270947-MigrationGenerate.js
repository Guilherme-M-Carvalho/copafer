"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationGenerate1699852270947 = void 0;
class MigrationGenerate1699852270947 {
    constructor() {
        this.name = 'MigrationGenerate1699852270947';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cad_address\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`cad_address\` ADD \`cep\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`cad_address\` ADD \`cep\` int NOT NULL`);
    }
}
exports.MigrationGenerate1699852270947 = MigrationGenerate1699852270947;
//# sourceMappingURL=1699852270947-MigrationGenerate.js.map