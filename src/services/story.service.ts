import { Story } from '../entities/Story';
import { AppDataSource } from '../config/database';
import { CreateStoryDTO, UpdateStoryDTO } from '../types/story.types';

class StoryService {
  private storyRepository = AppDataSource.getRepository(Story);

  async createStory(data: CreateStoryDTO): Promise<Story> {
    const story = this.storyRepository.create(data);
    return this.storyRepository.save(story);
  }

  async getStory(id: string): Promise<Story | null> {
    return this.storyRepository.findOneBy({ id });
  }

  async getAllStories(): Promise<Story[]> {
    return this.storyRepository.find();
  }

  async updateStory(id: string, data: UpdateStoryDTO): Promise<Story | null> {
    const story = await this.getStory(id);
    if (!story) return null;

    Object.assign(story, data);
    return this.storyRepository.save(story);
  }

  async deleteStory(id: string): Promise<boolean> {
    const result = await this.storyRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}

export const storyService = new StoryService(); 