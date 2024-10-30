import { ProductEntity } from '../entities/product.entity';

export interface IProductRepository {
  create(product: ProductEntity): Promise<ProductEntity>;
  findById(id: string): Promise<ProductEntity | null>;
  findAll(): Promise<ProductEntity[]>;
  update(product: ProductEntity): Promise<ProductEntity>;
  delete(product: ProductEntity): Promise<void>;
}
