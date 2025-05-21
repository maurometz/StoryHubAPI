"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsTable1706207489764 = void 0;
class CreateCommentsTable1706207489764 {
    constructor() {
        this.name = 'CreateCommentsTable1706207489764';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`comments\``);
    }
}
exports.CreateCommentsTable1706207489764 = CreateCommentsTable1706207489764;
