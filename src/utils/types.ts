import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  take?: number;

  @IsOptional()
  @Min(0)
  skip?: number;
}