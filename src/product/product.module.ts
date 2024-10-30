import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductEntity } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryController } from './product-category.controller';
import { CategoryEntity } from './entities/product-category.entity';
import { ProductCategoryService } from './productCategory.service';
import { ProductRepository } from './persistence/product.repository';
import { CreateProductUseCase } from './use-cases/create-product.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity])],
  controllers: [ProductController, ProductCategoryController],
  providers: [
    {
      provide: 'IProductRepository',
      useClass: ProductRepository,
    },
    ProductCategoryService,
    CreateProductUseCase,
  ],
})
export class ProductModule {}
