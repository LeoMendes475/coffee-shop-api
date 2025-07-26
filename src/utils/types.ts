import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  take?: number;

  @IsOptional()
  @Min(0)
  skip?: number;
}

export class PaginatedOutputDto<T> {
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
  };

  constructor(data: T[], total: number, skip: number, take: number) {
    this.data = data;
    
    const page = Math.floor(skip / take) + 1;
    const totalPages = Math.ceil(total / take);

    this.metadata = {
      page,
      pageSize: take,
      totalPages,
      total,
    };
  }
}

