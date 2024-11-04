import { CategoryEntity } from "../entities/product-category.entity";

export interface IProductCategoryRepository {
  create(product: CategoryEntity): Promise<CategoryEntity>;
  findById(id: string): Promise<CategoryEntity | null>;
  findAll(): Promise<CategoryEntity[]>;
  update(product: CategoryEntity): Promise<CategoryEntity>;
  delete(product: CategoryEntity): Promise<void>;
}
