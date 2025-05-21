"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoriesTable1706207489763 = void 0;
class CreateStoriesTable1706207489763 {
    constructor() {
        this.name = 'CreateStoriesTable1706207489763';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`stories\``);
    }
}
exports.CreateStoriesTable1706207489763 = CreateStoriesTable1706207489763;
