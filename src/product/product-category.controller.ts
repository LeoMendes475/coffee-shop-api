import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateProductCategoryDto } from './dto';
import { CreateProductCategoryUseCase } from './use-cases/category/create-category.use-case';
import { FindAllProductCategoryUseCase } from './use-cases/category/list-all-categories.use-case';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly createProductCategoryUseCase: CreateProductCategoryUseCase,
    private readonly findAllProductCategoryUseCase: FindAllProductCategoryUseCase
  ) {}

  @Get()
  async categoryAllList(@Res() response: Response): Promise<any> {
    const categoriesList = await this.findAllProductCategoryUseCase.execute();

    if (!categoriesList) return response.status(500).json(['Server error!']);

    return response.status(200).json(categoriesList);
  }

  @Post()
  async createCategory(
    @Body() dto: CreateProductCategoryDto,
    @Res() response: Response,
  ): Promise<any> {
    const category = await this.createProductCategoryUseCase.execute(dto);

    if (!category) return response.status(500).json(['Server error!']);

    return response.status(200).json("Category created successfuly!");
  }
}
