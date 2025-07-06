import { CreateProductCategoryDto } from 'src/product/dto';
import { CategoryEntity } from 'src/product/entities/product-category.entity';
import { ProductCategoryRepository } from 'src/product/persistence/product-category.repository';
import { CreateProductCategoryUseCase } from 'src/product/use-cases/category/create-category.use-case';

describe('CreateCategoryUseCase', () => {
  let useCase: CreateProductCategoryUseCase;
  let mockRepository: jest.Mocked<ProductCategoryRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
    } as any;

    useCase = new CreateProductCategoryUseCase(mockRepository);
  });

  it('should create a new category and return it', async () => {
    const newCategory: CreateProductCategoryDto = {
      name: 'Bebidas',
      description: 'Todas as bebidas disponíveis',
    };

    const category = new CategoryEntity(newCategory);
    mockRepository.create.mockResolvedValue(category);

    const result = await useCase.execute(newCategory);

    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.any(CategoryEntity),
    );
    expect(result).toEqual(category);
  });
});
