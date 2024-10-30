import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../interfaces/product-repository.interface';
import { CreateProductDto } from '../dto/product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(dto: CreateProductDto) {
    const product = new ProductEntity(dto);
    return this.productRepository.create(product);
  }
}
