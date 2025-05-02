import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStoriesTable1706207489763 implements MigrationInterface {
    name = 'CreateStoriesTable1706207489763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`stories\` (
                \`id\` varchar(36) NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`content\` text NOT NULL,
                \`author\` varchar(255) NOT NULL,
                \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`stories\``);
    }
} 