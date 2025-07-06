import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductCategoryRepository } from '../interfaces/product-category-repository.interface';
import { CategoryEntity } from '../entities/product-category.entity';

export class ProductCategoryRepository implements IProductCategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(product: CategoryEntity): Promise<CategoryEntity> {
    return this.repository.save(product);
  }

  async findById(id: string): Promise<CategoryEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<CategoryEntity[]> {
    return this.repository.find();
  }

  async update(product: CategoryEntity): Promise<CategoryEntity> {
    return this.repository.save(product);
  }

  async delete(product: CategoryEntity): Promise<void> {
    await this.repository.remove(product);
  }
}
