import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  totalValue: number;

  @IsArray()
  items: CreateOrderItemDto[];
}

export class CreateOrderItemDto {
  @IsString()
  productId: string;

  @IsString()
  userId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsNumber()
  quantityAvailable: number;

  @IsString()
  description: string;

  @IsString()
  categoryId: string;
}
