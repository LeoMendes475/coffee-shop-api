import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { IOrderRepository } from '../interfaces/order.interface';
import { OrderItemEntity } from '../entities/orderItem.entity';
import { CreateOrderResponseDto } from '../dto/order.dto';
import { PaginatedOutputDto, PaginationDto } from 'src/utils/types';

export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
    private readonly orderItemRepository: Repository<OrderItemEntity>,
  ) { }

  async create(order: OrderEntity): Promise<CreateOrderResponseDto['order']> {
    return this.repository.save(order);
  }

  async createOrderItem(
    item: OrderItemEntity
  ): Promise<OrderItemEntity> {
    return this.orderItemRepository.save(item);
  }

  async listAll(paginationDto: PaginationDto): Promise<[OrderEntity[], number]> {
    return this.repository.findAndCount({
      take: paginationDto.take,
      skip: paginationDto.skip,
    });
  }
}
