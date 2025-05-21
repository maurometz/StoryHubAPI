"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyService = void 0;
const Story_1 = require("../entities/Story");
const database_1 = require("../config/database");
class StoryService {
    constructor() {
        this.storyRepository = database_1.AppDataSource.getRepository(Story_1.Story);
    }
    async createStory(data) {
        const story = this.storyRepository.create(data);
        return this.storyRepository.save(story);
    }
    async getStory(id) {
        return this.storyRepository.findOneBy({ id });
    }
    async getAllStories() {
        return this.storyRepository.find();
    }
    async updateStory(id, data) {
        const story = await this.getStory(id);
        if (!story)
            return null;
        Object.assign(story, data);
        return this.storyRepository.save(story);
    }
    async deleteStory(id) {
        const result = await this.storyRepository.delete(id);
        return result.affected ? result.affected > 0 : false;
    }
}
exports.storyService = new StoryService();
