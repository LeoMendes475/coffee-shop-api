import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  totalValue: number;

  @IsArray()
  items: CreateOrderItemDto[];
}

export class CreateOrderItemDto {
  @IsString()
  orderId: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class CreateOrderResponseDto {
  order: {
    id: string;
    totalValue: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };
  items: {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
  }[];
}