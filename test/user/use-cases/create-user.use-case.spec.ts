import { CreateUserDto } from 'src/user/dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/persistence/user.repository';
import { CreateUserUseCase } from 'src/user/use-cases/create-user.use-case';

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;
  let mockRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
    } as any;

    useCase = new CreateUserUseCase(mockRepository);
  });

  it('should create a user successfully', async () => {
    const userData: CreateUserDto = {
      name: 'John Doe',
      email: 'jane.doe@example.com',
      password: 'securepassword',
      birthday: new Date('1990-01-01'),
      dd: '01',
      phone: '12345-6789',
    };
    const user = new UserEntity(userData);
    mockRepository.create.mockResolvedValue(user);

    const createdUser = await useCase.execute(user);

    expect(mockRepository.create).toHaveBeenCalledWith(expect.any(UserEntity));
    expect(user).toEqual(createdUser);
  });
});
