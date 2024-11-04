import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product.dto';
import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../persistence/product.repository';

@Injectable()
export class CreateProductUseCase {
  constructor(@Inject('IProductRepository') private readonly productRepository: ProductRepository) {}

  async execute(dto: CreateProductDto) {
    const product = new ProductEntity(dto);
    return this.productRepository.create(product);
  }
}
