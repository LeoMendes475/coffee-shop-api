import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateProductDto } from './dto';
import { CreateProductUseCase } from './use-cases/create-product.use-case';

@Controller('product')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  // @Get()
  // async listAllProducts(@Res() response: Response) {
  //   const productList = await this.productService.listAllProducts();

  //   return response.status(200).json(productList);
  // }

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    const product = await this.createProductUseCase.execute(dto);

    return product;
  }

  // @Put('/:id')
  // async updateProduct(@Param('id') id: string, @Body() dto: EditProductDto) {
  //   const { product, message } = await this.productService.updateProduct(
  //     id,
  //     dto,
  //   );

  //   return [product, message];
  // }

  // @Delete('/:id')
  // async deleteProduct(@Param('id') id: string) {
  //   const { message } = await this.productService.deleteProduct(id);

  //   return [message];
  // }
}
