import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from '../persistence/order.repository';
import { CreateOrderDto, CreateOrderResponseDto } from '../dto/order.dto';
import { OrderEntity } from '../entities/order.entity';
import { OrderItemEntity } from '../entities/orderItem.entity';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('IOrderRepository')
    private readonly orderRepository: OrderRepository,
  ) {}

  async execute(dto: CreateOrderDto, userId: string): Promise<CreateOrderResponseDto> {
    const order = new OrderEntity({
      totalValue: dto.totalValue,
      userId: userId,
    });

    await this.orderRepository.create(order);

    const orderItemsList = [];
    for (const item of dto.items) {
      const orderItem = new OrderItemEntity({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      });
      await this.orderRepository.createOrderItem(orderItem);
      orderItemsList.push(orderItem);
    }

    return {
      order,
      items: orderItemsList,
    };
  }
}
