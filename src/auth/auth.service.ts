import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private database: DatabaseService,
    private userService: UsersService,
    private jwtService: JwtService) {}
  
  register(register: CreateUserDto) {
    return this.userService.create(register);
  }

  //FIXME: Solucionar login
  async login(loginAuthDto: LoginUserDto) {
    const { email, password } = loginAuthDto;
    const findUser = await this.database.User().getOne(email);
    console.log(findUser);
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await bcrypt.compare(password, findUser.password);
    //console.log(checkPassword)
    if (!checkPassword) throw new HttpException('Forbidden', 403);
    
    const payload = {id: findUser._id, email:findUser.email, username:findUser.username}
    const token = this.jwtService.sign(payload)

    const data = {
      user: findUser,
      token
    }

    return data
  }
  
}
