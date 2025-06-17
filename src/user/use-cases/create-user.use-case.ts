import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '../dto';
import { UserRepository } from '../persistence/user.repository';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute(dto: CreateUserDto) {
    const user = new UserEntity(dto);
    user.password = await bcrypt.hash(dto.password, 10);

    return this.userRepository.create(user);
  }
}
