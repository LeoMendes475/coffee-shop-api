import { Inject, Injectable } from '@nestjs/common';

import { CreateProductCategoryDto } from 'src/product/dto/product-category.dto';
import { CategoryEntity } from 'src/product/entities/product-category.entity';
import { ProductCategoryRepository } from 'src/product/persistence/product-category';

@Injectable()
export class CreateProductCategoryUseCase {
  constructor(@Inject('IProductCategoryRepository') private readonly productCategoryRepository: ProductCategoryRepository) {}

  async execute(dto: CreateProductCategoryDto) {
    const product = new CategoryEntity(dto);
    return this.productCategoryRepository.create(product);
  }
}
