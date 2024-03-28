import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth/auth.guard';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService,
    ){}
    @Post('login')
    login( @Body() login:LoginDto){
        return this.authService.login(login)
    }
    
    @Post('register')
    register( @Body()registerDto:RegisterDto ){
     
        return this.authService.register(registerDto)
    }
    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request()
        req
    ){
        return  req.user
    }
}
