import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Organization } from 'src/organizations/entities/organization.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  published?: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  editedAt?: Date;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user) => user.articles)
  author: User;

  @ManyToOne(() => Organization, organization => organization.articles)
  organization: Organization;
}
