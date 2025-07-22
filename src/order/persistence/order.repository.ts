import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { IOrderRepository } from '../interfaces/order.interface';
import { CreateOrderDto, CreateOrderItemDto } from '../dto/order.dto';
import { OrderItemEntity } from '../entities/orderItem.entity';

export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
    private readonly orderItemRepository: Repository<OrderItemEntity>,
  ) {}

  async create(order: CreateOrderDto): Promise<any> {
    return this.repository.save(order);
  }

  async createOrderItem(
    item: CreateOrderItemDto,
    orderId: string,
  ): Promise<OrderItemEntity> {
    const orderProduct = this.orderItemRepository.create({
      ...item,
      order: { id: orderId } as OrderEntity,
    });
    return this.orderItemRepository.save(orderProduct);
  }
}
