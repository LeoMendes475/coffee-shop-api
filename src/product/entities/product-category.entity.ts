import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'products_categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;

  constructor(props: {
    name: string;
    description: string;
    categoryId?: string;
    createdAt?: Date;
    deletedAt?: Date | null;
  } = {} as any,
  id?: string,) {
    Object.assign(this, props);

    this.id = id ?? uuid();
    this.createdAt = props?.createdAt ?? new Date();
  }
}
