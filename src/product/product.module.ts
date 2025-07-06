import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductEntity } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryController } from './product-category.controller';
import { CategoryEntity } from './entities/product-category.entity';
import { ProductRepository } from './persistence/product.repository';
import { CreateProductUseCase } from './use-cases/product/create-product.use-case';
import { ProductCategoryRepository } from './persistence/product-category.repository';
import { CreateProductCategoryUseCase } from './use-cases/category/create-category.use-case';
import { FindAllProductCategoryUseCase } from './use-cases/category/list-all-categories.use-case';
import { FindAllProductsUseCase } from './use-cases/product/list-all-products.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity])],
  controllers: [ProductController, ProductCategoryController],
  providers: [
    {
      provide: 'IProductRepository',
      useClass: ProductRepository,
    },
    CreateProductUseCase,
    FindAllProductsUseCase,
    {
      provide: 'IProductCategoryRepository',
      useClass: ProductCategoryRepository,
    },
    CreateProductCategoryUseCase,
    FindAllProductCategoryUseCase,
  ],
})
export class ProductModule {}
