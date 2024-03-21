import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let userRepositoryMock: Partial<Record<keyof Repository<User>, jest.Mock>>;

  beforeEach(async () => {
    userRepositoryMock = {
      find: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        userName: 'testuser',
        password: 'testpassword',
        role: 'user',
      };

      const createdUser = { id: 1, ...createUserDto };

      jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

      expect(await controller.create(createUserDto)).toBe(createdUser);
    });
  });

 
  describe('findAll', () => {
    it('should return all users', async () => {
      const limit = '10';
      const mockUsers: User[] = [{ id: 1, userName: 'user1', password: 'password1', role: 'user' }];
      
      jest.spyOn(userService, 'findAll').mockResolvedValue(mockUsers);

      const result = await controller.findAll(limit);

      expect(result).toEqual(mockUsers);
      expect(userService.findAll).toHaveBeenCalledWith(limit);
    });
  });
  

});