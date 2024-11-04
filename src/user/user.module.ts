import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './persistence/user.repository';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { ListAllUsersUseCase } from './use-cases/list-all-users.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    }, 
    CreateUserUseCase,
    ListAllUsersUseCase
  ],
})
export class UserModule { }
