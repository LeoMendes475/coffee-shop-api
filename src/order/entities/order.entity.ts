import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductEntity } from "./orderProduct.entity";

@Entity({ name: 'order' })
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    totalValue: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date | null;

    @Column({ nullable: true })
    deletedAt: Date | null;
}