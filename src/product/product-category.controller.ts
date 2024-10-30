import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ProductCategoryService } from './productCategory.service';
import { CreateProductCategoryDto } from './dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Get()
  async categoryAllList(@Res() response: Response): Promise<any> {
    const categoriesList = await this.productCategoryService.getAllCategories();

    return response.status(200).json(categoriesList);
  }

  @Post()
  async createCategory(
    @Body() dto: CreateProductCategoryDto,
    @Res() response: Response,
  ): Promise<any> {
    const { category, message } =
      await this.productCategoryService.createCategory(dto);

    if (!category) return response.status(500).json(['Server error!']);

    return response.status(200).json([category, message]);
  }
}
