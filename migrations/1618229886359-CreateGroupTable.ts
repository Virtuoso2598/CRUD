import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618229886359 implements MigrationInterface {
    name = 'CreateGroupTable1618229886359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "friends" TO "groupsId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "groupsId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "groupsId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_842bd62421ade9a1c96b0151a03" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_842bd62421ade9a1c96b0151a03"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "groupsId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "groupsId" character varying`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "groupsId" TO "friends"`);
    }

}
