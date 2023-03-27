import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  register(@Body() userObject: CreateUserDto) {
    return this.authService.register(userObject);
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginUserDto) {
    return this.authService.login(loginAuthDto);
  }

  
}
