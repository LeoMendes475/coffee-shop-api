import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../persistence/order.repository";
import { PaginatedOutputDto } from "src/utils/types";
import { OrderEntity } from "../entities/order.entity";

@Injectable()
export class ListAllOrdersUseCase {
    constructor(private readonly orderRepository: OrderRepository) { }

    async execute({ take, skip }: { take: number; skip: number }): Promise<PaginatedOutputDto<OrderEntity>> {
        const [items, totalCount] = await this.orderRepository.listAll({
            take,
            skip,
        });

        return new PaginatedOutputDto<OrderEntity>(items, totalCount, skip, take);
    }
}