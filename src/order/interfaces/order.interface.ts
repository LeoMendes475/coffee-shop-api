import { PaginationDto } from 'src/utils/types';
import { CreateOrderDto } from '../dto/order.dto';
import { OrderEntity } from '../entities/order.entity';
import { OrderItemEntity } from '../entities/orderItem.entity';

export interface IOrderRepository {
  create(order: OrderEntity): Promise<OrderEntity>;
  createOrderItem(item: OrderItemEntity): Promise<OrderItemEntity>;
  listAll(paginationDto: PaginationDto): Promise<[OrderEntity[], number]>;
}
