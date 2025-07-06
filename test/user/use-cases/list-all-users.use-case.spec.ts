import { UserRepository } from 'src/user/persistence/user.repository';
import { ListAllUsersUseCase } from 'src/user/use-cases/list-all-users.use-case';
import { UserEntity } from 'src/user/entities/user.entity';

describe('ListAllUsersUseCase', () => {
  let useCase: ListAllUsersUseCase;
  let mockRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
    } as any;

    useCase = new ListAllUsersUseCase(mockRepository);
  });

  it('should return a list of all users', async () => {
    const users: UserEntity[] = [
      {
        id: 'uuid-1',
        name: 'John Doe',
        email: 'jane.doe@example.com',
        password: 'securepassword',
        birthday: new Date('1990-01-01'),
        dd: '01',
        phone: '12345-6789',
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        id: 'uuid-2',
        name: 'Jane Doe',
        email: 'jane2@example.com',
        password: 'anotherpassword',
        birthday: new Date('1992-02-02'),
        dd: '02',
        phone: '98765-4321',
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
    ];

    mockRepository.findAll.mockResolvedValue(users);

    const result = await useCase.execute();

    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(users);
  });
});
