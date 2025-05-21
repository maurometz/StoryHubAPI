import { FastifyInstance } from 'fastify';
import { StoryService } from '../services/story.service.js';
import { CreateStoryDTO, UpdateStoryDTO } from '../types/story.types.js';

export default async function storyRoutes(fastify: FastifyInstance) {
  const storyService = new StoryService();

  fastify.post<{ Body: CreateStoryDTO }>('/stories', async (request, reply) => {
    const story = await storyService.createStory(request.body);
    return reply.code(201).send(story);
  });

  fastify.get('/stories', async () => {
    return await storyService.getAllStories();
  });

  fastify.get<{ Params: { id: string } }>('/stories/:id', async (request, reply) => {
    const story = await storyService.getStoryById(request.params.id);
    if (!story) {
      return reply.code(404).send({ error: 'Story not found' });
    }
    return story;
  });

  fastify.put<{ Params: { id: string }; Body: UpdateStoryDTO }>('/stories/:id', async (request, reply) => {
    const story = await storyService.updateStory(request.params.id, request.body);
    if (!story) {
      return reply.code(404).send({ error: 'Story not found' });
    }
    return story;
  });

  fastify.delete<{ Params: { id: string } }>('/stories/:id', async (request, reply) => {
    await storyService.deleteStory(request.params.id);
    return reply.code(204).send();
  });
} 