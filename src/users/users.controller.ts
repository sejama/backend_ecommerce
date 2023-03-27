import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@app/database/schemas/user.schema';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
//import { UpdateUserDto } from './dto/login-user.dto';




@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * 
   * @param createUserDto 
   * @returns 
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  /**
   * 
   * @returns 
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  /**
   * 
   * @param email 
   * @returns 
   */
  @Get(':email')
  findOneEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.findOneByEmail(email);
  }

  /**
   * 
   * @param username 
   * @returns 
   */
  @Get(':username')
  findOneUsername(@Param('username') username: string): Promise<User> {
    return this.usersService.findOneByUsername(username);
  }

  /**
   * 
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
