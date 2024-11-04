import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto';

import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { ListAllUsersUseCase } from './use-cases/list-all-users.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly listAllUsersUseCase: ListAllUsersUseCase
  ) {}

  @Get()
  async findAllUsers(@Res() response: Response): Promise<any> {
    const usersList = await this.listAllUsersUseCase.execute();

    return response.status(200).json(usersList);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto, @Res() response: Response) {
    const user = await this.createUserUseCase.execute(dto);

    if (!user) return response.status(500).json("Server error");

    return response.status(200).json("User created successfuly!");
  }
}
