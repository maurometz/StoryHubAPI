import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Story } from './Story';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  content!: string;

  @Column()
  author!: string;

  @Column({ type: 'varchar', length: 36 })
  storyId!: string;

  @ManyToOne(() => Story, story => story.comments)
  @JoinColumn({ name: 'storyId' })
  story!: Story;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
} 