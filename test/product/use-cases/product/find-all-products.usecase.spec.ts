import { ProductEntity } from 'src/product/entities/product.entity';
import { ProductRepository } from 'src/product/persistence/product.repository';
import { FindAllProductsUseCase } from 'src/product/use-cases/product/list-all-products.use-case';

describe('FindAllProductsUseCase', () => {
  let useCase: FindAllProductsUseCase;
  let mockRepository: jest.Mocked<ProductRepository>;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
    } as any;

    useCase = new FindAllProductsUseCase(mockRepository);
  });

  it('should return a list of products', async () => {
    const fakeProducts: ProductEntity[] = [
      new ProductEntity({
        name: 'Café Expresso',
        value: 19.9,
        quantityAvailable: 10,
        description: 'Café arábica premium',
        categoryId: '12345',
      }),
      new ProductEntity({
        name: 'Capuccino',
        value: 19.9,
        quantityAvailable: 4,
        description: 'Café com leite',
        categoryId: '32145',
      }),
    ];

    mockRepository.findAll.mockResolvedValue(fakeProducts);

    const result = await useCase.execute();

    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(fakeProducts);
  });
});
