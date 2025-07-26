import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';
import { v4 as uuid } from 'uuid';
import { ProductEntity } from 'src/product/entities/product.entity';

@Entity({ name: 'orderItem' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => OrderEntity, (order) => order.id)
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date | null;

  @Column({ nullable: true })
  deletedAt: Date | null;

  constructor(
    props: {
      orderId: string;
      productId: string;
      quantity: number;
      price: number;
      createdAt?: Date;
      updatedAt?: Date | null;
      deletedAt?: Date | null;
    } = {} as any,
    id?: string,
  ) {
    this.id = id ?? uuid();
    this.order = { id: props.orderId } as OrderEntity;
    this.product = { id: props.productId } as ProductEntity;
    this.quantity = props.quantity;
    this.price = props.price;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || null;
    this.deletedAt = props.deletedAt || null;
  }
}
