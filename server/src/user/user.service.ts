import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
  @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // findAll(limit: string) {
  //   let options: FindManyOptions<User>;
  //   if (limit) options = { take: +limit };
  //   return this.userRepository.find(options);
  // }
  findOneByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }
  saludo(){
    return "hola"
  }
}
