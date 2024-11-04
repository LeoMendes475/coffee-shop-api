import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../persistence/product.repository';

@Injectable()
export class FindAllProductsUseCase {
  constructor(@Inject('IProductRepository') private readonly productRepository: ProductRepository) {}

  async execute() {
    return this.productRepository.findAll();
  }
}
