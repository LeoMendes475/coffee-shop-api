import { CreateOrderUseCase } from 'src/order/use-cases/create-order.use-case';
import { createOrder, createOrderItem } from '../factory/order.factory';

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
      createOrderItem(),
      createOrderItem(),
    ];

    const payload = {
      totalValue: order.totalValue,
      items
    };

    // Act
    const response = await createOrderUseCase.execute(payload, 'user-123');

    // Assert
    expect(response.order).toEqual(expect.objectContaining({
      totalValue: order.totalValue,
      userId: 'user-123',
    }));

    expect(response.items).toHaveLength(2);
    expect(response.items[0]).toEqual(expect.objectContaining({
      quantity: items[0].quantity,
      price: items[0].price,
    }));

    expect(response.items[1]).toEqual(expect.objectContaining({
      quantity: items[1].quantity,
      price: items[1].price,
    }));
  });
});
