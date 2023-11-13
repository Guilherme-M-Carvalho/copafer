import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerate1699852270947 implements MigrationInterface {
    name = 'MigrationGenerate1699852270947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_address\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`cad_address\` ADD \`cep\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`cad_address\` ADD \`cep\` int NOT NULL`);
    }

}
