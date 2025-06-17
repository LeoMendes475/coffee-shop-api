import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateProductDto } from './dto';
import { CreateProductUseCase } from './use-cases/product/create-product.use-case';
import { FindAllProductsUseCase } from './use-cases/product/list-all-products.use-case';

@Controller('product')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
  ) {}
  @Get()
  async categoryAllList(@Res() response: Response): Promise<any> {
    const categoriesList = await this.findAllProductsUseCase.execute();

    if (!categoriesList) return response.status(500).json(['Server error!']);

    return response.status(200).json(categoriesList);
  }

  @Post()
  async createProduct(
    @Body() dto: CreateProductDto,
    @Res() response: Response,
  ) {
    const product = await this.createProductUseCase.execute(dto);

    if (!product) return response.status(500).json('Server error');

    return response.status(200).json('Product created successfuly!');
  }
}
