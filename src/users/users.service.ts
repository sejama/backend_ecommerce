
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@app/database/schemas/user.schema';


@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    /*
    const { password } = createUserDto;
    const plainToHash = awair bycrypt.hash(password, 10);
    createUserDto = {... createUserDto, password: plainToHash}
    */
    return this.database.User().create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.database.User().getAll();
  }

  async findOne(id: string): Promise<User | undefined> {
    const user = this.database.User().get(id);
    return user
  }
  
  async findOneByUsername(username: string): Promise<User | undefined> {
    const user = this.database.User().getOne(username );
    return user
    
  }

  async findOneByEmail(email: string):Promise<User | undefined> {
    const user = await this.database.User().getOne(email);
    return user;
  }
  
  async update(id: string, createUserDto: CreateUserDto):Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.database.User().update(id, createUserDto);
  }

  async remove(id: string) {
    return this.database.User().delete(id);
  }
}
