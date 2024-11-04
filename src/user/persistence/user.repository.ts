import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '../interfaces/user-repository.controller';
import { UserEntity } from '../entities/user.entity';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return this.repository.save(user);
  }

  async findById(id: string): Promise<UserEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  async update(user: UserEntity): Promise<UserEntity> {
    return this.repository.save(user);
  }

  async delete(user: UserEntity): Promise<void> {
    await this.repository.remove(user);
  }
}
