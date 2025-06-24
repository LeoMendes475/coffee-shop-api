import { CreateProductDto } from 'src/product/dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { ProductRepository } from 'src/product/persistence/product.repository';
import { CreateProductUseCase } from 'src/product/use-cases/product/create-product.use-case';

describe('CreateProductUseCase', () => {
  let useCase: CreateProductUseCase;
  let mockRepository: jest.Mocked<ProductRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
    } as any;

    useCase = new CreateProductUseCase(mockRepository);
  });

  it('should create a new product and return it', async () => {
    const newProduct: CreateProductDto = {
      name: 'Café Especial',
      value: 19.9,
      quantityAvailable: 10,
      description: 'Café arábica premium',
      categoryId: '12345',
    };

    const product = new ProductEntity(newProduct);
    mockRepository.create.mockResolvedValue(product);

    const result = await useCase.execute(newProduct);

    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.any(ProductEntity),
    );
    expect(result).toEqual(product);
  });
});
