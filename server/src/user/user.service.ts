import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';


@Injectable()
export class UserService {
  static findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(

  @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(user: CreateUserDto) {
    return this.userRepository.save(this.userRepository.create(user));
  }

  findAll(limit: string) {
    let options: FindManyOptions<User>;
    if (limit) options = { take: +limit };
    return this.userRepository.find(options);
  }


}
