import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let userRepositoryMock: Partial<Record<keyof Repository<User>, jest.Mock>>;

  beforeEach(async () => {
    userRepositoryMock = {
      find: jest.fn().mockResolvedValue([
        { id: 1, userName: 'user1', password: 'pass1', role: 'role1' },
        { id: 2, userName: 'user2', password: 'pass2', role: 'role2' },
        { id: 3, userName: 'user3', password: 'pass3', role: 'role3' },
      ]),
      create: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const mockUser: CreateUserDto = {
      userName: 'testUser',
      password: 'testPassword',
      role: 'user',
    };
    const mockCreatedUser = { id: 1, ...mockUser };

    jest.spyOn(service['userRepository'], 'create').mockReturnValue(mockCreatedUser);
    jest.spyOn(service['userRepository'], 'save').mockResolvedValue(mockCreatedUser);

    const result = await service.create(mockUser);

    expect(result).toEqual(mockCreatedUser);
    expect(service['userRepository'].create).toHaveBeenCalledWith(mockUser);
    expect(service['userRepository'].save).toHaveBeenCalledWith(mockCreatedUser);
  });

  it('should return all users', async () => {
    const result = await service.findAll('10');
    expect(result).toHaveLength(3); 
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('userName');
    expect(result[0]).toHaveProperty('password');
    expect(result[0]).toHaveProperty('role');
  });


})