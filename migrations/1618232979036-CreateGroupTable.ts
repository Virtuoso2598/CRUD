import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618232979036 implements MigrationInterface {
    name = 'CreateGroupTable1618232979036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_adb912e10c347c8a1c9658dc4c4"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "groupsId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_842bd62421ade9a1c96b0151a03" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_842bd62421ade9a1c96b0151a03"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "groupsId"`);
        await queryRunner.query(`ALTER TABLE "group" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_adb912e10c347c8a1c9658dc4c4" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
