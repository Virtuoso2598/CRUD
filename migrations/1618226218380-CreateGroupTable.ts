import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupTable1618226218380 implements MigrationInterface {
    name = 'CreateGroupTable1618226218380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "displayName" character varying NOT NULL, "users" character varying, CONSTRAINT "UQ_99947048c2a59686da1ff8874b1" UNIQUE ("displayName"), CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "friends" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "friends"`);
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
