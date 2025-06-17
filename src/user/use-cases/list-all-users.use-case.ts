import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../persistence/user.repository';

@Injectable()
export class ListAllUsersUseCase {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute() {
    return this.userRepository.findAll();
  }
}
