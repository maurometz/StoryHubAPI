import { Story } from '../entities/Story.js';
import { AppDataSource } from '../config/database.js';
import { CreateStoryDTO, UpdateStoryDTO } from '../types/story.types.js';

export class StoryService {
  private storyRepository = AppDataSource.getRepository(Story);

  async createStory(data: CreateStoryDTO): Promise<Story> {
    const story = this.storyRepository.create(data);
    return await this.storyRepository.save(story);
  }

  async getAllStories(): Promise<Story[]> {
    return await this.storyRepository.find({
      relations: ['comments']
    });
  }

  async getStoryById(id: string): Promise<Story | null> {
    return await this.storyRepository.findOne({
      where: { id },
      relations: ['comments']
    });
  }

  async updateStory(id: string, data: UpdateStoryDTO): Promise<Story | null> {
    await this.storyRepository.update(id, data);
    return await this.getStoryById(id);
  }

  async deleteStory(id: string): Promise<void> {
    await this.storyRepository.delete(id);
  }
} 