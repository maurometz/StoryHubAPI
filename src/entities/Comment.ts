import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import type { Story } from './Story.js';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'varchar', length: 255 })
  author!: string;

  @Column({ type: 'varchar', length: 36 })
  storyId!: string;

  @ManyToOne('Story', 'comments')
  @JoinColumn({ name: 'storyId' })
  story!: Story;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
} 