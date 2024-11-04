import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { CategoryEntity } from './product-category.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'quantity_available', nullable: false })
  quantityAvailable: number;

  @Column({ name: 'description', length: 255 })
  description: string;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  category: CategoryEntity;

  @Column({ name: 'categoryId', nullable: false })
  categoryId: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;

  constructor(
    props: {
      name: string;
      value: number;
      quantityAvailable: number;
      description: string;
      categoryId: string;
      createdAt?: Date;
      updatedAt?: Date | null;
      deletedAt?: Date | null;
    } = {} as any,
    id?: string,
  ) {
    // if (!props.name) console.log("teste");
    // if (props.value === undefined || props.value < 0) throw new Error('Value is required and must be non-negative');
    // if (props.quantityAvailable === undefined || props.quantityAvailable < 0) throw new Error('Quantity is required and must be non-negative');
    // if (!props.categoryId) throw new Error('Category ID is required');

    Object.assign(this, props);
    this.id = id ?? uuid();
    this.createdAt = props?.createdAt ?? new Date();
  }
}
