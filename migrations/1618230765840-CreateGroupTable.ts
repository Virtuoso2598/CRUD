import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618230765840 implements MigrationInterface {
    name = 'CreateGroupTable1618230765840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ba4f2b790b69c4cebb4e077c8b4" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ba4f2b790b69c4cebb4e077c8b4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "usersId"`);
    }

}
