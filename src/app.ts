import fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import storyRoutes from './routes/story.routes.js';

const app = fastify({
  logger: true,
});

// Register plugins
app.register(cors, {
  origin: true,
});

// Register Swagger
app.register(swagger, {
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

app.register(swaggerUi, {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  },
  staticCSP: true
});

// Register routes
app.register(storyRoutes, { prefix: '/api/stories' });

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

export default app; 