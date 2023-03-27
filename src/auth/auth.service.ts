import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { MailService } from './../mail/mail.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}
  
  /**
   * 
   * @param username 
   * @param password 
   * @returns user
   */
  async validateUser(username, password): Promise<any> {
    const user = await this.usersService.findOneUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    }else{
      throw new NotFoundException('Password not found');
    }
  }

  /**
   * 
   * @param loginUserDto 
   * @returns user and token
   */
  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
    
    if (user) {
      const payload = {
        username: user.username,
        email: user.email,
        sub: user._id,
      };
      return {
        user: user,
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  /**
   * 
   * @param registerUserDto 
   * @returns user and token
   */
  async register(registerUserDto: RegisterUserDto) {
    const userMail = await this.usersService.findOneEmail(registerUserDto.email);
    
    if (userMail) {
      throw new HttpException(
        'User with this email exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.usersService.findOneUsername(registerUserDto.username);
    if (user) {
      throw new HttpException(
        'User with this username exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.password, saltOrRounds);
    const createOne = await this.usersService.createOne({
      ...registerUserDto,
      password: hash,
    });
    if (createOne) {
      await this.mailService.sendMailNewUser(createOne);
      const payload = {
        username: createOne.username,
        email: createOne.email,
        sub: createOne._id,
      };
      return {
        user: createOne,
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}