import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from '../persistence/order.repository';
import { CreateOrderDto } from '../dto/order.dto';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('IOrderRepository')
    private readonly orderRepository: OrderRepository,
  ) {}

  async execute(dto: CreateOrderDto) {
    // Create a new order
    const order = new OrderEntity({
      totalValue: dto.totalValue,
    });

    // Create order items
    const orderItems = dto.items.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    // Save the order and its items
    await this.orderRepository.create(order);
    await this.orderRepository.createOrderItem(orderItems, order.id);

    // Log the created order

    console.log('Order created:', order);

    return;
  }
}
