export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateStoryDTO {
  title: string;
  content: string;
  author: string;
}

export interface UpdateStoryDTO {
  title?: string;
  content?: string;
} 