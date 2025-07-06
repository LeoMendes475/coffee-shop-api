import { Inject, Injectable } from '@nestjs/common';

import { ProductCategoryRepository } from 'src/product/persistence/product-category.repository';

@Injectable()
export class FindAllProductCategoryUseCase {
  constructor(
    @Inject('IProductCategoryRepository')
    private readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  async execute() {
    return this.productCategoryRepository.findAll();
  }
}
