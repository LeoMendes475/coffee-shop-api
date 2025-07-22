import { CreateOrderDto } from '../dto/order.dto';
import { OrderEntity } from '../entities/order.entity';

export interface IOrderRepository {
  create(order: CreateOrderDto): Promise<OrderEntity>;
}
