import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OrderStatus } from '../enum/orderStatus.enum';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalValue: number;

  @Column()
  userId: string;

  @Column()
  status: OrderStatus;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date | null;

  @Column({ nullable: true })
  deletedAt: Date | null;

  constructor(
    props: {
      totalValue: number;
      userId: string;
      status?: OrderStatus;
      createdAt?: Date;
      updatedAt?: Date | null;
      deletedAt?: Date | null;
    } = {} as any,
    id?: string,
  ) {
    this.id = id ?? uuid();
    this.totalValue = props.totalValue;
    this.userId = props.userId;
    this.status = props.status || OrderStatus.PENDING;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || null;
    this.deletedAt = props.deletedAt || null;
  }
}
