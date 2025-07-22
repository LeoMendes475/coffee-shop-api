export function createOrder(overrides = {}) {
  return {
    id: '123e4567-e89b-12d3-a456-426614174000',
    totalValue: 100,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
    ...overrides,
  };
}

export function createOrderItem(overrides = {}) {
  return {
    id: '312e4444-e89b-12d3-a456-426614174000',
    orderId: '123e4567-e89b-12d3-a456-426614174000',
    productId: 'product-123',
    userId: 'user-456',
    quantity: 2,
    price: 50,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
    ...overrides,
  };
}
