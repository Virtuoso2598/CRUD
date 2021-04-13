import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618230903773 implements MigrationInterface {
    name = 'CreateGroupTable1618230903773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ba4f2b790b69c4cebb4e077c8b4"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "usersId" TO "userIDId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9afb4982e63b8299c3be3c005fa" FOREIGN KEY ("userIDId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9afb4982e63b8299c3be3c005fa"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "userIDId" TO "usersId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ba4f2b790b69c4cebb4e077c8b4" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
