export function createOrder(overrides = {}) {
  return {
    totalValue: 100,
    userId: 'user-456',
    ...overrides,
  };
}

export function createOrderItem(overrides = {}) {
  return {
    orderId: '123e4567-e89b-12d3-a456-426614174000',
    productId: 'product-123',
    quantity: 2,
    price: 50,
    ...overrides,
  };
}
