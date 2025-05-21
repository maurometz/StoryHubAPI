"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const story_routes_1 = require("./routes/story.routes");
const app = (0, fastify_1.default)({
    logger: true,
});
// Register plugins
app.register(cors_1.default, {
    origin: true,
});
// Register Swagger
app.register(swagger_1.default, {
    swagger: {
        info: {
            title: 'StoryHub API',
            description: 'API documentation for StoryHub - A platform for writers to share their stories',
            version: '1.0.0',
            contact: {
                name: 'API Support',
                email: 'support@storyhub.com'
            }
        },
        tags: [
            { name: 'stories', description: 'Story related endpoints' },
            { name: 'health', description: 'Health check endpoint' }
        ],
        definitions: {
            Story: {
                type: 'object',
                required: ['title', 'content', 'author'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    title: { type: 'string' },
                    content: { type: 'string' },
                    author: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' }
                }
            },
            CreateStoryDTO: {
                type: 'object',
                required: ['title', 'content', 'author'],
                properties: {
                    title: { type: 'string' },
                    content: { type: 'string' },
                    author: { type: 'string' }
                }
            },
            UpdateStoryDTO: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    content: { type: 'string' }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    }
});
app.register(swagger_ui_1.default, {
    routePrefix: '/documentation',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: false
    },
    staticCSP: true
});
// Register routes
app.register(story_routes_1.storyRoutes, { prefix: '/api/stories' });
// Health check route
app.get('/health', {
    schema: {
        tags: ['health'],
        description: 'Health check endpoint',
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type: 'string' }
                }
            }
        }
    }
}, async () => {
    return { status: 'ok' };
});
exports.default = app;
