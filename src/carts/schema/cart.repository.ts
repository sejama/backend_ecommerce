import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartDto } from './cart.dto';

export class CartRepository {
  constructor(
    @InjectModel('Cart')
    private cartModel: Model<CartDto>,
  ) {}
  
  /**
   * 
   * @param cart 
   * @returns 
   */
  async create(cart): Promise<any> {
    return await this.cartModel.create(cart);
  }

  /**
   * 
   * @returns 
   */
  async findAll(): Promise<any[]> {
    return await this.cartModel.find();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id): Promise<any> {
    return await this.cartModel.findById(id);
  }

  /**
   * 
   * @param user_id 
   * @returns 
   */
  async findOneUser(user_id): Promise<any> {
    return await this.cartModel.findOne({user_id: user_id});
  }
  
  /**
   * 
   * @param id 
   * @param cart 
   * @returns 
   */
  async update(id, cart): Promise<any> {
    return await this.cartModel.findByIdAndUpdate(id, cart);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id): Promise<any[]> {
    return await this.cartModel.findByIdAndDelete(id);
  }
}