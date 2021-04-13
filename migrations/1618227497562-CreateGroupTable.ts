import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618227497562 implements MigrationInterface {
    name = 'CreateGroupTable1618227497562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" ADD "users" character varying`);
    }

}
