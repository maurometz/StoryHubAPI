import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommentsTable1706207489764 implements MigrationInterface {
    name = 'CreateCommentsTable1706207489764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`comments\` (
                \`id\` varchar(36) NOT NULL,
                \`content\` text NOT NULL,
                \`author\` varchar(255) NOT NULL,
                \`storyId\` varchar(36) NOT NULL,
                \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`),
                KEY \`FK_comments_stories\` (\`storyId\`),
                CONSTRAINT \`FK_comments_stories\` FOREIGN KEY (\`storyId\`) REFERENCES \`stories\` (\`id\`) ON DELETE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`comments\``);
    }
} 