import { MigrationInterface, QueryRunner } from "typeorm";

export class DropTables1706207489762 implements MigrationInterface {
    name = 'DropTables1706207489762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Drop tables in reverse order of dependencies
        await queryRunner.query(`DROP TABLE IF EXISTS \`comments\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`stories\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // No need to recreate tables in down migration as they will be recreated by subsequent migrations
    }
} 