import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618231074524 implements MigrationInterface {
    name = 'CreateGroupTable1618231074524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9afb4982e63b8299c3be3c005fa"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userIDId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "userIDId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9afb4982e63b8299c3be3c005fa" FOREIGN KEY ("userIDId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
