import { OrderRepository } from "src/order/persistence/order.repository";
import { ListAllOrdersUseCase } from "src/order/use-cases/list-all-orders.usecase";

describe('ListAllOrdersUseCase', () => {
    let useCase: ListAllOrdersUseCase;
    let mockRepository: any;

    beforeEach(() => {
        mockRepository = {
            listAll: jest.fn(),
            create: jest.fn(),
            createOrderItem: jest.fn(),
            repository: {},
            orderItemRepository: {}
        };
        useCase = new ListAllOrdersUseCase(mockRepository)
    });
        
    it('should list all orders with pagination', async () => {
        // Arrange
        const paginationDto = { take: 10, skip: 0 };
        const orders = [
            { id: '1', totalValue: 100, userId: 'user-123' },
            { id: '2', totalValue: 200, userId: 'user-456' }
        ];
        
        mockRepository.listAll.mockResolvedValue([orders, orders.length]);

        // Act
        const result = await useCase.execute(paginationDto);

        // Assert
        expect(mockRepository.listAll).toHaveBeenCalledWith(paginationDto);
        expect(result.data).toEqual(orders);
        expect(result.metadata.page).toBe(1);
        expect(result.metadata.pageSize).toBe(10);
        expect(result.metadata.totalPages).toBe(1);
        expect(result.metadata.total).toBe(orders.length);
    });
})
    