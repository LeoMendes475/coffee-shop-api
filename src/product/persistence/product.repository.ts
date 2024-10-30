import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductRepository } from '../interfaces/product-repository.interface';
import { ProductEntity } from '../entities/product.entity';

export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async create(product: ProductEntity): Promise<ProductEntity> {
    return this.repository.save(product);
  }

  async findById(id: string): Promise<ProductEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.repository.find();
  }

  async update(product: ProductEntity): Promise<ProductEntity> {
    return this.repository.save(product);
  }

  async delete(product: ProductEntity): Promise<void> {
    await this.repository.remove(product);
  }
}
