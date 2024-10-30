import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { CategoryEntity } from './entities/product-category.entity';
import { CreateProductCategoryDto } from './dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(dto: CreateProductCategoryDto) {
    const category = new CategoryEntity();

    category.id = uuid();
    category.name = dto.name;
    category.description = dto.description;
    category.createdAt = new Date();

    await this.categoryRepository.save(category);

    return {
      message: 'Category created successfully.',
      category,
    };
  }

  async getAllCategories() {
    const categoriesList = await this.categoryRepository.find();

    return categoriesList;
  }
}
