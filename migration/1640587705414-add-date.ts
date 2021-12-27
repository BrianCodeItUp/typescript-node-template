import {MigrationInterface, QueryRunner} from "typeorm";

export class addDate1640587705414 implements MigrationInterface {
    name = 'addDate1640587705414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
