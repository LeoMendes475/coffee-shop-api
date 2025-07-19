import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity({ name: 'orderProduct' })
export class OrderProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => OrderEntity, (order) => order.id)
    order: OrderEntity;

    @Column()
    productId: string;

    @Column()
    userId: string;

    @Column()
    quantity: number;

    @Column()
    value: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date | null;

    @Column({ nullable: true })
    deletedAt: Date | null;
}