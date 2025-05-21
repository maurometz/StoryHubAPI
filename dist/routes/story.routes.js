"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyRoutes = storyRoutes;
const story_service_1 = require("../services/story.service");
async function storyRoutes(fastify) {
    fastify.get('/', {
        schema: {
            tags: ['stories'],
            description: 'Get all stories',
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string', format: 'uuid' },
                            title: { type: 'string' },
                            content: { type: 'string' },
                            author: { type: 'string' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' }
                        }
                    }
                }
            }
        }
    }, async () => {
        return story_service_1.storyService.getAllStories();
    });
    fastify.get('/:id', {
        schema: {
            tags: ['stories'],
            description: 'Get a story by ID',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        title: { type: 'string' },
                        content: { type: 'string' },
                        author: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                },
                404: {
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const story = await story_service_1.storyService.getStory(id);
        if (!story) {
            reply.code(404);
            return { error: 'Story not found' };
        }
        return story;
    });
    fastify.post('/', {
        schema: {
            tags: ['stories'],
            description: 'Create a new story',
            body: {
                type: 'object',
                required: ['title', 'content', 'author'],
                properties: {
                    title: { type: 'string' },
                    content: { type: 'string' },
                    author: { type: 'string' }
                }
            },
            response: {
                201: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        title: { type: 'string' },
                        content: { type: 'string' },
                        author: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                }
            }
        }
    }, async (request) => {
        const storyData = request.body;
        return story_service_1.storyService.createStory(storyData);
    });
    fastify.put('/:id', {
        schema: {
            tags: ['stories'],
            description: 'Update a story by ID',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' }
                }
            },
            body: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    content: { type: 'string' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        title: { type: 'string' },
                        content: { type: 'string' },
                        author: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                },
                404: {
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const updateData = request.body;
        const updatedStory = await story_service_1.storyService.updateStory(id, updateData);
        if (!updatedStory) {
            reply.code(404);
            return { error: 'Story not found' };
        }
        return updatedStory;
    });
    fastify.delete('/:id', {
        schema: {
            tags: ['stories'],
            description: 'Delete a story by ID',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                404: {
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const deleted = await story_service_1.storyService.deleteStory(id);
        if (!deleted) {
            reply.code(404);
            return { error: 'Story not found' };
        }
        return { message: 'Story deleted successfully' };
    });
}
