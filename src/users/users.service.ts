import { Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { UsersRepository } from './schema/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * 
   * @param username 
   * @returns 
   */
  async findOneUsername(username): Promise<any> {
    return this.usersRepository.findOneUsername(username);
  }

  /**
   * 
   * @param email 
   * @returns 
   */
  async findOneEmail(email): Promise<any> {
    return this.usersRepository.findOneEmail(email);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOneById(id): Promise<any> {
    const findOneById = isValidObjectId(id) && await this.usersRepository.findOneById(id);
    return findOneById;
  }

  /**
   * 
   * @param user 
   * @returns 
   */
  async createOne(user): Promise<any> {
    const createOne = await this.usersRepository.createOne(user);
    return createOne;
  }
}