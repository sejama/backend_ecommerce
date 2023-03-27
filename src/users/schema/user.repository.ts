import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDo } from './user.do';

export class UsersRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDo>,
  ) {}

  /**
   * 
   * @param user 
   * @returns 
   */
  async createOne(user): Promise<any> {
    const createOne = await this.userModel.create(user);
    return createOne;
  }
  
  /**
   * 
   * @param email 
   * @returns 
   */
  async findOneEmail(email): Promise<any> {
    const findOne = await this.userModel.findOne({ email: email });
    return findOne;
  }

  /**
   * 
   * @param username 
   * @returns 
   */
  async findOneUsername(username): Promise<any> {
    const findOne = await this.userModel.findOne({ username: username });
    return findOne;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOneById(id): Promise<any> {
    const findOne = await this.userModel.findById(id);
    return findOne;
  }
}