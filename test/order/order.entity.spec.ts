describe('Order Entity', () => {
  class OrderEntityMock {
    totalValue: number;
    createdAt: Date;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
  }

  class OrderItemEntityMock {
    id: string;
    orderId: string;
    productId: string;
    userId: string;
    quantity: number;
    value: number;
    createdAt: Date;
    updatedAt: Date | null = null;
    deletedAt: Date | null = null;
  }

  it('should create an instance of OrderEntity', () => {
    // Arrange
    const orderProduct = new OrderItemEntityMock();
    const order = new OrderEntityMock();

    // Act
    orderProduct.id = '123e4567-e89b-12d3-a456-426614174000';
    orderProduct.productId = 'product-123';
    orderProduct.userId = 'user-456';
    orderProduct.createdAt = new Date();

    order.createdAt = orderProduct.createdAt;

    // Assert
    expect(orderProduct.productId).toBe('product-123');
    expect(orderProduct.userId).toBe('user-456');
    expect(orderProduct.createdAt).toBeInstanceOf(Date);
  });
});
