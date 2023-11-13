"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationGenerate1699845503329 = void 0;
class MigrationGenerate1699845503329 {
    constructor() {
        this.name = 'MigrationGenerate1699845503329';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int(8) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
    }
}
exports.MigrationGenerate1699845503329 = MigrationGenerate1699845503329;
//# sourceMappingURL=1699845503329-MigrationGenerate.js.map