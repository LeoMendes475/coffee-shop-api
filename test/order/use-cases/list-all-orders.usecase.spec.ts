import { OrderRepository } from "src/order/persistence/order.repository";

describe('ListAllOrdersUseCase', () => {
    let useCase: ListAllOrdersUseCase;
    let orderRepository: OrderRepository;

    beforeEach(() => {
        orderRepository = new OrderRepository();
        useCase = new ListAllOrdersUseCase(orderRepository);
    });

    it('should list all orders', async () => {
        // Arrange
        const mockOrders = [
            { id: '1', totalValue: 100, userId: 'user1' },
            { id: '2', totalValue: 200, userId: 'user2' },
        ];

        // Act
        const result = await useCase.execute({ take: 10, skip: 0 });

        // Assert
        expect(result.data).toEqual(mockOrders);
        expect(result.metadata).toEqual(expect.objectContaining({
            page: 1,
            pageSize: 10,
            totalPages: 1,
            total: mockOrders.length,
        }));
    });
});