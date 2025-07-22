import { CreateOrderUseCase } from 'src/order/use-cases/create-order.use-case';
import { createOrder, createOrderItem } from '../factory/order.factory';
import { v4 as uuid } from 'uuid';

describe('CreateOrderUseCase', () => {
  let createOrderUseCase;
  let orderRepository;
  beforeEach(() => {
    orderRepository = {
      create: jest.fn(),
      createOrderItem: jest.fn(),
    };

    createOrderUseCase = new CreateOrderUseCase(orderRepository);
  });

  it('should create an order with items', async () => {
    // Arrange
    const order = createOrder();
    const items = [
      createOrderItem({ id: uuid() }),
      createOrderItem({ id: uuid() }),
    ];
    // Act
    const response = await createOrderUseCase.execute(order, items);

    // Assert
    expect(response.order).toBe(order);
    expect(response.items[0]).toBe(items[0]);
    expect(response.items[1]).toBe(items[1]);
  });
});
