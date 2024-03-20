import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService:JwtService){
    }
    async login({email, password}:LoginDto){
       
        const user = await this.usersService.findOneByEmail(email)
       if (!user){
        throw new UnauthorizedException("Email  no valido")
    }
        const isPasswordValid = await bcryptjs.compare(password,user.password)
        if(!isPasswordValid){
            throw new UnauthorizedException("Contraseña no valida"+user)
        }
        const payload ={email: user.email}
        const token = await this.jwtService.signAsync(payload)
        return {token, email}
    }
    async register({ userName, email, password }: RegisterDto) {
        const userxd = await this.usersService.findOneByEmail(email);
    
        if (userxd) {
          throw new BadRequestException("usuario ya existe");
        }
    
        await this.usersService.create({
          userName,
          email,
          password: await bcryptjs.hash(password, 10),
        });
    
        return {
        userName,
          email,
          password
        };
      }

}
